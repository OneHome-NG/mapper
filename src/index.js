import PropTypes from 'prop-types'
import React, { useState } from 'react'
import FileReader from './components/FileReader'
import FileMapper from './components/FileMapper'

export const FileToJsonMaper = ({ keys, onComplete }) => {
  const initialState = {
    fileReader: true,
    fileMapper: false,
    displayFile: false
  }
  const initialFile = {
    keys,
    mapsTo: [],
    data: []
  }
  const [stage, setStage] = useState(initialState)
  const [file, setFile] = useState(initialFile)
  const [mapper, setMapper] = useState([])
  const onChange = (data) => {
    setFile({ ...file, mapsTo: data.headers, data: data.body })
    setStage({
      ...stage,
      fileReader: false,
      fileMapper: true
    })
  }
  const onBackToFileReader = () => {
    setFile(initialFile)
    setStage({
      ...stage,
      fileReader: true,
      fileMapper: false
    })
  }
  const onMapperChange = ({ rowIndex, columnIndex, keys, mapTo }) => {
    const index = mapper.findIndex((map) => map.columnIndex === columnIndex)
    if (index >= 0) {
      const map = mapper[index]
      const newMap = {
        ...map,
        keys: keys || map.keys,
        mapTo: mapTo || map.mapTo,
        rowIndex: isNaN(rowIndex) ? map.rowIndex : rowIndex
      }
      mapper[index] = newMap
      return setMapper([...mapper])
    }
    return setMapper([...mapper, { rowIndex, keys, mapTo, columnIndex }])
  }
  const onContinue = () => {
    const newMapper = []

    const temp1Keys = {}
    mapper.forEach((map) => {
      temp1Keys[map.keys] = map.rowIndex
    })
    file.data.forEach((value) => {
      const stupidObject = {}
      Object.keys(temp1Keys).forEach((v) => {
        stupidObject[v] = value[temp1Keys[v]]
      })
      newMapper.push(stupidObject)
    })
    onComplete(newMapper)
  }
  return (
    <React.Fragment>
      <FileReader visible={stage.fileReader} onChange={onChange} />
      <FileMapper
        onContinue={onContinue}
        onChange={onMapperChange}
        onBackToFileReader={onBackToFileReader}
        visible={stage.fileMapper}
        keys={file.keys}
        mapsTo={file.mapsTo}
      />
    </React.Fragment>
  )
}

FileToJsonMaper.propTypes = {
  keys: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string
    })
  ),
  onComplete: PropTypes.func.isRequired,
  display: PropTypes.bool
}

FileToJsonMaper.defaultProps = {
  display: false
}
