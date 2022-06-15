
export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:3000/api/judges");
    const judges = await res.json();
    return {
        props: {judges},
    };
};

export default function Judges({judges}) {
    return (
        <div>
            {judges.map((p) =>{
                return (
                    <div key = {p.JUDGE} style ={{display: "flex"}}>
                        <p className = "para">{p.JUDGE}</p>
                        <p style = {{color: "blue"}}>{p.DEPUTY_COURT_CLERK}</p>
                        <p>{p.ROOM}</p>
                        <p>{p.PHONE}</p>
                        <p>{p.DEPARTMENT}</p>
                    </div>
                )
            })}
		</div>		
    )
}

// small commentfdferd


