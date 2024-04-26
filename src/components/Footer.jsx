import React from 'react'

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className = "footer">
      <h1>{year} Google, Inc.</h1>
    </div>
  )
}
