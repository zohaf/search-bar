import { useContext, useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { SearchIcon } from "../SearchIcon/SearchIcon";
import { DataContext, SearchContext } from "../../pages/_app";
import clsx from "clsx";
import { filteredData } from "../../utils/data";

export const SearchBar = () => {
  const [globalValue, setGlobalValue] = useContext(SearchContext);
  const [projectData] = useContext(DataContext);
  const [searchValue, setSearchValue] = useState(globalValue || "");
  const [hasResult, setHasResult] = useState(false);

  const resultRouter = useRouter();
  const inputElement = useRef<HTMLInputElement | null>(null);

  const handleSearch = (value: string) => {
    if (searchValue.length >= 3) {
      setGlobalValue(value);
      resultRouter.push("/result");
    }
  };

  useEffect(() => {
    inputElement.current?.focus();
  }, []);

  useEffect(() => {
    if (searchValue.length >= 3) {
      const results = filteredData(projectData, searchValue);
      setHasResult(results.length > 0);
    }
  }, [searchValue, projectData]);

  return (
    <>
      <div className="relative w-full">
        <input
          ref={inputElement}
          className="border-4 w-full border-gray-200 bg-gray-300 text-gray-500 font-medium h-12 px-5 pr-16 rounded-md text-sm focus:outline-none appearance-none"
          type="search"
          aria-label="search box"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
        />

        <SearchIcon
          onClick={() => handleSearch(searchValue)}
          color="#10b981"
          className={clsx("absolute right-3 top-3", {
            "stroke-gray-200 cursor-not-allowed": searchValue.length < 3,
          })}
        />
      </div>
      {!hasResult && searchValue.length >= 3 && (
        <h1 className="mt-4 text-red-700 font-medium text-sm">
          Ooops! Not found, enter a different name!
        </h1>
      )}
    </>
  );
};
