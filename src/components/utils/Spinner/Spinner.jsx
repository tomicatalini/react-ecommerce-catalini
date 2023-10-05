import { CircularProgress } from "@mui/material";

const Spinner = ({text}) => {
    return (
        <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
            <CircularProgress
                color="secondary"
                size={'6rem'} />
            <span className="font-bold text-xl">{text}</span>
        </div>
    )
}

export default Spinner;