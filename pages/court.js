import prisma from "../../lib/prisma";

export default async function handle(req, res) {
    const courts = await prisma.courts.findMany();
    console.log("courts:", courts);
    res.json(courts);
}