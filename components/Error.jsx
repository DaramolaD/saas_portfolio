'use client'
import React from 'react'

const Error = () => {
  return (
    <div>
      <div className="w-full h-full justify-center items-center">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
    </div>
  )
}

export default Error
