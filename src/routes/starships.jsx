import { useLoaderData } from "react-router-dom"
import {getShip} from '../services/sw_api'

import StarshipCard from "../components/StarshipCard/StarshipCard";

 async function loader({params}){
    const starship = await getShip(params.shipId);
    return {starship};
}

export default function Starships() {
    const {starship} = useLoaderData();
    console.log(starship)
    return (
        
        <div>
            {
                (starship && starship.result) ? <StarshipCard shipData={starship.result.properties} /> : (<p>Data is not available</p>)
            }
        </div>
    )
}

Starships.loader = loader;