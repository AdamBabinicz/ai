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
    "AI pomoże odkryć nowe leki w czasie krótszym niż 2 lata zamiast dzisiejszych 10-15 lat.",
    "Do 2028 roku AI będzie w stanie tworzyć filmy pełnometrażowe na podstawie prostego opisu tekstowego.",
    "Robots z AI będą wykonywać 30% prac domowych w przeciętnym gospodarstwie do 2032 roku.",
    "AI będzie diagnozować choroby psychiczne z dokładnością przewyższającą lekarzy o 40%.",
    "Systemy AI będą zarządzać ruchem miejskim, redukując korki o 60% w głównych metropoliach.",
    "Do 2035 roku AI będzie projektować 80% nowych leków bez udziału człowieka.",
    "Personalizowane programy nauczania AI zwiększą efektywność edukacji o 150%.",
    "AI będzie przewidywać trendy giełdowe z dokładnością 85% na okres 6 miesięcy.",
    "Wirtualni asystenci AI będą prowadzić terapie psychologiczne dla 50% pacjentów.",
    "AI automatycznie wykryje i naprawi 90% błędów w oprogramowaniu przed wydaniem.",
    "Systemy AI będą optymalizować zużycie energii w miastach, oszczędzając 40% prądu.",
    "Do 2030 roku AI będzie tworzyć muzykę dostosowaną do nastroju słuchacza w czasie rzeczywistym.",
    "Roboty z AI będą asystować w 70% operacji chirurgicznych, zwiększając precyzję o 300%."
  ],
  en: [
    "By 2030, 85% of business decision-making processes will be AI-assisted.",
    "Artificial intelligence will help reduce medical diagnosis time by 70%.",
    "AI will generate 40% of all programming code in the next decade.",
    "Autonomous vehicles will make up 15% of all cars on roads by 2035.",
    "Personalized AI assistants will become standard in every household.",
    "AI systems will predict equipment failures with 95% accuracy before they occur.",
    "Real-time translation will become so precise that language barriers will cease to exist.",
    "AI will help discover new drugs in less than 2 years instead of today's 10-15 years.",
    "By 2028, AI will be able to create full-length movies from simple text descriptions.",
    "AI robots will perform 30% of household chores in average homes by 2032.",
    "AI will diagnose mental health conditions with 40% greater accuracy than doctors.",
    "AI traffic management systems will reduce city congestion by 60% in major metros.",
    "By 2035, AI will design 80% of new medications without human intervention.",
    "Personalized AI tutoring programs will increase educational efficiency by 150%.",
    "AI will predict stock market trends with 85% accuracy over 6-month periods.",
    "Virtual AI therapists will provide psychological treatment for 50% of patients.",
    "AI will automatically detect and fix 90% of software bugs before release.",
    "AI systems will optimize city energy consumption, saving 40% of electricity.",
    "By 2030, AI will create music adapted to listener's mood in real-time.",
    "AI robots will assist in 70% of surgeries, increasing precision by 300%."
  ]
};
