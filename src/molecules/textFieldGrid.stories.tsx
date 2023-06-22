import {  Meta,    StoryFn,   } from "@storybook/react";
import TextFieldGrid from "./textFieldGrid";

export default {
  title: "Components/TextFieldGrid",
  component: TextFieldGrid,
} as Meta;

const Template: StoryFn<typeof TextFieldGrid> = (args) => <TextFieldGrid {...args} />;;


export const Primary = Template.bind({});
Primary.args = {
  heading: 'Name',
};