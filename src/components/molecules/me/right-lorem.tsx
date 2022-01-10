import BigIcon from "@/components/atoms/big-icon";
import H2P from "@/components/atoms/h2p";
import React from "react";

interface Props {
  icon: CallableFunction;
  color?: string;
  h2: string;
  children?: React.ReactNode;
  id?: number;
}

const RightLorem = ({ h2, children, icon, color }: Props) => {
  return (
    <>
      <H2P h2={h2} children={children} />
      <BigIcon icon={icon} color={color} right={true} />
    </>
  );
};

export default RightLorem;
