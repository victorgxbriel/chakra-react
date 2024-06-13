import { StoryObj, Meta } from "@storybook/react";
import Ligas from "../lib/Ligas";


const meta = {
    title: 'Lib/Ligas',
    component: Ligas
} satisfies Meta<typeof Ligas>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}