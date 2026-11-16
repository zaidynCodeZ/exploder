import { useState } from 'react'
import { Button, Heading, Input, InputGroup, InputRightElement, Textarea, VStack } from '@chakra-ui/react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function InputBox() {
    const [query, setQuery] = useState('');

    const createQuery = () => {

    }    

    return (
        <InputGroup size = 'md' m={5}>
            <Input 
                placeholder = 'Enter your question:'
            />
            <InputRightElement>
                <Button onClick={createQuery} colorScheme='orange'>
                    Enter
                </Button>
            </InputRightElement>
        </InputGroup>
        
    )    
}

function OutputBox() {
    let response = 'This is the response';

    return (
        <Textarea 
            size='md'
            value={response}
        />
    )
}

export default function App() {
  return (
    <VStack mx={20} my={10}>
        <Heading as="h1" size="xl" textAlign="center">
            Exploding Kittens Rules
        </Heading>
        <InputBox/>
        <OutputBox/>
    </VStack>
  )
}
