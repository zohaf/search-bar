import type { FC } from "react";
import { SelectBar } from "../SelectBar";

type CardPropps = {
  title: string;
  subTitle: string;
  projectState: string;
  key: number;
};

export const Card: FC<CardPropps> = ({ title, subTitle, projectState }) => (
  <div className="flex flex-col gap-1 border-2 bg-emerald-50 border-emerald-400 p-2 rounded-md">
    <div className="mb-3">
      <h2 className="font-medium">{title}</h2>
      <p className="font-light text-sm">{subTitle}</p>
    </div>
    <SelectBar projectState={projectState} projectTitle={title} />
  </div>
);
