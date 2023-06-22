import {  Meta,    StoryFn,   } from "@storybook/react";
import TextGrid, { TextGridProps } from "./textgrid";

export default {
  title: "Components/TextGrid",
  component: TextGrid,
} as Meta;

const Template: StoryFn<typeof TextGrid> = (args) => <TextGrid {...args} />;;


export const Primary = Template.bind({});
Primary.args = {
  heading: 'Get Ideas',
  info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'
};