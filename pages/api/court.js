
// const Test = () => {
//     console.log("this is a test");
//     return(
//         <div>
//             <h1>Hello</h1>
//         </div>
//     )
// }

// export default Test;


//define an api route that our front-end will consume
// import "../../styles/globals.css"
import prisma1 from "../../lib/prisma1";

export default async function handle(req, res) {
    const court = await prisma1.court.findMany();
    console.log("court:", court);
    res.json(court);
}

const whatTheFuck = () => {
    return(
        console.log("What the fuck")
        );
}