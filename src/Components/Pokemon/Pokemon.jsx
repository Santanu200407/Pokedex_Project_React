import "./Pokemon.css"
export default function Pokemon({name,image}){
    return(
        <div className="pokemon">
        <div>{name}</div>
        <div>{image==null? "No image found":<img className="pokemon-image" src={image}/>}</div>
        </div>
    )
}