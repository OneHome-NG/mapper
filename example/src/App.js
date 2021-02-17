import React from 'react'

import { FileToJsonMaper } from 'mapper'
import 'mapper/dist/index.css'
const keys = {
  ours: [
      { value: "surname", label: "Surname" },
      { value: "otherNames", label: "Other Names" },
      { value: "email", label: "email" },
      { value: "password", label: "Password" },
  ],
  theirs: [
      { value: "bankName", label: "BankName" },
      { value: "tellerNumber", label: "Teller" },
      { value: "tellerDate", label: "Date" },
      { value: "status", label: "Status" },
      { value: "phone", label: "Phone" },
  ]
}
const App = () => {
  return <FileToJsonMaper keys={keys.ours} mapsTo={keys.theirs} />
}

export default App
