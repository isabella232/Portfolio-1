import BigIcon from "@/components/atoms/me/big-icon";
import H2P from "@/components/atoms/me/h2p";
import { nanoid } from "nanoid";
import React, { useEffect } from "react";
import tippy from "tippy.js";

type Props = {
  Id: number;
  icon: string;
  h2: string;
  p: string[] | string;
};

const Lorem = ({ Id, h2, p, icon }: Props) => {
  let isEven = Id % 2 === 0;
  let children: React.ReactNode;
  if (typeof p === "string") {
    children = (
      <p className="leading-relaxed text-gray-600 dark:text-gray-400">{p}</p>
    );
  } else {
    children = p.map((p, index) => {
      return (
        <p
          id={"lorem-" + Id + "-" + index}
          key={nanoid()}
          className="leading-relaxed text-gray-600 dark:text-gray-400"
        >
          {p}
        </p>
      );
    });
  }
  useEffect(() => {
    if (Id === 1) {
      tippy("#lorem-1-1", {
        content: "South Park S20.E01",
        placement: "left",
      });
    }
  }, []);
  return (
    <>
      {isEven && (
        <>
          <H2P h2={h2} children={children} />
          <BigIcon icon={icon} isRight={isEven} />
        </>
      )}
      {!isEven && (
        <>
          <BigIcon icon={icon} isRight={isEven} />
          <H2P h2={h2} children={children} />
        </>
      )}
    </>
  );
};

export default Lorem;
