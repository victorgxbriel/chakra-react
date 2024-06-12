import { StoryObj, Meta } from "@storybook/react";
import CardComponent from "../lib/CardComponent";


const meta = {
    title: 'Lib/CardComponent',
    component: CardComponent
} satisfies Meta<typeof CardComponent>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        img: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flamengo_braz_logo.svg",
        title: "Teste",
        resume: "Testando",
        categories: [
            "Teste 1",
            "Teste 2"
        ]
    }
}