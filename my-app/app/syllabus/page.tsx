"use client"
import { Box, Container,Center, Heading, Text, Flex } from '@chakra-ui/react'
import Home from '../component/home'
import { cards } from '../component/datbase'
function page() {
  return (
    <>
    <Home title='Syllabus'src='https://tse3.mm.bing.net/th?id=OIP.vajh1StsZDKJ339ab-2XFQHaEa&pid=Api&P=0' />
   
<Box pt='30px'>

  <Container maxW={1400}>


    <Center flexDir='column'>
<Heading size='2xl'>Course Syllabus</Heading>

<Text px='130px' mt='20px' textAlign='center'>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each</Text>

    </Center>



    <Center flexDir='column' mt='20px'>
<Heading>Common In All</Heading>

<Text mb='20px' px='130px' textAlign='center'>Every participant of the program will start by completing the following three core courses</Text>

    </Center>



<Center>
<Flex mt='30px'gap='40px'>

  <Box textAlign='center'p='30px' boxShadow='dark-lg' borderRadius='20px' width='290px' >
<Heading>Quarter I</Heading>

<Text pt='5px'>CS-101:Object Oriented Programming Using Typesript and Typesript for React</Text>

  </Box>


  <Box textAlign='center' p='30px'boxShadow='dark-lg' borderRadius='20px'width='290px' >
  <Heading>Quarter II</Heading>

  <Text  pt='5px'>W2-201:Developing Planet-Scale Web 2.0 Apps and APis using Next.JS 13 and Cloud Development
    kit(CDK) for Terraform
  </Text>

  </Box>



  <Box textAlign='center' p='30px'boxShadow='dark-lg' borderRadius='20px'width='290px' >
  <Heading>Quarter III</Heading>

  <Text  pt='5px'>$-101:Dollar Making Bootcamp Full Stack Template and API Product Development</Text>
  </Box>


</Flex>

</Center>
  </Container>







<Container maxW={1400} mt='50px'bgSize='cover' bgAttachment='fixed' bgImage='https://tse4.mm.bing.net/th?id=OIP.4Dv-NcFTjDoRtWzSkdbfCQHaEK&pid=Api&P=0&w=300&h=300'>

{cards.map((elm)=> (
  <Box p='40px' key={elm.id}>
<Center flexDir='column'marginTop='50px'>
<Heading size='xl'>{elm.heading1}</Heading>

<Text px='130px' mt='20px' textAlign='center'>{elm.text1}</Text>

    </Center>



    <Center>
<Flex mt='30px'gap='40px'>

  <Box textAlign='center'p='50px' boxShadow='dark-lg' borderRadius='20px' width='350px' >
<Heading>{elm.heading2}</Heading>

<Text pt='5px'>{elm.text2}</Text>

  </Box>


  <Box textAlign='center' p='50px'boxShadow='dark-lg' borderRadius='20px'width='350px' >
  <Heading>{elm.heading3}</Heading>

  <Text  pt='5px'>{elm.text3}</Text>

  </Box>



</Flex>

</Center>

</Box>

))}

</Container>



</Box>



    </>
  )
}

export default page