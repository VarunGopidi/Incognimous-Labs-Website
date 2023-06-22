import { Meta,  StoryObj } from "@storybook/react";
import Footer from "./footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

type Story = StoryObj<Meta>;

export const Primary: Story = {
    args: {
      primary: true,
    },
  };
