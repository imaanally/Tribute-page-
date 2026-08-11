import { useState, useEffect } from "react";
import axios from "axios";

import TopNav from "./TopNav";
import InfoSection from "./InfoSection";
import PersonCard from "./PersonCard";

function GithubProject() {
  const [people, setPeople] = useState([]);

  //fetch api. axios
  const getUserData = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: "https://api.github.com/users",
        headers: {
          Authorization: "YOUR_TOKEN_HERE",
          Accept: "application/vnd.github+json",
        },
      });

      setPeople(response.data);
    } catch (e) {
      console.log("Error is ", e);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  //lifecycle. githubProject

  return (
    <div>
      <TopNav setPeople={setPeople} />
      <InfoSection people={people} />

      {people.map((person) => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
}

export default GithubProject;
