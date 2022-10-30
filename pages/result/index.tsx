import { useRouter } from "next/router";
import { useContext } from "react";
import { BackIcon } from "../../components/BackIcon/BackIcon";
import { Card } from "../../components/Card";
import { Container } from "../../components/Container";
import { filteredData } from "../../utils/data";
import { DataContext, SearchContext } from "../_app";

const Result = () => {
  const [globalValue] = useContext(SearchContext);
  const [projectData] = useContext(DataContext);
  const searchRouter = useRouter();

  const handleReturn = () => {
    searchRouter.push(
      {
        pathname: "/",
        query: globalValue,
      },
      "/"
    );
  };

  return (
    <Container>
      <div className="w-full flex flex-col gap-6">
        <BackIcon color="#10b981" onClick={handleReturn} />
        {filteredData(projectData, globalValue).map((project, index) => (
          <Card
            key={index}
            title={project.name}
            subTitle={project.description}
            projectState={project.projectState}
          />
        ))}
      </div>
    </Container>
  );
};

export default Result;
