
export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/judges");
    const judges = await res.json();
    return {
        props: {judges},
    };
};

export default function Judges({judges}) {
    // console.table({judges});
    return (
        <div>
            
            {judges.map((p) =>{
                return (
                    <div key = {p.JUDGE} style ={{display: "flex"}}>
                        <h1>{p.JUDGE} {p.ROOM}</h1>

                        {/* <ul>
                            <li>{p.JUDGE}</li>
                            <li>{p.DEPUTY_COURT_CLERK}</li>
                            <li>{p.ROOM}</li>
                        </ul> */}


                        {/* <tr>
                            <td>{p.JUDGE}</td>
                            <td>{p.DEPUTRY_COURT_CLERK}</td>
                            <td>{p.ROOM}</td>
                            <td>{p.PHONE}</td>
                            <td>{p.DEPARTMENT}</td>
                        </tr> */}
                        {/* <p className = "para">{p.JUDGE}</p>
                        <p style = {{color: "blue"}}>{p.DEPUTY_COURT_CLERK}</p>
                        <p>{p.ROOM}</p>
                        <p>{p.PHONE}</p>
                        <p>{p.DEPARTMENT}</p> */}
                    </div>
                )
            })}
		</div>		
    )
}

// small commentfdferd
//sdfdfs
//dhfeiufehifeiuf

