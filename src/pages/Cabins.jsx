import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useCabins } from "../features/cabins/useCabins";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import { useSearchParams } from "react-router-dom";

function Cabins() {
  const {isLoading, cabins} = useCabins()
  console.log(cabins)
  const  [searchParams] = useSearchParams()
  

  if(isLoading) return <Spinner/>
  const filterValue = searchParams.get('discount') || 'all'
  let filteredCabins;
  if(filterValue === 'all') filteredCabins = cabins
  if(filterValue === 'no-discount') filteredCabins = filteredCabins = cabins.filter(cabin=> cabin.discount === 0)
  if(filterValue === 'with-discount') filteredCabins = filteredCabins = cabins.filter(cabin=> cabin.discount > 0)

    
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
    <CabinTableOperations/>      
    </Row>
    <Row>
    <CabinTable cabins={filteredCabins}/>
    <AddCabin cabins ={cabins}/>
    </Row>
    </>
  );
}

export default Cabins;
