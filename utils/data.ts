import { Data } from "../pages/_app";

export const filteredData = (data: Data, value: string): Data | [] => {
  return data?.filter((project) =>
    project.name.toLowerCase().includes(value.toLowerCase())
  );
};
