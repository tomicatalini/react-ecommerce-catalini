import { useContext, useState } from "react";
import Layout from "../../components/Layout/Layout";
import { CartCtx } from "../../context/CartContext";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, TextField, useMediaQuery, useTheme } from "@mui/material";
import ItemOrder from "../../components/ItemOrder";
import { formatPrice } from "../../utils/functions";
import { useForm } from "react-hook-form";
import { save } from "../../firebase/db/db-service";
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from "react-router-dom";

const Checkout = () => {
  const [ saving, setSaving ] = useState(false);
  const [ orderId, setOrderId ] = useState(null);
  const { cart , itemsCount, total, resetCart } = useContext(CartCtx);
  const { register, handleSubmit, formState: { errors }, watch , getFieldState} = useForm();

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const onSubmit = handleSubmit( async (data) => {
    setSaving(true);
    const buyer = {
      name: `${data.name} ${data.surname}`,
      phone: data.phone,
      email: data.email 
    }

    const order = {
      buyer,
      date: new Date(),
      total,
      order: cart.map( prod => ( {name: prod.name, quantity: prod.quantity, description: prod.description, price: prod.price} ))
    }

    const newOrder = await save('orders', order).catch(err => console.warn(err));
    setSaving(false);
    setOrderId(newOrder.id);
    setOpen(true);
    resetCart();   
  });

  const watchField = (fieldName) => {    
    const {invalid, isTouched} = getFieldState(fieldName);

    if(!isTouched && !invalid) return false;
    if(!isTouched && invalid) return true;

    return invalid;
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <div className="container mx-auto flex gap-4">
        <section className="flex-1 py-8">
          <div className="">
            <h2 className="text-2xl">Carrito</h2>
            <div className="flex flex-col gap-2 my-4">
              {
                cart.map( item => <ItemOrder key={item.id} product={item} />)
              }
            </div>
          </div>
          <div className="my-8 pt-4 border-t">
            <h2 className="text-2xl">Datos comprador</h2>
            <Box component="form" onSubmit={onSubmit} className="grid grid-cols-2 gap-2 py-4 px-2">
              <TextField id="name" 
                label="Nombre" 
                {...register("name", {required: {value: true, message: "El Nombre es requerido"}})}
                error={watchField("name")}
                helperText={errors.name?.message}/>

              <TextField id="surname" 
                label="Apellido" 
                {...register("surname", {required: {value: true, message: "El Apellido es requerido"}})} 
                error={watchField("surname")}
                helperText={errors.surname?.message} />

              <TextField id="phone" label="Telefono" {...register("phone")} />

              <TextField id="email" 
                label="Correo Electrónico" 
                className="[grid-column:1/3]"
                {...register("email",{ required: {value: true, message: "El Correo Electrónico es requerido"}, pattern: { value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, message: "Correo no válido"}})} 
                error={watchField("email")}
                helperText={errors.email?.message} />
              
              <TextField id="emailCheck" 
                label="Verificar Correo Electrónico" 
                className="[grid-column:1/3]"
                {...register("emailCheck", {required: {value: true, message: "La validación de correos es necesaria"}, validate: (value) => value === watch('email') || "Los correos deben ser iguales"})} 
                error={watchField("emailCheck")}
                helperText={errors.emailCheck?.message} />
              
              <LoadingButton
                type="submit"
                className="[grid-column:1/3]"
                loading={saving}
                loadingPosition="start"
                variant="contained">
                  Finalizar Compra
              </LoadingButton>
            </Box>
          </div>
        </section>
        <section className="min-w-[400px] min-h-[calc(100vh-4rem)] py-8 px-8 bg-zinc-300">
          <h2 className="text-lg">Resumen de Compra</h2>
          <Divider sx={{margin: '1rem 0'}}/>
          <div className="flex items-center justify-between">Productos ({itemsCount}) <span>{formatPrice(total)}</span></div>
          <div className="flex items-center justify-between">Envio <span>Gratis</span></div>
          <Divider sx={{margin: '1rem 0'}}/>
          <div className="flex items-center justify-between">Total <span>{formatPrice( total )}</span></div>
        </section>
      </div>

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">
          {"Felicitaciones!!!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            ID Compra: {orderId}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Link to={'/'}>
            <Button onClick={handleClose} variant="contained" autoFocus>
              Inicio
            </Button>
          </Link>
        </DialogActions>
      </Dialog>

    </Layout>
  )
}

export default Checkout