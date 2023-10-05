import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";

function SelectStock() {
    const [count, setCount] = useState(1);

    const handleChange = (event) => {
        setCount(event.target.value);
    }

    return (
        // <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <div className="">
                <InputLabel>Cantidad</InputLabel>
                <Select
                    value={count}
                    label="Cantidad"
                    onChange={handleChange}>
                    <MenuItem value={1}>1 Unidad</MenuItem>
                    <MenuItem value={2}>2 Unidades</MenuItem>
                    <MenuItem value={3}>3 Unidades</MenuItem>
                    <MenuItem value={4}>4 Unidades</MenuItem>
                    <MenuItem value={5}>5 Unidades</MenuItem>
                    <MenuItem value={6}>6 Unidades</MenuItem>
                    <MenuItem value={6}>Mas unidades</MenuItem>
                </Select>
                <TextField
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </div>
        // </FormControl>
    )
}

export default SelectStock;