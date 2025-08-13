import "./Pokemon.css"
import { Link } from "react-router-dom"
export default function Pokemon({name,image,id}){
    return(

        <div className="pokemon">
        <Link to={`/pokemon/${id}`}>
        <div>{name}</div>
        <div>{image==null? "No image found":<img className="pokemon-image" src={image}/>}</div>
        </Link>
        </div>
    )
}