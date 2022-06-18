export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/judgesApi");
    const judges = await res.json();
    return {
        props: {judges},
    };
};

export default function Judges({judges}) {
    console.log(judges)
    return(
        <div>
            
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>COURT</th>
                            <th>BUILDING</th>
                            <th>ROOM</th>
                        </tr>
                    </thead>
                </table>
            
            {judges.map((p) =>{
                return (
                    <div key = {p.JUDGE} style ={{display: "flex"}}>
                        <p>{console.table(judges)}</p>
                        {/* <ul>
                            <li>{p.JUDGE}</li>
                            <li>{p.DEPUTY_COURT_CLERK}</li>
                            <li>{p.DEPARTMENT }</li>
                            <li>{p.ROOM}</li>
                            <li>{p.PHONE}</li>
                        </ul>  */}

                    </div>
                )
            })}
            </div>
            
		</div>
    )
}; 