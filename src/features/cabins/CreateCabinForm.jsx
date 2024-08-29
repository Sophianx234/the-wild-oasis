import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import  { createEditCabin } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow2 from "../../ui/formRow";
import { id } from "date-fns/locale";




function CreateCabinForm({cabin={}}) {
  const {id:editId, ...editValues} = cabin
  const isEditSession = Boolean(editId)
  const {register, handleSubmit, reset, getValues, formState} = useForm({
    defaultValues: isEditSession ? editValues: {}
  })
  const {errors} = formState
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
  const {isLoading: isEditing, mutate: editCabin} = useMutation({
    mutationFn: ({newCabinData, editId})=>createEditCabin(newCabinData, editId),
    onSuccess:()=> {
      toast.success("Cabin successfully edited")
      reset()
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
    },
    onError: err=> toast.error(err.message)
    
  })
  const isWorking = isCreating || isEditing;
  function onSubmit(data){
    console.log(data)
    const image = typeof (data.image) === 'string' ? data.image : data.image[0]
    if(isEditSession){
      console.log(editId)
      editCabin({newCabinData:{...data,image}, editId})

    } 
    else createCabin({...data,image:data.image[0]})

  }
  function onError(error){
    // console.log(error)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      

        <FormRow2 label='Cabin name ' error={errors?.name?.message}>
          <Input
          type="text"
          id="name"
          {...register('name',{required: 'This field is required'})}
          disabled= {isWorking}
          ></Input>
        </FormRow2>
        <FormRow2 label='Regular Price' error={errors?.regularPrice?.message}>
          <Input
          type="text"
          id="regularPrice"
          disabled= {isWorking}
          {...register('regularPrice',{required: 'This field is required',
            
          })}
          ></Input>
        </FormRow2>
        <FormRow2 label='Maximum capacity ' error={errors?.maxCapacity?.message}>
          <Input
          type="text"
          disabled= {isWorking}
          id="maxCapacity"
          {...register('maxCapacity',{required: 'This field is required',
            min: {
              value: 1,
              message: 'Maximum capacity should be at least 1'
            }
          })}
          ></Input>
        </FormRow2>
      

      

      <FormRow2 label='Discount' error={errors?.discount?.message}>
       
        <Input type="number"
        disabled= {isWorking} id="discount" {...register('discount', {required: 'This field is required',
          validate: value=> +value <= +getValues().regularPrice || 'Discount should be less than regular price'
          })} 
          defaultValue={0} />
      </FormRow2>


      <FormRow2 label='Description for a website' error={errors?.description?.message}
      >
        <Textarea type="number" id="description" 
        disabled= {isWorking} defaultValue="" {...register('description', {
          required: 'This field is required',
          })   } />
      </FormRow2>

      <FormRow2 label='Cabin photo'>
        <FileInput id="image" accept="image/*"
        type="file"
        {...register('image',{

          required:isEditSession? false: 'This field is required'
          
        })}/>

      </FormRow2>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>{isEditSession? 'Edit cabin':'Create new cabin'}</Button>
      </FormRow2>
    </Form>
  );
}

export default CreateCabinForm;
