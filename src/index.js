import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Select from 'react-select'
import { Card } from 'antd'
import FileReader from './components/FileMapper'

export const FileToJsonMaper = ({ keys, mapsTo }) => {
  if (!keys || !mapsTo) return null
  return (
    <>
      <FileReader />
    </>
  )
}

FileToJsonMaper.propTypes = {
  keys: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired,
  mapsTo: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string
    })
  ).isRequired
}
