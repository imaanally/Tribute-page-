import { useState, useEffect } from "react";
import axios from "axios";

function GithubProject() {
  const [people, setPeople] = useState([]);

  //fetch api. axios
  const getUserData = async () => {
    try {
      let response = await axios({
        method: "GET",
        url: "https://api.github.com/users",
      });

      setPeople(response.data);
    } catch (e) {
      console.log("Error is ", e);
    }
  };

  console.log(people); // [] -> [{},{}]

  useEffect(() => {
    getUserData();
  }, []);

  //lifecycle. githubProject

  return (
    <div>
      <h1>Github project</h1>
    </div>
  );
}

export default GithubProject;
