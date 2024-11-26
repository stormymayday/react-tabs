import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";

interface DutiesProps {
    duties: string[];
}

function Duties({ duties }: DutiesProps) {
    return (
        <div>
            {duties.length > 0 &&
                duties.map((duty) => {
                    const id = uuidv4();
                    return (
                        <div key={id} className="job-desc">
                            <FaAngleDoubleRight className="job-icon" />
                            <p>{duty}</p>
                        </div>
                    );
                })}
        </div>
    );
}
export default Duties;
