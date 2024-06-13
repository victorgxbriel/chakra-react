import { time } from "./Times";
import timesJSON from "../assets/times.json"
import { ChakraProvider, HStack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import CardComponent from "./CardComponent";



export default function Ligas() {
    const initialData = timesJSON as time[]
    const listBrasileirao = initialData.filter(timeLig => timeLig.categories.includes("Brasileirão")).map((times, index) => {
        return (
            <>
                <CardComponent key={index} title={times.title} img={times.img} resume={times.resume} categories={times.categories} />
            </>
        )
    })
    const listLaLiga = initialData.filter(timeLig => timeLig.categories.includes("La Liga")).map((times, index) => {
        return (
            <>
                <CardComponent key={index} title={times.title} img={times.img} resume={times.resume} categories={times.categories} />
            </>
        )
    })
    const listPremier = initialData.filter(timeLig => timeLig.categories.includes("Premier")).map((times, index) => {
        return (
            <>
                <CardComponent key={index} title={times.title} img={times.img} resume={times.resume} categories={times.categories} />
            </>
        )
    })
    return(
        <>
        <ChakraProvider>
            <Tabs variant="enclosed">
                <TabList>
                    <Tab>Brasileirão</Tab>
                    <Tab>La Liga</Tab>
                    <Tab>Premier</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <HStack spacing={5}>
                        { listBrasileirao}
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                    <HStack spacing={5}>
                        { listLaLiga}
                        </HStack>
                    </TabPanel>
                    <TabPanel>
                    <HStack spacing={5}>
                        { listPremier}
                        </HStack>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </ChakraProvider>
        </>
    )
}