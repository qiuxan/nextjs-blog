import React from 'react'
import Link from 'next/link'

const loading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-90">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">Loading</h1>
        <hr />
        <p className="lead">
          Please wait while we load the content
        </p>
        <Link className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="/">Return Home</Link>
      </div>
    </div>
  )
}

export default loading