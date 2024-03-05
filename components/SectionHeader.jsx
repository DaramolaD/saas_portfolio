import { kaushanScript } from '@/app/font'
import React from 'react'

const SectionHeader = ({children}) => {
  return (
    <h3 className={`${kaushanScript.className} text-6xl text-white`}>
      {children}
    </h3>
  )
}

export default SectionHeader
