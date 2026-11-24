import Devises from "./Devises";
export default function Filter({FilterD}){
return(<>
    <label> Rechercher:</label>
    <input type="search" onChange={(e)=>FilterD(e.target.value)}/>
    
    </>); 
}