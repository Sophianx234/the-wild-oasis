import { useEffect } from "react"
import supabase, { supabaseUrl } from "./supabase"

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

export async function createEditCabin(newCabin, id ){
    console.log(newCabin)
    const hasImagePath = newCabin?.image?.startsWith(supabaseUrl)
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/','')
    const imagePath = hasImagePath?newCabin?.image:`${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

    // `https://cwpgmkocgvfhkpwjntrl.supabase.cocabin-001.jpg`
 let query =  supabase.from('cabins')
if(!id)
query =query.insert([
   {...newCabin, image: imagePath}
])

if(id)
   query = query.update({ ...newCabin, image: imagePath})
.eq('id',id)



const {data, error} = await query.select()
if(error){
    console.error(error)
    throw new Error('could not delete row from Cabins');

}
const { error: storageError } = await supabase
  .storage
  .from('cabin-images')
  .upload(imageName,newCabin.image)
  if(storageError){

      await supabase
      .from('cabins')
      .delete()
      .eq('id', data.id)
      console.log(storageError)
      throw new Error('Cabin image could not be uploaded and the cabin was not created ')
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