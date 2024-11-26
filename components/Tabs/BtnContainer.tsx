import { JobType } from "@/types";
import { Dispatch, SetStateAction } from "react";

interface BtnContainerProps {
    jobs: JobType[];
    currentItem: number;
    setCurrentItem: Dispatch<SetStateAction<number>>;
}

function BtnContainer({
    jobs,
    currentItem,
    setCurrentItem,
}: BtnContainerProps) {
    return (
        <div className="btn-container">
            {jobs.length > 0 &&
                jobs.map((job, index) => {
                    return (
                        <button
                            onClick={() => {
                                setCurrentItem(index);
                            }}
                            key={job.id}
                            className={
                                index === currentItem
                                    ? "job-btn active-btn"
                                    : "job-btn"
                            }
                        >
                            {job.company}
                        </button>
                    );
                })}
        </div>
    );
}
export default BtnContainer;
