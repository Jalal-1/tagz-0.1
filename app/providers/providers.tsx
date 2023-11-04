"use client"
import React from 'react'
import WagmiProvider from './WagmiProvider'

type ProviderType = {
  children: React.ReactNode
}
// Add auth context here and any other providers that need to be wrapped around the app

const Providers = ({children}: ProviderType) => {
  return (
    <WagmiProvider>{children}</WagmiProvider>
  )
}

export default Providers