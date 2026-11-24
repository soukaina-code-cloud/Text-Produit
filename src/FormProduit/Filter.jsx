export default function Filter({filterd}){
    return(<>
    <label>Rechercher</label>
    <input type="search" onChange={(e)=>filterd(e.target.value)}/>
    </>)
}