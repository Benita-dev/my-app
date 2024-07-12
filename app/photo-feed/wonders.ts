import { StaticImageData } from "next/image";
import photo1 from "./photos/1.png";
import photo2 from "./photos/2.png";
import photo3 from "./photos/3.png";
import photo4 from "./photos/4.png";
import photo5 from "./photos/5.png";
import photo6 from "./photos/6.png";
import photo7 from "./photos/7.png";
import photo8 from "./photos/8.png";
import photo9 from "./photos/9.png";
import photo10 from "./photos/10.png";
import photo11 from "./photos/11.png";
import photo12 from "./photos/12.png";
import photo13 from "./photos/13.png";
import photo14 from "./photos/14.png";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const WonderImages: WonderImage[] = [
  {
    id: "1",
    name: "Mad Setup",
    src: photo1,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "2",
    name: "Mad Setup",
    src: photo2,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "3",
    name: "Mad Setup",
    src: photo3,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "4",
    name: "Mad Setup",
    src: photo4,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "5",
    name: "Mad Setup",
    src: photo5,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "6",
    name: "Mad Setup",
    src: photo6,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "7",
    name: "Mad Setup",
    src: photo7,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "8",
    name: "Mad Setup",
    src: photo8,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "9",
    name: "Mad Setup",
    src: photo9,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "10",
    name: "Mad Setup",
    src: photo10,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "11",
    name: "Mad Setup",
    src: photo11,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "12",
    name: "Mad Setup",
    src: photo12,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "13",
    name: "Mad Setup",
    src: photo13,
    photographer: "Suraj",
    location: "Iran",
  },
  {
    id: "14",
    name: "Mad Setup",
    src: photo14,
    photographer: "Suraj",
    location: "Iran",
  },
];
