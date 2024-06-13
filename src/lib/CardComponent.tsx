import { Box, Button, Card, CardBody, CardFooter, CardHeader, Center, ChakraProvider, Divider, HStack, Heading, Image, Skeleton, Stack, StackDivider, Tag, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"


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

    const [isLoaded, setIsloaded ] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsloaded(true)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <ChakraProvider>
                <Card h="50vh" w="30vh" variant="outline" boxShadow="md" boxSizing="border-box">
                    <CardBody bg="gray.100" justifyContent="space-evenly">
                        <Box >
                        <Skeleton isLoaded={isLoaded}>
                            <Image 
                                src={img}
                                alt={"Escudo do "+ title}
                                w="sm"
                            />
                        </Skeleton>
                        </Box>
                        <Stack mt={6} spacing="3">
                            <Skeleton isLoaded={isLoaded}>
                                <HStack spacing={3} divider={<StackDivider />}>
                                    {listCategories}
                                </HStack>
                            </Skeleton>
                            <Skeleton isLoaded={isLoaded}>
                                <Heading>{title}</Heading>
                            </Skeleton>
                            <Skeleton isLoaded={isLoaded}>
                                <Text>{resume}</Text>
                            </Skeleton>                         
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <Center>
                            <Skeleton isLoaded={isLoaded}>
                                <Button variant="solid" colorScheme="blue" onClick={onSelected}>Saiba mais</Button>
                            </Skeleton>
                        </Center>
                    </CardFooter>
                </Card>
            </ChakraProvider>
        </>
    )
}