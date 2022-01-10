import Clock from "@/components/projects/clock/clock";
import Kana from "@/components/projects/kana/kana";
import IProject from "@/models/project";
import { GoMarkGithub } from "react-icons/go";
const ProjectsData: IProject[] = [
  {
    key: 1,
    title: "OpenClassrooms - Back-End Developer: .NET",
    subtitle: "The repo of projects that made my degree for OpenClassrooms.",
    description:
      "Here you can see some screenshots of the projects I had to make for OpenClassrooms.. And if you want to know more down below you cand find the repo with all the projects.",
    features: [
      ".Net [2.1-5.0] ✅",
      "EntityFramework / Identity ✅",
      "Swagger ✅",
      "MediatR ✅",
      "AutoMapper / Mapster ✅",
      "FluentValidation ✅",
      "Serilog ✅",
      "MudBlazor / Blazored ✅",
      "xUnit ✅",
      "FluentAssertions / Bogus / NSubstitute ✅",
      "Docker ✅",
    ],
    link: {
      h: "https://github.com/H97-Git/Openclassrooms-Back-End-Developer.NET",
      i: GoMarkGithub,
    },
    component: "Carousel",
  },
  {
    key: 2,
    title: "Kana Trainer",
    subtitle: "Train your kanas while watching animes.",
    description:
      "So you are watching an anime and you think you could do something more while watching this anime.. Why not review your kanas while watching your favorite anime ?. It's the main objective of this repo.",
    features: [
      "Hiragana & Katakana ✅",
      "Hiragana OR Katakana ✅ *",
      "Transparency ✅ *",
      "Keyboard Input ✅ *",
      "Context Menu ✅ *",
      "❌ *Not in the web version ! ❌",
    ],
    sources: [
      "https://freefrontend.com/css-text-effects/",
      "https://codepen.io/havardob/pen/WNQwvze",
    ],
    link: {
      h: "https://github.com/H97-Git/Kana-Trainer",
      i: GoMarkGithub,
    },
    component: Kana(),
  },
  {
    key: 3,
    title: "Clock.exe",
    subtitle: "The clock I use on Windows.",
    description:
      "Think it like a big clock widget for your desktop.. Ideally on a second screen.. Mainly for Windows but should work on other platforms.",
    features: [
      "AM/PM ✅",
      "Starts at startup ✅",
      "Switch Theme ❌ ( I like Dark ! )",
    ],
    sources: [
      "https://freefrontend.com/css-clocks/",
      "https://codepen.io/bsmith/pen/drElg",
    ],
    link: {
      h: "https://github.com/H97-Git/Clock",
      i: GoMarkGithub,
    },
    component: Clock(),
  },
  {
    key: 4,
    title: "Nerd Galaxyline for onedark",
    subtitle: "My first fork on github.",
    description:
      "A fork of @Avimitin/nerd-galaxyline to make it work with @joshdick/onedark.vim.. Since uncompatible with my main theme for Neovim.. I made my own fork to match the color scheme and on the way make other changes.",
    features: [
      "Removed : Support `coc.nvim` ❌ and FileFormat ❌",
      "Replaced by : The name of the current LSP. ✅",
      "Removed `check_git_workspace` ❌ Replaced by `get_git_dir` ✅",
    ],
    sources: ["https://github.com/Avimitin/nerd-galaxyline"],
    link: {
      h: "https://github.com/H97-Git/nerd-galaxyline-onedark",
      i: GoMarkGithub,
    },
  },
];
export default ProjectsData;
