import { useState } from "react";
import listing from "./listing";
import Filter from "./Filter";
export default function Devises(){
    const devises=[
        {code:"abf",nom:"dollar canadien",taux:1.4},
        {code:"gdhs",nom:"yen jaboni",taux:155},
        {code:"tyo",nom:"maroc",taux:44},
        {code:"abf",nom:"dollar canadien",taux:1.4}

    ];
    let[search,setSearch] = useState("");
    function filterD(mot){
        setSearch(mot);
    }
    let devisesFilted = devises.filter(
        (devise)=> devise.name.toUpperCase().includes(search.toUpperCase())
    )
    return(<>
    <Filter filterD={filterD}/>
    <listing devises={devisesFilted}/>
    </>)
}