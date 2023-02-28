"use client"
import { ChakraProvider } from '@chakra-ui/react'

import Header from './component/Header'
import Footer from './component/footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
       <ChakraProvider>
        
        <Header />
        {children} 
        <Footer />
        
        </ChakraProvider>
    </html>
  )
}
