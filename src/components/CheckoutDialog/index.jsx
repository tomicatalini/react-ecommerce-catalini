import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, useMediaQuery, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

const CheckoutDialog = ({open, handleClose, data}) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Dialog fullScreen={fullScreen} open={open} onClose={handleClose}>
            <DialogTitle> {"Tu compra ha sido completada con éxito"}</DialogTitle>
            <DialogContent>
                <DialogContentText className="flex flex-col gap-2">            
                    <span>El código de compra</span>
                    <span className="p-4 m-2 text-xl font-bold bg-neutral-100 rounded-md">{data.orderId}</span>
                    <span>Pronto recibirás un correo electrónico con los detalles del pedido y un número de seguimiento.</span>
                    <span className="text-lg">Esperamos que la disfrutes!</span>
                    <span className="text-lg">¡Gracias por elegir <strong  className="text-orange-400">SECOND CHANCE</strong>!</span>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Link to={'/'}>
                    <Button onClick={handleClose} variant="contained" autoFocus>Inicio</Button>
                </Link>
            </DialogActions>
      </Dialog>
    )
}

export default CheckoutDialog;