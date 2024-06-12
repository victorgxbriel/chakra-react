import { Button, Center, ChakraProvider, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Image } from "@chakra-ui/react";
import CardComponent from "./CardComponent";
import { useState } from "react";

export interface time  {
    img: string,
    categories: string[],
    description: string,
    title: string,
    resume: string,
}
export type TimesP = {
    times: time[]
}

export default function Times(props: TimesP) {
    const { times } = props
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [ selecetedTime, setSelectedTime ] = useState<{ title: string, img:string, description: string}>()
    const listTimes = times.map((time, index) => {
        return (
            <>
                <CardComponent key={index} title={time.title} img={time.img} resume={time.resume} categories={time.categories} onSelected={() => {openModal(time)}}/>
            </>
        )
    })

    const openModal = (time: {title: string, img: string, description: string}) => {
        setSelectedTime(time)
        onOpen()
    }

    return (
        <>
        <ChakraProvider>
            <Center as="section" bg="white" h="100vh" justifyContent="space-evenly">
                {listTimes}
            </Center>


            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay>
                    <ModalContent>
                        <Center>
                            <ModalHeader>{selecetedTime?.title}</ModalHeader>
                        </Center>
                        <ModalCloseButton/>
                        <ModalBody>
                            <Image src={selecetedTime?.img} />
                            {selecetedTime?.description}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={onClose} colorScheme="blue" mr={3}> Fechar </Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </ChakraProvider>
        </>
    )
}