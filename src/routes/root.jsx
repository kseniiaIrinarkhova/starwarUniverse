import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav/Nav'
// import {getStarships} from "../services/sw_api"


// async function loader(){
//     const starShips = await getStarships();
//     return { starShips };
// }

export default function Root() {
    // const { starShips } = useLoaderData();
    return (
        <>
            <Nav/>
            <div className="page">
                {/* <div className="side-nav">

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
                </div> */}
                <div className="main"><Outlet /></div>
                
            </div>
        </>
    );
}

// Root.loader = loader;