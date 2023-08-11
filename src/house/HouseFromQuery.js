import { useContext } from "react";
import House from "./";
import { useParams } from "react-router-dom";
import housesContext from "../context/housesContext";
const HouseFromQuery = () => {
    const allHouses=useContext(housesContext)
    const { id } =useParams();
    const house = allHouses.find((e) =>e.id===parseInt(id))
    if(!house) return <div>house not found</div>;
    return <House house={house} />
    
}
 
export default HouseFromQuery;