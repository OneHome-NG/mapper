import PropTypes from 'prop-types'
import React from 'react'
import styles from '../styles.module.css'
import Select from 'react-select'
import { Card } from 'antd'

const FileReader = ({
  keys,
  mapsTo,
  visible,
  onBackToFileReader,
  onChange,
  onContinue
}) => {
  if (!keys || !mapsTo || !visible) return null
  const rowIndex = mapsTo.map(({ value }) => value)
  return (
    <React.Fragment>
      <div className={styles.file_to_json_style}>
        {keys.map((value, index) => (
          <Card key={index} className={styles.file_to_json_card_style}>
            <p className={styles.file_to_json_card_text_style}>
              Please select a key
            </p>
            <Select
              className='basic-single  text-capitalize file_to_json_padding_top'
              classNamePrefix='select'
              onChange={({ value }) => {
                onChange({
                  keys: value,
                  columnIndex: index
                })
              }}
              isLoading={false}
              isClearable={false}
              name='keys'
              options={keys}
            />
            <Select
              className={styles.file_to_json_padding_top}
              classNamePrefix='select'
              onChange={({ value }) => {
                onChange({
                  rowIndex: rowIndex.indexOf(value),
                  mapTo: value,
                  columnIndex: index
                })
              }}
              isLoading={false}
              isClearable={false}
              name='mapsTo'
              options={mapsTo}
            />
          </Card>
        ))}
      </div>
      <div className={styles.file_to_json_back_button}>
        <button onClick={onBackToFileReader}>Back</button>
        <button onClick={onContinue}>Continue</button>
      </div>
    </React.Fragment>
  )
}

FileReader.propTypes = {
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
  ).isRequired,
  visible: PropTypes.bool.isRequired,
  onBackToFileReader: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onContinue: PropTypes.func.isRequired
}

export default FileReader
