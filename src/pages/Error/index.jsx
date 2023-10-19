import { Button } from "@mui/material"
import { Layout } from "../../components"
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => navigate(-1);

  return (
    <Layout>
        <div className="h-[calc(100vh-8rem)] w-fit mx-auto flex flex-col items-center justify-center py-16">
          <div className="text-4xl font-semibold text-neutral-400 drop-shadow-md">Upssssssss.. :(</div>
          <div className="text-2xl font-semibold text-neutral-400 my-8">Ocurrió un error al realizar la operación solicitada... </div>
          <Button variant="contained" className="my-16" onClick={handleBackClick}>Volver</Button>
        </div>
    </Layout>
  )
}

export default ErrorPage