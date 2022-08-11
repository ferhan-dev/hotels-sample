import Head from "next/head";
import React from "react";
import AppPaper from "src/components/elements/Paper";
import SearchResultsContainer from "src/components/modules/SearchPage/SearchResultsContainer";
import Header from "src/components/modules/Header";
import Footer from "src/components/modules/Footer";
import { useSmallSize } from "src/hooks";

const SearchResults: React.FC = () => {
  const isSmallSize = useSmallSize();
  const [showHeader, setShowHeader] = React.useState(true);

  React.useEffect(() => {
    window.onscroll = () => {
      window.scrollY > 10 && isSmallSize ? setShowHeader(false) : setShowHeader(true);
    };
  }, []);

  // React.useEffect(()=>{},[searchResults])

  return (
    <AppPaper>
      <Head>
        <title>Search Results</title>
      </Head>
      {showHeader && <Header />}
      <SearchResultsContainer />
      <Footer />
    </AppPaper>
  );
};

export default SearchResults;
