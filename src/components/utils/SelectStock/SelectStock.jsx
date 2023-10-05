import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

function SelectStock({stock}) {
    const [count, setCount] = useState(1);

    const handleInput = (event) => {
        const value = event.target.value;
        setCount(value > stock ? stock : value);
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