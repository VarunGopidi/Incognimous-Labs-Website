import { Meta,  StoryObj } from "@storybook/react";
import Navbar from "./navbar";

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta;

type Story = StoryObj<Meta>;

export const Primary: Story = {
    args: {
      primary: true,
    },
  };
