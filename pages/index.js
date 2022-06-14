// import "../styles/globals.css"//can't import this
// import "../styles/Home.module.css"
import "../styles/myCss.module.css"//this has to have .module.css
import Card from "../pages/card";


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
            <div>
            return (
    <div className="container">
      <div className="row">
        <Card
          title="Courthouse Offices"
          images="../pages/public/images/courthouse.png"
          alt="courthouse"
          
        />
        <Card
        //"Job Opportunities"
          title={<a href="https://county.milwaukee.gov/EN/Human-Resources">Job Opportunities</a>}
          images="../images/Job-Free-PNG.png"
          alt="Jobs"
          // link = "https://county.milwaukee.gov/EN/Human-Resources"
        />
        <Card
          title={<a href="https://county.milwaukee.gov/EN/News--Events/Events">Events</a>}
          images="../images/EVENTS.png"
          alt="events"

        />
        <Card
          title="County Services"
          images="../images/MilwaukeeCountyLogo.png"
          alt="county"
        
        />
      </div>
    </div>
            )
            </div>
        </div>
    )
}