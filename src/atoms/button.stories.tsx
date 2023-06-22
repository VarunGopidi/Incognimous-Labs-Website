import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from "./button";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "GET IN TOUCH",
  onClick: () => console.log("Button clicked!"),
  backgroundColor : '#01487E',
  
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "CONTACT US",
  onClick: () => console.log("Button clicked!"),
  backgroundColor : '#FFFFFF',
};
