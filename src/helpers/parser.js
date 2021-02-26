import readCSVFile from 'papaparse'
import readXlsxFile from 'read-excel-file'

export const getExtextion = (file) => {
  const extention = file.name.split('.')[file.name.split('.').length - 1]
  if (extention.toLowerCase() === 'csv') return csvParser(file)
  if (extention.toLowerCase().includes('xls')) return excelPasser(file)
}
export const csvParser = (file) => {
  return readCSVFile.parse(file, {
    complete: function ({ data: parsedData, errors }) {
      if (errors.length) return errors
      const data = {
        body: parsedData.splice(1, parsedData.length),
        headers: parsedData[0].map((value) => ({ value, label: value }))
      }
      return data
    }
  })
}

export const excelPasser = async (file) => {
  try {
    const data = await readXlsxFile(file)
    return {
      headers: data[0].map((value) => ({ value, label: value })),
      body: data.splice(1, data.length)
    }
  } catch (e) {
    console.log(e)
  }
}
