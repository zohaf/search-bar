import React, { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import projectData from "../data.json";

import "../styles/globals.css";

export type Data = typeof projectData;

export const SearchContext = React.createContext<
  [string, Dispatch<SetStateAction<string>>]
>(["", () => {}]);

export const DataContext = React.createContext<
  [Data, Dispatch<SetStateAction<Data>>]
>([projectData, () => {}]);

function MyApp({ Component, pageProps }: AppProps) {
  const [searchValue, setSearchValue] = useState("");
  const [projectDataState, setProjectDataState] = useState(projectData);

  return (
    <DataContext.Provider value={[projectDataState, setProjectDataState]}>
      <SearchContext.Provider value={[searchValue, setSearchValue]}>
        <Head>
          <title>Search Bar</title>
          <meta name="description" content="Frontend scoped search bar" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </SearchContext.Provider>
    </DataContext.Provider>
  );
}

export default MyApp;
