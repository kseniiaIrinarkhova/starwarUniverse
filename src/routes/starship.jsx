import { useLoaderData } from "react-router-dom"
import { getShip } from '../services/sw_api'

import StarshipCard from "../components/StarshipCard/StarshipCard";

async function loader({ params }) {
    const starship = await getShip(params.shipId);
    return { starship };
}

export default function Starship() {
    const { starship } = useLoaderData();
    return (

        <>
            {
                (starship && starship.result) ? <StarshipCard shipData={starship.result.properties} /> : (<p>Data is not available</p>)
            }
        </>
    )
}

Starship.loader = loader;