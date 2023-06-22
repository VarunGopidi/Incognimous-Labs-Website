import {  Meta,    StoryFn,   } from "@storybook/react";
import HomeSlider from "./homeSlider";
import image13 from "../stories/assets/image 13.svg";
import Slider1 from "../svgimages/slider1";
import Slider2 from "../svgimages/slider2";
import Slider3 from "../svgimages/slider3";

export default {
  title: "Components/HomeSlider",
  component: HomeSlider,
} as Meta;

const Template: StoryFn<typeof HomeSlider> = (args) => <HomeSlider {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    image: image13,
    heading:'DESIGN & DEVELOPMENT',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
   };
/*export const Secondary = Template.bind({});
Secondary.args = {
    image:<Slider2/>,
    heading:'Preventing Cyber Threats',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    };

export const Ternery = Template.bind({});
Ternery.args = {
    image:<Slider3/>,
    heading:'OPERATING & MAINTAINING',
    info:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,',
    };*/
