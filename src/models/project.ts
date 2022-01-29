interface IProject {
  Id: number;
  title: string;
  description: string;
  features: string[];
  sources?: string[];
  link: string;
  component?: string;
}
export default IProject;
