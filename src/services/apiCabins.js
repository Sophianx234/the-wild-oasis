import { useEffect } from "react"
import supabase from "./supabase"

async function getCabins(){
    
    
const { data, error } = await supabase
.from('cabins')
.select('*')

if(error){
    console.error(error)
    throw new Error('Cabins could not be loaded')

}
return data
}

export async function createCabin(newCabin){
    
const { data, error } = await supabase
.from('cabins')
.insert([
   newCabin
])
.select()
if(error){
    console.error(error)
    throw new Error('could not delete row from Cabins');

}
return data

}

export async function DeleteCabin(id){
    
const { data, error } = await supabase
.from('cabins')
.delete()
.eq('id', id)

if(error){
    console.error(error)
    throw new Error('could not delete row from Cabins');

}
return data


}

export default getCabins