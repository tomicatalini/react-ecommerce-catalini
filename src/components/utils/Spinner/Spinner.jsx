import { Spinner as ChakraSpinner } from "@chakra-ui/react";

const Spinner = ({text}) => {
    return (
        <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
            <ChakraSpinner thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'/>
            <span className="font-bold text-xl">{text}</span>
        </div>
    )
}

export default Spinner;