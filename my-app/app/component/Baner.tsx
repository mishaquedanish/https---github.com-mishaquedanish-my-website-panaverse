import { Box, Button, Container, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/image'
import lg from '../../public/Baner.jpg'
import lg2 from '../../public/image.png'

import { RevealWrapper } from  'next-reveal'
function Baner() {
  return (

         <>
   <Box bg='whiteAlpha.900'>


<RevealWrapper origin='left' delay={200} duration={1000} distance='500px' reset={true}>
    <Container maxW={1400}>

        <Flex pt='150px'pb='100px'px='40px'  display={{ lg: 'flex', base: 'grid' }}>

            
        <Box flexBasis='50%'>
                <Image  width={300} height='100' src={lg} alt='panaverse'></Image>
            </Box>


            <Box flexBasis='50%'>
                <Heading fontSize={60}>Prepare yourself for the Next Generation of Internet with Panaverse</Heading>

                <Text pt='10px' fontSize={30}>One year Panaverse DAO Earn as you learn Program Consolidating
                    Web 3.0 and Metaverse,Artifical Intelligence(AI),Cloud Edge and Ambient Computing/IOT Technologies


                    <Link href='https://www.panaverse.co'>
<Button size='lg'mt='20px' colorScheme='teal'>Read More</Button>
</Link>
                </Text>
            </Box>
            
        </Flex>

    </Container>
    </RevealWrapper>
   </Box>




<Box pb='30px'pt='200px'>
    <Container maxW={1400}>
<Flex gap='150px'>

<Box flexBasis='50%'>
        <Heading fontSize={60}>Program of Studies</Heading>

        <Text pt='10px' fontSize={30}>This curriculum is intended for beginners who want to learn software
            development from the ground up.it is going to be a fifteen-month.long
            hybrid program that includes both onsite and online classes and is
            divided into five quarters of 13 weeks each.The emphasis will be on hands-on
            learning by educating students to produce projects.
        </Text>


<Link href='https://www.panaverse.co'>
<Button size='lg'mt='20px' colorScheme='teal'>Read More</Button>
</Link>
    </Box>




    <Box flexBasis='50%'>

        <Image  width={500} height='100' src={lg2}alt='panaverse'></Image>
    </Box>

    
</Flex>
    </Container>
</Box>



   </>
    )
}

export default Baner