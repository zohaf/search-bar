import type { FC } from "react";
import { ReactNode } from "react";

type ContainerPropps = {
  children: ReactNode;
};

export const Container: FC<ContainerPropps> = ({ children }) => (
  <div className="flex flex-col max-w-[500px] items-center px-4 mx-auto my-28  ">
    {children}
  </div>
);
