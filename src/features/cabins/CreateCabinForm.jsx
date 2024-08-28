import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import getCabins, { createCabin } from "../../services/apiCabins";
import toast, { ToastBar } from "react-hot-toast";
import FormRow2 from "../../ui/formRow";

const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {
  const {register, handleSubmit, reset, getValues, formState} = useForm()
  const {errors} = formState
  const queryClient = useQueryClient()
  const {isLoading, mutate} = useMutation({
    mutationFn: createCabin,
    onSuccess:()=> {
      toast.success("New cabin successfully created")
      reset()
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      })
    },
    onError: err=> toast.error(err.message)
    
  })
  function onSubmit(data){
    console.log(data)

    mutate({...data,image:data.image[0]})

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
          disabled= {isLoading}
          ></Input>
        </FormRow2>
        <FormRow2 label='Regular Price' error={errors?.regularPrice?.message}>
          <Input
          type="text"
          id="regularPrice"
          disabled= {isLoading}
          {...register('regularPrice',{required: 'This field is required',
            
          })}
          ></Input>
        </FormRow2>
        <FormRow2 label='Maximum capacity ' error={errors?.maxCapacity?.message}>
          <Input
          type="text"
          disabled= {isLoading}
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
        disabled= {isLoading} id="discount" {...register('discount', {required: 'This field is required',
          validate: value=> +value <= +getValues().regularPrice || 'Discount should be less than regular price'
          })} 
          defaultValue={0} />
      </FormRow2>


      <FormRow2 label='Description for a website' error={errors?.description?.message}
      >
        <Textarea type="number" id="description" 
        disabled= {isLoading} defaultValue="" {...register('description', {
          required: 'This field is required',
          })   } />
      </FormRow2>

      <FormRow2 label='Cabin photo'>
        <FileInput id="image" accept="image/*"
        type="file"
        {...register('image',{

          required: 'This field is required'
          
        })}/>

      </FormRow2>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isLoading}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
