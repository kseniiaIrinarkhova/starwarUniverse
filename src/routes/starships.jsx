import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Nav from '../components/Nav/Nav'
import { getStarships } from "../services/sw_api"


async function loader() {
    const starShips = await getStarships();
    return { starShips };
}

export default function Starships() {
    const { starShips } = useLoaderData();
    return (
        <>
                <div className="side-nav">

                    {(starShips && starShips.results.length) ? (
                        <ul>
                            {
                                starShips.results.map((ship) => (
                                    <li key={ship.uid}>
                                        <NavLink to={`/starships/${ship.uid}`} className={({ isActive, isPending }) =>
                                            isActive
                                                ? "active"
                                                : isPending
                                                    ? "pending"
                                                    : ""
                                        } >{ship.name}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>

                    ) : (<p> Loading... </p>)}
                </div>
                <div className="main"><Outlet /></div>

        </>
    );
}

Starships.loader = loader;