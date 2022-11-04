import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  // maxWidth: 320,
}

// markup
const ImagePage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Image Page</h1>
      <div>
        <Link to="/">Go home</Link>.
      </div>
    </main>
  )
}

export default ImagePage
