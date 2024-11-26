interface DutiesProps {
    duties: string[];
}

function Duties({ duties }: DutiesProps) {
    console.log(duties);

    return <div>Duties</div>;
}
export default Duties;
