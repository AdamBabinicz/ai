import Home from "@/pages/Home";
import Regulamin from "@/pages/Regulamin";
import PolitykaPrywatnosci from "@/pages/PolitykaPrywatnosci";

export const routes = [
  {
    key: "home",
    paths: {
      pl: "/",
      en: "/",
    },
    component: Home,
  },
  {
    key: "terms",
    paths: {
      pl: "/regulamin",
      en: "/terms-of-service",
    },
    component: Regulamin,
  },
  {
    key: "privacy",
    paths: {
      pl: "/polityka-prywatnosci",
      en: "/privacy-policy",
    },
    component: PolitykaPrywatnosci,
  },
];
