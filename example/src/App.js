import React from 'react'

import { FileToJsonMaper } from 'mapper'
import 'mapper/dist/index.css'
const keys = [
  { value: "surname", label: "Surname" },
  { value: "otherNames", label: "Other Names" },
  { value: "email", label: "email" },
  { value: "password", label: "Password" },
]
const App = () => {
  return <FileToJsonMaper keys={keys} onComplete={(data) => console.log(data)} display />
}

export default App
