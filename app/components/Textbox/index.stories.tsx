import type { Meta, StoryObj } from "@storybook/react";
import { Textbox } from ".";

const meta = {
  title: "Components/Textbox",
  component: Textbox,
} satisfies Meta<typeof Textbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    value: "",
    onChange: () => {},
  },
};
