import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const aiPredictions = {
  pl: [
    "Do 2030 roku, 85% procesów decyzyjnych w firmach będzie wspomaganych przez AI.",
    "Sztuczna inteligencja pomoże zredukować czas potrzebny na diagnozę medyczną o 70%.",
    "AI będzie generować 40% całego kodu programistycznego w następnej dekadzie.",
    "Autonomiczne pojazdy będą stanowić 15% wszystkich samochodów na drogach do 2035 roku.",
    "Personalizowane asystenci AI staną się standardem w każdym gospodarstwie domowym.",
    "Systemy AI będą przewidywać awarie urządzeń z dokładnością 95% przed ich wystąpieniem.",
    "Tłumaczenie w czasie rzeczywistym stanie się tak precyzyjne, że bariery językowe przestaną istnieć.",
    "AI pomoże odkryć nowe leki w czasie krótszym niż 2 lata zamiast dzisiejszych 10-15 lat."
  ],
  en: [
    "By 2030, 85% of business decision-making processes will be AI-assisted.",
    "Artificial intelligence will help reduce medical diagnosis time by 70%.",
    "AI will generate 40% of all programming code in the next decade.",
    "Autonomous vehicles will make up 15% of all cars on roads by 2035.",
    "Personalized AI assistants will become standard in every household.",
    "AI systems will predict equipment failures with 95% accuracy before they occur.",
    "Real-time translation will become so precise that language barriers will cease to exist.",
    "AI will help discover new drugs in less than 2 years instead of today's 10-15 years."
  ]
};
