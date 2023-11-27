import Crypto from "../../assets/project_images/CryptoCurrency.png";
import Homeland from "../../assets/project_images/HomeLand_real_estate.png";
import Budget_Tracker from "../../assets/project_images/budget_tracker.png";
import Recipe from "../../assets/project_images/Recipe.png";
import Weather from "../../assets/project_images/Weather.png";
import Word_Association from "../../assets/project_images/Word_Association.png";
import E_Commerce from "../../assets/project_images/e-commerce.png";
import Spotify_Clone from "../../assets/project_images/spotify_clone.png";

export const reactProjects = [
  {
    img: Spotify_Clone,
    title: "Spotify Clone",
    featured: true,
    seeCode: "https://github.com/kieronthomas132/spotify_fullstack",
    seeLive: "https://spotify-fullstack-alpha.vercel.app/home",
    description:"As an avid music fan, I decided my most ambitious and biggest project would be to create this Spotify Clone. Built with Node.js, Express, MongoDB, React, and TypeScript, it's a full-stack clone aiming to replicate Spotify's vibe. Using the Spotify API via RapidAPI, this application has got all the music stuff—artists, albums, playlists, and tracks. I've poured my heart into perfecting the user experience, diving into modern tech and APIs.",
    techStack: ["Typescript", "Spotify API", "Axios"],
  },
  {
    img: Homeland,
    title: "HomeLand Real Estate",
    featured: false,
    seeCode: "https://github.com/kieronthomas132/homeland",
    seeLive: "https://homeland-real-estate-mu.vercel.app/",
    description:
      "The real estate website is designed using Reacts useContext and useReducer hooks to manage state and Rapid API to fetch and render properties. It also includes a login function with Firebase for users to access their favorites page where they can view and manage their liked properties.",
    techStack: ["React", "Axios", "RapidAPI", "Firebase"],
  },
  {
    img: Crypto,
    title: "CryptoCurrency Website",
    featured: false,
    seeCode: "https://github.com/kieronthomas132/crypto_currency",
    seeLive: "https://crypto-currency-livid.vercel.app/",
    description:
      "A cryptocurrency converter website that utilizes the RAPID API to fetch and convert various cryptocurrencies. The site also features a newsfeed API to provide up-to-date crypto news.",
    techStack: ["React", "Axios", "RapidAPI"],
  },
  {
    img: E_Commerce,
    title: "Uniform E-Commerce Store",
    featured: false,
    seeCode: "https://github.com/kieronthomas132/uniform_ecommerce",
    seeLive: "https://uniform-ecommerce.vercel.app",
    description:
      "This is a single e-commerce application fetching products from a FakeStore API and uses Context API to allow a user to add multiple products to their cart and check them out",
    techStack: ["React", "Context API", "Fetch"],
  },
  {
    img: Recipe,
    title: "Recipe Website",
    featured: false,
    seeCode: "https://github.com/kieronthomas132/recipe_website",
    seeLive: "https://recipe-website-inky.vercel.app/",
    description:
      "This is a recipe application built with React, using Edamam API to fetch and display recipe information, including images and ingredients. It also features a search function for specific recipes. Enjoy a seamless, user-friendly experience for all your cooking needs.",
    techStack: ["React", "APIs", "State Hooks"],
  },
  {
    img: Budget_Tracker,
    title: "Budget Tracker",
    featured: false,
    seeCode: "https://github.com/kieronthomas132/budget_project_typescript",
    seeLive: "https://budget-project-typescript.vercel.app",
    description:
      "This is a budget tracker application that allows a user to add and delete expenses so users can keep track of their bills and expenses. Project features typescript methods including interfaces, enums etc.",
    techStack: ["React", "Typescript", "Reducer", "Interfaces"],
  },
  {
    img: Word_Association,
    title: "Word Association Game",
    featured: false,
    seeCode: "https://github.com/kieronthomas132/word_association",
    seeLive: "https://word-association.vercel.app/",
    description:
      "A word association game that uses two APIs to render a random word for the user to guess. This game is designed to challenge users' word knowledge and expand their vocabulary.",
    techStack: ["React", "API", "Fetch"],
  },
  {
    img: Weather,
    title: "Weather Website",
    featured: false,
    seeCode: "https://github.com/kieronthomas132/weather_website",
    seeLive: "https://vercel.com/evanthomas132/weather-website",
    description:
      "This weather website is designed to provide real-time weather updates through the use of the Open Weather Map API. The platform boasts a simple and intuitive interface that facilitates easy and quick searches for weather information in any region of interest.",
    techStack: ["React", "API"],
  },
];
