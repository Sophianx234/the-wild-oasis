import { useState } from "react"
import Button from "../../ui/Button"
import CreateCabinForm from "./CreateCabinForm"
import Modal from "../../ui/Modal"

function AddCabin({cabin}) {
    const [isOpenModal, setIsOpenModal] = useState(false)
    return (
        <div>

            <Button onClick={()=>setIsOpenModal(show=>!show)}>{isOpenModal? 'close cabin form':'Add new cabin'}</Button>
            {isOpenModal && <Modal onClose={()=>setIsOpenModal(false)}>
                <CreateCabinForm onClose={()=>setIsOpenModal(false)} cabin={cabin}/>
                </Modal>}
        </div>
        
    )
}

export default AddCabin
