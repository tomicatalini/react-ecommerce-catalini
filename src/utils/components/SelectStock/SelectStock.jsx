import { InputLabel,TextField } from "@mui/material";
import { useState } from "react";

function SelectStock({stock, setAmount}) {
    const [count, setCount] = useState(1);

    const handleInput = (event) => {
        const valueType = event.target.value;
        const value = valueType > stock ? stock : valueType;
        setCount(value);
        setAmount(value);
    }

    return (
        // <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <div className="">
                <InputLabel>Cantidad</InputLabel>
                <TextField
                    type="number"
                    onInput={handleInput}
                    value={count}
                    InputLabelProps={{
                        shrink: true,
                    }}/>
            </div>
        // </FormControl>
    )
}

export default SelectStock;