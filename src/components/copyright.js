import React from "react"

const Copyright = () => {
  return (
    <div className="text-center my-8">
      {"Copyright © "}
      <a href={`/`}>420asia.org, 麻麻呼呼</a> {new Date().getFullYear()}
      {"."}
    </div>
  )
}

export default Copyright
