// ex1.1.1
import React from "react";
export default function App(){
const carre=(x)=>x*x;
const somme=(a,b)=>a*b;
const saluer=()=>"bonjour";
const saluer2=()=>{
    let say = "bonjour";
    return say;
}
const creerUser =(nom,age) =>({nom :nom , age: age});
const estPair = (n) => n % 2 === 0;
const appliquer = (fn,valeur) => fn(valeur);
const multiplicateur = (n)=>(x)=> n * x ;
const double = multiplicateur(2);
const calculer = (op,a,b)=>{
    switch(op){
        case "addition":return a+b;
        break;
        case "soustraction": return a-b;
        break;
        case "multiplication": return a*b;
        break;
        case "division": return a/b;
        break;
        default :
             return "operation un valider";
    }
}

 const noms = ["samah","lina" ,"lina","raja","jamal"];
const statut = (note) => note >= 10;

const mention = (note)=>{
    return note < 10 ? "echec"
           :note <= 13 ? "passable"
           :note <= 16 ? "bien"
           :"Tres bien ";
}

const afficherArticle = (quantite) =>{
    return quantite === 1 ? "1 articuler"
           : quantite + " article";
}

const  couleurs = ["rouge" , "vert" ,"bleu","jaune" ];
const [r1,r2,...test]= couleurs;


const user = ({
    id : 1,
    nom : "karim",
    adresse : {ville : "beni mellel" , cp :2300},
    roles :["admin" , "editeur"]
   })
  const {nom,adresse:{ville} , roles:[premierRole]} = user ;
  const {nom : username ,telephone = "non renseigne"}=user;
  const afficher = ({nom,age}) =>nom +"-"+ age;
  const Profil=({nom , age,ville ="fes"})=>{
    return <p>{nom} ,{age} ans , {ville}</p>
 }
 const t1 = [1,2],t2 =[3,4];
 const fusion = [0,...t1,...t2,5];
 const original = {nom : "ali" , age: 22};
 const copie = {...original , age :23};
  const tab =[9,8,6,3,2,1,6];
 const sommet = (...nombers)=>nombers.reduce((acc,n)=> acc+n, 0);
const produits = [ { id: 1, nom: "Clavier", prix: 250, categorie: "informatique", stock: 5 },
     { id: 2, nom: "Souris", prix: 120, categorie: "informatique", stock: 0 },
      { id: 3, nom: "Cahier", prix: 15, categorie: "papeterie", stock: 40 },
       { id: 4, nom: "Stylo", prix: 5, categorie: "papeterie", stock: 100 }, 
       { id: 5, nom: "Écran", prix: 1200, categorie: "informatique", stock: 2 }   
]


return(<>
<span>{carre(3)}</span><br></br>
<span>{somme(4,6)}</span><br></br>
<span>{saluer()}</span><br></br>
<span>{saluer2()}</span><br></br>
<span>{JSON.stringify(creerUser("hiba",22))}</span><br></br>
<span>{estPair(3)?"pair":"impair"}</span><br></br>
<span>{appliquer(carre,3)}</span><br></br>
<span>{double(4)}</span><br></br>
<span>{calculer("division" ,6,6)}</span><br></br>
<ul>{
    noms.map((n,index)=>(
       <li key={index}>{n}</li>
    ))
}
</ul>
<span>{statut (19)?"admin" : "no admin"}</span><br></br>
<span>{mention(12)}</span><br></br>
<span>{afficherArticle(2)}</span><br></br>
<span>{r2}</span><br></br>
<span>{nom}-{ville} - {premierRole}</span><br></br>
<span>{nom}-{ville} - {premierRole}</span><br></br>
<span>{afficher({nom:"karim",age:19})}</span><br></br>
<Profil nom="raja" age={25}/>
<Profil nom="arij" age={63}/>
<span>{fusion}</span><br></br>

<span>{original.age}-{copie.age}</span><br></br>
<span>{sommet(...tab)}</span><br></br>
<span>{r2}</span><br></br>
<ul>
    {produits.map((p,index)=>(
        <li key={index}>{p.nom} - {p.categorie}</li>
    ))}
</ul> 

<p>
    {produits.filter(p=>p.stock > 0).map(p=> p.nom).join(",")}
</p>
<p>
    {produits.filter(p =>p.categorie ==="informatique" && p.prix <500).map(p =>p.nom).join(",")}
</p>
<p>
    {produits.filter(p=>p.id !== 3).map(p => p.nom).join(",")
    }
</p>
<p>
    {produits.find(p => p.id ===4)?.nom}
</p>
<p>
    {produits.find(p => p.id === 10)?.nom??
    "produit introuvable"}
</p>
<p>
    {produits.reduce((max,p)=> p.prix > max.prix? p:max).nom}
</p>
<p>
    {JSON.stringify(produits.reduce((acc,p) => {
        if(!acc[p.categorie]){
            acc[p.categorie] = [] ;
        }
        acc[p.categorie].push(p.nom);
        return acc;
    },{}))}
</p>

<p>
    {JSON.stringify(produits.reduce((acc,p)=>{
        acc[p.categorie] = (acc[p.categorie]|| 0)+1;
        return acc;
    },{}))}
</p>
















</>)
}