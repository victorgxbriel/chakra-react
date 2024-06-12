import { StoryObj, Meta } from "@storybook/react";
import IndexTimes from "../lib/IndexTimes";


const meta = {
    title: 'Lib/IndexTimes',
    component: IndexTimes
} satisfies Meta<typeof IndexTimes>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}