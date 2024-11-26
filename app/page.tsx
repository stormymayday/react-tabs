"use client";

import { JobType } from "@/types";
import { fetchData } from "@/utils";
import { useState, useEffect } from "react";

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

    console.log(jobs);

    if (isLoading) {
        return (
            <main>
                <h1>Loading</h1>
            </main>
        );
    }

    if (isError) {
        return <main>{errorMessage}</main>;
    }

    return (
        <main>
            <h1>Success!</h1>
        </main>
    );
}
