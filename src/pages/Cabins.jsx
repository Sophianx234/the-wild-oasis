import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import getCabins from "../services/apiCabins";
import CabinTable from "../features/cabins/CabinTable";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../ui/Spinner";

function Cabins() {
  const {
    isLoading,
    data: cabins,
    error

  } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins
  })

  if(isLoading) return <Spinner/>
  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filter/Sort</p>
      
    </Row>
    <Row>
    <CabinTable cabins={cabins}/>
    </Row>
    </>
  );
}

export default Cabins;
