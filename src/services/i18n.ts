import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  resources: {
    en: {
      translation: {
        Lorem: {
          1: {
            head: "Interested in the IT world since my childhood.",
            body: "I started programming with VB.NET.",
          },
          2: {
            head: "After some years with my first language",
            body: "I switched to C#",
          },
          3: {
            head: "Recently I discovered that",
            body: "I can read C++ code fairly easily",
          },
          4: {
            head: "I always prefered",
            body: "Software over Web development.",
          },
          5: {
            head: "The web dev. area is enjoyable",
            body: "With JS, TS, React or Electron.",
          },
          6: {
            head: "One of my favorite topics",
            body: "is Reverse-Engineering.",
          },
        },
      },
    },
    fr: {
      translation: {
        Lorem: {
          1: {
            head: "Intéressé par l'informatique depuis mon enfance.",
            body: "J'ai commencé la programmation avec VB.NET.",
          },
          2: {
            head: "Après quelques années avec mon premier langage",
            body: "Je suis passé au C#",
          },
          3: {
            head: "Récemment j'ai découvert que",
            body: "Je peux lire du code C++ assez facilement.",
          },
          4: {
            head: "J'ai toujours préféré",
            body: "le Software au développement Web.",
          },
          5: {
            head: "Le développement web est séduisant",
            body: "avec JS, TS, React ou Electron.",
          },
          6: {
            head: "Un de mes sujets favoris",
            body: "est le Reverse-Engineering (Rétro-ingénierie).",
          },
        },
      },
    },
  },
});

export default i18next;
