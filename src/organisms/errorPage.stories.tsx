import { Meta,  StoryObj } from "@storybook/react";
import ErrorPage from "./errorPage";

export default {
  title: "Components/ErrorPage",
  component: ErrorPage,
} as Meta;

type Story = StoryObj<Meta>;

export const Primary: Story = {
    args: {
        heading:'OOPS! PAGE NOT FOUND',
        info:'Sorry, the page you are looking for doesn’t exist.',
        primary:true,
    },
  };
