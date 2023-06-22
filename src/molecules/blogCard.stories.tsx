import {  Meta,    StoryFn,   } from "@storybook/react";
import BlogCard from "./blogCard";
import CardImage from "../svgimages/card";

export default {
  title: "Components/BlogCard",
  component: BlogCard,
} as Meta;

const Template: StoryFn<typeof BlogCard> = (args) => <BlogCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    image : <CardImage/>,
    heading : 'Headline goes here',
    info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    date : '5 Nov, 2021',
   };
export const Secondary = Template.bind({});
Secondary.args = {
    image : <CardImage/>,heading : 'Headline goes here',
    info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    date : '5 Nov, 2021',
    };

export const Ternery = Template.bind({});
Ternery.args = {
    image : <CardImage/>,
    heading : 'Headline goes here',
    info : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    date : '5 Nov, 2021',
};
