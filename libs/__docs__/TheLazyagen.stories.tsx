import type { Meta, StoryObj } from "@storybook/react";
import { TheLazyagen } from "../";

const meta = {
  title: "Example/TheLazyagen",
  component: TheLazyagen,
  parameters: {
    text: "hi",
  },
} satisfies Meta<typeof TheLazyagen>;

type Story = StoryObj<typeof meta>;

export const test: Story = {
  args: {
    text: "hi this is how this story works",
    color: "red",
    bg: "gold",
    size: "15px",
  },
};

export default meta;
