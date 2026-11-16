import { VStack } from '@chakra-ui/react'
import Input from './components/Input'
import Title from './components/Header'
import Response from './components/Response'
import QueryBox from './components/Input'



export default function App() {
  return (
    <VStack mx={20} my={10}>
        <Title/>
        <QueryBox/>
        <Response/>
    </VStack>
  )
}
