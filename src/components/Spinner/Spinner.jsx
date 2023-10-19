import { DotPulse } from '@uiball/loaders'



const Spinner = ({text, color}) => {
    return (
        <div className="w-full h-screen flex flex-col gap-2 items-center justify-center">
            <DotPulse 
                size={60}
                speed={1.3} 
                color={color} />
            <span className="font-bold text-xl">{text}</span>
        </div>
    )
}

export default Spinner;