import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, ChakraProvider, Divider, HStack, Heading, Image, Stack, StackDivider, Tag, Text } from "@chakra-ui/react"


export type CardComponentP = {
    img: string,
    categories: string[],
    title: string,
    resume: string,
    onSelected?: () => void
}

export default function CardComponent(props: CardComponentP) {
    const { img, categories, title, resume, onSelected } = props
    const listCategories = categories.map((category) => {
        return <>
            <Tag key={category} variant="outline" > {category} </Tag>
        </>
    })

    return (
        <>
            <ChakraProvider>
                <Card h="50vh" w="30vh" variant="outline" boxShadow="md" boxSizing="border-box">
                    <CardBody bg="gray.100" justifyContent="space-evenly">
                        <Box >
                        <Image 
                            src={img}
                            alt={"Escudo do "+ title}
                            w="sm"
                        />
                        </Box>
                        <Stack mt={6} spacing="3">
                            <HStack spacing={3} divider={<StackDivider />}>
                                {listCategories}
                            </HStack>
                            <Heading>{title}</Heading>
                            <Text>{resume}</Text>                         
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Center>
                            <Button variant="solid" colorScheme="blue" onClick={onSelected}>Saiba mais</Button>
                        </Center>
                    </CardFooter>
                </Card>
                
            </ChakraProvider>
        </>
    )
}