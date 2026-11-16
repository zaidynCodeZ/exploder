import { Textarea } from "@chakra-ui/react";

export default function Response() {
    let response = 'This is the response';

    return (
        <Textarea 
            size='md'
            value={response}
        />
    )
}