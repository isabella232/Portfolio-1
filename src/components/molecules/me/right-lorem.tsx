import BigIcon from "@/components/atoms/big-icon";
import H2P from "@/components/atoms/h2p";
import React from "react";

interface Props {
  icon: string;
  h2: string;
  children?: React.ReactNode;
  id?: number;
}

const RightLorem = ({ h2, children, icon }: Props) => {
  return (
    <>
      <H2P h2={h2} children={children} />
      <BigIcon icon={icon} isRight={true} />
    </>
  );
};

export default RightLorem;
