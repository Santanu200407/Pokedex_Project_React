import { useState,useEffect } from "react"
import axios from "axios"
export default function usePokemonList(){
    const [pokemonListState,setPokemonListState]=useState({
        POKEDEX_URL:"https://pokeapi.co/api/v2/pokemon",
        nextUrl:"",
        prevUrl:"",
        pokemonList:[],
        isLoading:true
    })
    async function downloadPokemons(){
        //setIsLoading(true)
        setPokemonListState((prev)=>({...prev,isLoading:true}))
        const response=await axios.get(pokemonListState.POKEDEX_URL) //this downloads list of 20 pokemons
        console.log(response.data)
        const pokemonResults=response.data.results // we get the array of pokemon from result 
        //setNextUrl(response.data.next)
        setPokemonListState((prev)=>({...prev,nextUrl:response.data.next}))
        //setPrevUrl(response.data.previous)
        setPokemonListState((prev)=>({...prev,prevUrl:response.data.previous}))
        console.log("hi")
        console.log(pokemonListState)
        //iterating over the array of pokemons,and using their url, to create an array of promises
        //that will downlod those 20 pokemons
        const pokemonResultPromise=pokemonResults.map(async(pokemon)=>axios.get(pokemon.url))
        console.log(pokemonResultPromise)
        //passing that promise array to axios.all
        const pokemonData=await axios.all(pokemonResultPromise) //array of 20 pokemon detailed data
        console.log(pokemonData)
        //now iterate on the data of each pokemon, and extract id, name,image types
        const result=pokemonData.map((pokeData)=>{
            const pokemon=pokeData.data
            return{
                id:pokemon.id,
                name:pokemon.name,
                image:(pokemon.sprites.other)?pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front_shiny,
                types:pokemon.types
            }
        })
        console.log(result)
        //setPokemonList(result)
        setPokemonListState((prev)=>({...prev,pokemonList:result}))
        //setIsLoading(false)
        setPokemonListState((prev)=>({...prev,isLoading:false}))
    }
    useEffect(()=>{
           downloadPokemons();
        },[pokemonListState.POKEDEX_URL])
    return {pokemonListState,setPokemonListState}
}