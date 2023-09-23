import { Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = ({text}) => {
    return (
        <>
            <ChakraSpinner thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'/>
            <span>{text}</span>
        </>
    )
}

export default Spinner;