import { ChakraProvider } from "@chakra-ui/react"
import { Login } from "./login"

export default function Index() {
    return(<>
    <ChakraProvider>
        <Login></Login>
    </ChakraProvider>
    </>)
}