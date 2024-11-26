"use client";

import { JobType } from "@/types";
import { fetchData } from "@/utils";
import { useState, useEffect } from "react";
import JobInfo from "@/components/JobInfo";

export default function Home() {
    const [jobs, setJobs] = useState<JobType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getData = async () => {
        setIsLoading(true);

        const { data, isError, errorMessage } = await fetchData(
            process.env.NEXT_PUBLIC_API_URL || ""
        );

        setJobs(data);
        setIsError(isError);
        setErrorMessage(errorMessage);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
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
            <section className="jobs-center">
                <h1>{errorMessage}</h1>
            </section>
        );
    }

    return (
        <>
            {jobs.length > 0 && (
                <section className="jobs-center">
                    <JobInfo jobs={jobs} />
                </section>
            )}
        </>
    );
}
