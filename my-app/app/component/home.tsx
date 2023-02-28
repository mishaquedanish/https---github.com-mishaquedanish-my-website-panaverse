import { Box, Container, Heading } from '@chakra-ui/react'
import React from 'react'

function home(hello:any) {
  return (
    <Box bgImage={hello.src} py='300px'bgSize='cover'bgAttachment='fixed'>
        <Container maxW={1100}>
<Heading color='black' size='3xl'>{hello.title}</Heading>
        </Container>
    </Box>
  )
}

export default home