import { Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav/Nav'
import {getStarships} from "../services/sw_api"


export async function loader(){
    console.log("loader")
    const starShips = await getStarships();
    console.log(starShips)
    return { starShips };
}

export default function Root() {
    console.log("Root")
    const { starShips } = useLoaderData();
    console.log(starShips)
    return (
        <>
            <Nav/>
            <div className="page">
                <div className="side-nav">
                    <h1>{starShips}</h1> 
                </div>
                <div className="main"><Outlet /></div>
                
            </div>
        </>
    );
}