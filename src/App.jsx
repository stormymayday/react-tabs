import { useEffect, useState } from "react";
import fetchData from "./utils/fetchData.js";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {

    fetchData(url, setIsLoading, setIsError, setJobs);

  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  if (isError) {
    return (
      <div>Error</div>
    );
  }

  return <h2>Tabs Starter</h2>;
};
export default App;
