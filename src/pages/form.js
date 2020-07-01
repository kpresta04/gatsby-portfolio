import React, { useEffect } from "react"

export default function Form(props) {
  useEffect(() => {
    setTimeout(() => {
      props.history.push("/")
    }, 2500)
  }, [])
  return <div>Form received!</div>
}
