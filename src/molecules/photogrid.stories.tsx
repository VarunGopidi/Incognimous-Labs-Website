/*import { Meta,  StoryObj } from "@storybook/react";
import PhotoGrid from "./photogrid";
import GLAuniv from "../svgimages/glauniv";
import DU from "../svgimages/DU";
import LPU from "../svgimages/LPU";
import JIM from "../svgimages/JIM";

export default {
  title: "Components/PhotoGrid",
  component: PhotoGrid,
} as Meta;

type Story = StoryObj<Meta>;

export const Primary: Story = {
    args: {
      image1 : <GLAuniv/>,
      image2 : <DU/>,
      image3 : <LPU/>,
      image4 : <JIM/>,
    },
  };
*/
  import React from "react";
  import { ComponentStory, StoryFn } from "@storybook/react";
  import PhotoGrid from "./photogrid";
  import user from "../../../../public/assets/icons/Vectoruser.svg";
  import business from "../../../../public/assets/icons/Business.svg";
import GLAuniv from "../svgimages/glauniv";
import DU from "../svgimages/DU";
import JIM from "../svgimages/JIM";
import LPU from "../svgimages/LPU"
import index1233 from "../stories/assets/index1233.svg";
import image2 from "../stories/assets/DU_Logo 2.svg"
  
  export default {
    title: "Molecules/PhotoGrid",
    component: PhotoGrid,
  };
  
  const Template: StoryFn<typeof PhotoGrid> = (args) => (
    <PhotoGrid {...args} />
  );
  
  export const WithSubtitle = Template.bind({});
  WithSubtitle.args={
  }
