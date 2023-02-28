"use client"
import { chakra, Container, Grid, Heading, SimpleGrid,Text,Image} from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
// import Image from 'next/image'
import Link from 'next/link'
// import logo from '../../public/logo.png'


function Footer() {
  return (
    <Box bg='black'>

        <Container maxW={1500}>
            <SimpleGrid spacing='30px' py='500px' templateColumns={{lg:'repeat(4,1fr)',base:'repeat(1,1fr)'}} textAlign={{lg:'start',base:'center'}}>
                <Box>
                    <Heading mb='20px' color='white'>ABOUT US</Heading>
                    <Image m={{base:'auto',lg:'0'}} height={100} src='/logo.png' alt='panaverse-logo'></Image>
                    <Text pt='50px' pr={{lg:'40px',base:'0'}}  color='gray'>The Future of the Web is Web 3.0 Metaverse and Edge Computing Panaverse DAO is a movement to spread these tecnolgies globally.it is community of Web 3 and Metaverse
                        developers,designers,trainers startup founders and service providers.
                        
                    </Text>
                </Box> 
            
                <Box pl='70px'>
                    
                <Heading color='white'>Useful Links</Heading>
                    
                    <Grid color='gray'>
                    <Link href='/'>Home</Link>
                    <Link href='/syllabus'>Syllabus</Link>
                    <Link href='/explore'>Explore</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/contact'>Contact</Link>

                    </Grid>
                </Box>


                <Box >

                    <Heading color='white'>Follow Us</Heading>
                    
                <Grid color='gray'>
                    <Link href='https://www.facebook.com/groups/piaic/'>Facebook</Link>
                    <Link href='https://www.linkedin.com/company/panaverse/'>Linkedin</Link>
                    <Link href='https://twitter.com/Panaverse_edu'>Twitter</Link>
                    <Link href='https://www.youtube.com/@panaverse'>YouTube</Link>
                    <Link href='https://github.com/panaverse'>GitHub</Link>

                    </Grid>
                </Box>

                
                <Box >

                    <Heading color='white'>Contact Us</Heading>

                    <Grid color='gray'>

                    <Link href='/'>+923179201033</Link>
                    <Link href='/'>muammadishaquedanish@gmail.com</Link>
                    <Link href='/'>islamabad,pakistan</Link>

                    </Grid>
                </Box>
            </SimpleGrid>

        </Container>

    </Box>
  )
}

export default Footer




