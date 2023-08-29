import { useEffect, useState } from "react";
import fetchData from "./utils/fetchData.js";
import Loading from "./components/Loading.jsx";
import BtnContainer from "./components/BtnContainer.jsx";
import JobInfo from "./components/JobInfo.jsx";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [currentItem, setCurrentItem] = useState(0);

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
      <BtnContainer jobs={jobs} />
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );

};
export default App;
