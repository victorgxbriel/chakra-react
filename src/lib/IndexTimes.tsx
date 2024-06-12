import { ChakraProvider } from "@chakra-ui/react";
import Times, { TimesP, time } from "./Times";
import timesJSON from "../assets/times.json"


export default function IndexTimes() {
    const initialData = timesJSON as time[]
    return (
        <>
        <ChakraProvider>
            <Times times={initialData}/>
        </ChakraProvider>
        </>
    )
}