import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav/Nav'
import StarshipCard from '../components/StarshipCard/StarshipCard'
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

                    { (starShips && starShips.results.length) ? (
                        <ul>
                          {
                                starShips.results.map((ship) => (
                                <li key={ship.uid}>
                                        <Link to={`starships/${ship.uid}`}>{ship.name}</Link>
                                    </li>
                                ))
                          }  
                        </ul>
                        
                    ) : ( <p> Loading... </p> )}
                </div>
                <div className="main"><Outlet /></div>
                
            </div>
        </>
    );
}