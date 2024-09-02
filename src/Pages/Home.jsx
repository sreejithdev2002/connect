import React, { useState } from "react";
import Header from "../Components/Header";
import Welcome from "../Components/Welcome";
import SearchJobs from "../Components/SearchJobs";
import ShowJobs from "../Components/ShowJobs";

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <>
      <Header />
      {!isLoggedIn ? (
        <Welcome />
      ) : (
        <div>
          <SearchJobs />
          <ShowJobs />
        </div>
      )}
    </>
  );
}

export default Home;
