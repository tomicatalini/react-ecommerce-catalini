import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function SelectStock({stock, itemsCount, setItemsCount}) {

    const add = () => setItemsCount( itemsCount + 1 );

    const remove = () => setItemsCount( itemsCount - 1 );

    return (
        <div className="flex items-center select-none">
            <p>Cantidad:</p>
            <div className=" w-fit rounded-full">
                <IconButton color="secondary" size="small" onClick={remove} disabled={itemsCount === 1}>
                    <RemoveIcon />
                </IconButton>
            </div>
            <p className="select-none p-2">{itemsCount}</p>
            <div className=" w-fit rounded-full">
                <IconButton color="primary" size="small" onClick={add} disabled={itemsCount === stock}>
                    <AddIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default SelectStock;