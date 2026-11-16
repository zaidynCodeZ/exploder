import { useState } from 'react'
import { 
    InputGroup, 
    Input, 
    InputRightElement, 
    Button,
} from "@chakra-ui/react";


export default function QueryBox() {
    const [query, setQuery] = useState('');
    console.log(query);
    const createQuery = () => {

    }

    return (
        <InputGroup size = 'md' m={5}>
            <Input 
                placeholder='Enter your question:'
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
            <InputRightElement>
                <Button onClick={createQuery} colorScheme='orange'>
                    Enter
                </Button>
            </InputRightElement>
        </InputGroup>
    )    
}