import PropTypes from 'prop-types'
import React from 'react'
import styles from './styles.module.css'
import Select from 'react-select'
import { Card } from 'antd'

export const FileToJsonMaper = ({ keys, mapsTo }) => {
  if (!keys || !mapsTo) return null
  return (
    <div className={styles.file_to_json_style}>
      <Card className={styles.file_to_json_card_style}>
        <p className={styles.file_to_json_card_text_style}>
          Please select a key
        </p>
        <Select
          className='basic-single  text-capitalize file_to_json_padding_top'
          classNamePrefix='select'
          // isDisabled={true}
          isLoading={false}
          isClearable={false}
          name='keys'
          options={keys}
        />
        <Select
          className={styles.file_to_json_padding_top}
          classNamePrefix='select'
          // isDisabled={true}
          isLoading={false}
          isClearable={false}
          name='mapsTo'
          options={mapsTo}
        />
      </Card>
    </div>
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
