import { Button, ChakraProvider, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react"

export default function Index() {
    const { toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100",  "gray.700")
    return(<>
    <ChakraProvider>
        <Flex height="100hv" alignItems="center" justifyContent='center'>
            <Flex direction="column" background={formBackground} p={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>
                <Input placeholder="victor@email.com" variant="filled" mb={3} type="email"/>
                <Input placeholder="*******" variant="filled" mb={6} type="password" />
                <Button colorScheme="teal" mb={6}> Log in</Button>
                <Button onClick={toggleColorMode}>Toggle Color Mode</Button>
                <Button></Button>
            </Flex>
        </Flex>
    </ChakraProvider>
    </>)
}