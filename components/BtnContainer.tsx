import { JobType } from "@/types";

interface BtnContainerProps {
    jobs: JobType[];
}

function BtnContainer({ jobs }: BtnContainerProps) {
    console.log(jobs);

    return (
        <div className="btn-container">
            {jobs.length > 0 &&
                jobs.map((job) => {
                    return (
                        <button key={job.id} className="job-btn">
                            {job.company}
                        </button>
                    );
                })}
        </div>
    );
}
export default BtnContainer;
