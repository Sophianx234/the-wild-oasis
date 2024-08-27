import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import getCabins from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const {
    isLoading,
    data: cabins,
    error

  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })
  const [showForm, setShowForm] = useState(false)

  if(isLoading) return <Spinner/>
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filter/Sort</p>
      
    </Row>
    <Row>
    <CabinTable cabins={cabins}/>
    {showForm && <CreateCabinForm/>}
    <Button onClick={()=>setShowForm(show=>!show)}>{showForm? 'close cabin form':'Add new cabin'}</Button>
    </Row>
    </>
  );
}

export default Cabins;
