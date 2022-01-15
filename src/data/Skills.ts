import ISkills from "@/models/skill";

const SkillsData: ISkills[] = [
  {
    Id: 1,
    text: "C#",
    element_Id: "C",
    details: [
      "Rider",
      "WPF / WinForm",
      "Blazor",
      "ASP.NET Core",
      "REST API",
      "Entity Framework",
      "Serilog",
      "MongoDB",
      "Docker",
    ],
  },
  {
    Id: 2,
    text: "Javascript",
    element_Id: "JS",
    details: ["TypeScript", "Node.js", "Electron.js", "jQuery"],
  },
  {
    Id: 3,
    text: "React",
    element_Id: "React",
    details: ["Functional Components", "Hooks", "Next.js", "Framer Motion"],
  },
  {
    Id: 4,
    text: "HTML & CSS",
    element_Id: "HTML",
    details: ["Tailwind", "Bootsrap", "SCSS"],
  },
  {
    Id: 5,
    text: "Can Read",
    element_Id: "Read",
    details: ["Python", "SQL", "GoLang", "C++", "PHP"],
  },
  {
    Id: 6,
    text: "Other Skills",
    element_Id: "Other",
    details: ["(Neo)Vimer", "GitHub", "Terminal (kitty)", "Linux User (Arch)"],
  },
];
export default SkillsData;
