import Card from "./card";
import Link from "next/link";



export default function Court({court}) {
    // console.table(judges);
    console.table(court);

    return (

        <div className="container">
			<div className="row">
			<Card
				title = {<Link href = "http://localhost:3000/judgesPage">Courthouse</Link>}
				// title={<a href = "http://localhost:3000/api/judges">Courthouse Offices</a>}
				images="images/courthouse.png"
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
}

// small commentfdferd
//sdfdfs
//dhfeiufehifeiuf

