import React from "react";
import AppPaper from "src/components/elements/Paper";
import Footer from "src/components/modules/Footer";
import Header from "src/components/modules/Header";
import HomeBody from "src/components/modules/home";
import HeadContent from "src/hoc/headContent";

const Home = () => {

  const meta = {
    title: `Chalet Retreat`,
    description: `Charlet Retreat. Book one of the world's best chalets. Discover and book chalets everywhere around you. Check-In Check-Out.`,
    keywords: ``,
    route: '/',
  };

  return (
    <AppPaper>
      <HeadContent title={meta.title} description={meta.description} keywords={meta.keywords} route={meta.route} />
      <Header />
      <HomeBody />
      <Footer />
    </AppPaper>
  );
};

export default Home;
