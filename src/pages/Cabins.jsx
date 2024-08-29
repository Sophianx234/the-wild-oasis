import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import { useCabins } from "../features/cabins/useCabins";

function Cabins() {
  const {isLoading, cabins} = useCabins()
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
