import React, { useEffect } from "react"

export default function form(props) {
  useEffect(() => {
    setTimeout(() => {
      props.history.push("/")
    }, 2500)
  }, [])
  return <div>Form received!</div>
}
