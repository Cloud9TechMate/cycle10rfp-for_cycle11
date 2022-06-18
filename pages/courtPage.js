
export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/courtApi");
    const court = await res.json();
    // console.log(court);
        
    return {
        props: {court},
    };
}

export default function Court ({court}) {
    return(
        <div>
            {court.map((p) => {
                return(
                    <div key = {p.COURT}>
                        <p>{p.COURT}</p>
                    </div>
                );
            })}
        </div>
    )
}