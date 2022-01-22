interface link {
  h: string;
  i: CallableFunction;
}

interface IProject {
  key: number;
  title: string;
  description: string;
  features: string[];
  sources?: string[];
  link: link;
  component?: React.ReactNode | string;
}
export default IProject;
