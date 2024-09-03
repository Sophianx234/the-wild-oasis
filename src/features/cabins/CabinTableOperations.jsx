import TableOperations from '../../ui/TableOperations'
import Filter from '../../ui/Filter'
import SortBy from '../../ui/SortBy'
function CabinTableOperations() {
    return (
        <TableOperations>
            <Filter/>
            <SortBy options={[
                {
                value: 'name-asc'}
            ]
            }/>
            
        </TableOperations>
    )
}

export default CabinTableOperations
