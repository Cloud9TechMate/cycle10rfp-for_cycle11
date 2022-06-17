
export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/judges");
    const judges = await res.json();
    return {
        props: {judges},
    };
};

export const getServerSideProps1 = async() => {
    const res = await fetch("http://localhost:3000/api/judges");
    const court = await res.json();
    // console.log(court);
    return {
        props: {court},
    };
}

export default function Judges({Judges}) {
    console.table(Judges);
    // console.table(court);

    return (

        <div>
        </div>
        // <div>
            
        //     {judges.map((p) =>{
        //         return (
        //             <div key = {p.JUDGE} style ={{display: "flex"}}>
        //                 {/* <h1>{p.JUDGE} {p.ROOM}</h1> */}

        //                 <ul>
        //                     <li>{p.JUDGE}</li>
        //                     <li>{p.DEPUTY_COURT_CLERK}</li>
        //                     <li>{p.DEPARTMENT }</li>
        //                     <li>{p.ROOM}</li>
        //                     <li>{p.PHONE}</li>
        //                 </ul> 

        //             </div>
        //         )
        //     })}
            
		//</div>		
    )
}

// small commentfdferd
//sdfdfs
//dhfeiufehifeiuf

