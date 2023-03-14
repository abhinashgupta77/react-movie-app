import React from "react";

import "../stylesheets/pages/Home.scss";

import Header from "../components/Header";
import Movies from "../components/Movies";
import Title from "../components/common/Title";

const Home = () => {
  return (
    <div className="Home">
      <Header>
        <Title text="Movies" type="page" />
      </Header>
      <Movies />
    </div>
  );
};

export default Home;
