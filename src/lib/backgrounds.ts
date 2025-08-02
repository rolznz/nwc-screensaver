import { Constellation } from "@/pages/Backgrounds/Constellation";
import { Fireflies } from "@/pages/Backgrounds/Fireflies";
import { Stars } from "@/pages/Backgrounds/Stars";

export const backgrounds = {
  stars: {
    label: "Stars",
    component: Stars,
  },
  fireflies: {
    label: "Fireflies",
    component: Fireflies,
  },
  constellation: {
    label: "Constellation",
    component: Constellation,
  },
};
export const backgroundEntries = Object.entries(backgrounds);
