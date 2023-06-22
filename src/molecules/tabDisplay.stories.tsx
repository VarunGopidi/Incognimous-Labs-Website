import {  Meta,    StoryFn,   } from "@storybook/react";
import TabDisplay from "./tabDisplay";
import Services from "../svgimages/services";
import Work from "../svgimages/work";

export default {
  title: "Components/TabDisplay",
  component: TabDisplay,
} as Meta;

const Template: StoryFn<typeof TabDisplay> = (args) => <TabDisplay {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    // image:<Services/>,
    heading:'Services that we provide',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
};
export const Secondary = Template.bind({});
Secondary.args = {
    // image:<Work/>,
    heading:' Our Works that makes us different',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
};