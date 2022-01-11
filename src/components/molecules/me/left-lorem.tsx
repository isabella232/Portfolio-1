import BigIcon from "@/components/atoms/big-icon";
import H2P from "@/components/atoms/h2p";
import React from "react";

interface Props {
  icon: string;
  h2: string;
  children?: React.ReactNode;
  id?: number;
}
const LeftLorem = ({ icon, h2, children }: Props) => {
  return (
    <>
      <BigIcon icon={icon} />
      <H2P h2={h2} children={children} />
    </>
  );
};

export default LeftLorem;
