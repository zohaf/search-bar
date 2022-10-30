import { FC, ReactNode, useContext } from "react";
import clsx from "clsx";
import { DataContext } from "../../pages/_app";

type SelectBarProps = {
  projectState: string;
  projectTitle: string;
};

type ButtonProps = {
  projectState: string;
  name: string;
  children: ReactNode;
  onClick: () => void;
};

const Button: FC<ButtonProps> = ({ name, projectState, onClick, children }) => (
  <button
    onClick={onClick}
    className={clsx("w-full rounded-md px-3 py-1", {
      "bg-emerald-400 text-white": projectState === name,
    })}
  >
    {children}
  </button>
);

export const SelectBar: FC<SelectBarProps> = ({
  projectState,
  projectTitle,
}) => {
  const [projectData, setProjectData] = useContext(DataContext);

  const handleStatusChange = (projectState: string) => {
    const newProjectData = projectData.map((project) =>
      project.name === projectTitle ? { ...project, projectState } : project
    );
    setProjectData(newProjectData);
  };

  return (
    <div className="flex bg-gray-100 rounded-md">
      <Button
        name="Created"
        projectState={projectState}
        onClick={() => handleStatusChange("Created")}
      >
        Created
      </Button>
      <Button
        name="Approved"
        projectState={projectState}
        onClick={() => handleStatusChange("Approved")}
      >
        Approved
      </Button>
      <Button
        name="Published"
        projectState={projectState}
        onClick={() => handleStatusChange("Published")}
      >
        Published
      </Button>
    </div>
  );
};
