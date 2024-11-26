import { JobType } from "@/types";
import Duties from "./Duties";

interface JobInfoProps {
    jobs: JobType[];
    currentItem: number;
}

function JobInfo({ jobs, currentItem }: JobInfoProps) {
    const { title, company, dates, duties } = jobs[currentItem];

    return (
        <article className="job-info">
            <h3>{title}</h3>
            <span className="job-company">{company}</span>
            <p className="job-date">{dates}</p>
            <Duties duties={duties} />
        </article>
    );
}
export default JobInfo;
