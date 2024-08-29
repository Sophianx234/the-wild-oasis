import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { createEditCabin } from "../../services/apiCabins"
import {  useForm } from "react-hook-form"
const {reset} = useForm()
export function useCreateCabin(){

    const queryClient = useQueryClient()
  const {isLoading:isCreating, mutate: createCabin} = useMutation({
    mutationFn: createEditCabin,
    onSuccess:()=> {
      toast.success("New cabin successfully created")
      reset()
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
    },
    onError: err=> toast.error(err.message)
    
  })
  return {isCreating, createCabin}
}