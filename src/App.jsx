import { useEffect, useState } from "react";
import fetchData from "./utils/fetchData.js";
import Loading from "./components/Loading.jsx";
import JobInfo from "./components/JobInfo.jsx";

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
        <Loading />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="jobs-center">
        <div>Oops, something went wrong</div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <JobInfo jobs={jobs} />
    </section>
  );

};
export default App;
