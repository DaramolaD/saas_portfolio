import { syne } from '@/app/font'
import React from 'react'

const SectionHeader = ({children}) => {
  return (
    <h3 className={`${syne.className} !italic text-4xl leading-normal sm:text-6xl bg-gradient-to-b from-primary to-white bg-clip-text text-transparent w-full`}>
      {children}
    </h3>
  )
}

export default SectionHeader
