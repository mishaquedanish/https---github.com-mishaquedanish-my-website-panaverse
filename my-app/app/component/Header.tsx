import { chakra } from '@chakra-ui/react'
import { Box, Button, Container, Flex, SimpleGrid,Link } from '@chakra-ui/react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Home from './home'
function Header() {
  return (
   <Box boxShadow='lg'>
    <Container maxW={1400}>

      <SimpleGrid templateColumns={{lg:"repeat(3,1fr),base:repeat(2,1fr)"}}>
        <Box>
          <Image height={100} src={logo} alt='panaverse-logo'></Image>
        </Box>
        <Flex gap={'10'} color='black' fontSize={18} fontWeight='semibold' placeItems='center' display={{lg:'flex',base:'none'}}>
          <Link href='/'>Home</Link>
          <Link href='/syllabus'>Syllabus</Link>
          <Link href='/explore'>Explore</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>
        </Flex>

        <Box display={{lg:'initial',base:'none'}}>
          <Link href='https://portal.piaic.org'>
          <Button size='lg' mt='10px' float='right' colorScheme='teal'>Apply</Button>

          </Link>
        </Box>
      </SimpleGrid>
    </Container>

    
   </Box>
  )
}

export default Header






