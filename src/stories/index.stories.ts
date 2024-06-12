import { StoryObj, Meta } from "@storybook/react";
import Index from "../lib/Index";


const meta = {
    title: 'Lib/Index',
    component: Index
} satisfies Meta<typeof Index>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}