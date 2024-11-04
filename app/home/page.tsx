import { getServerSession } from "next-auth"
import Home from "@/components/Home";

const home = async () => {
        const session = await getServerSession();
        console.log(session)
    return(
        <div><Home session={session} /></div>
    )
}

export default home