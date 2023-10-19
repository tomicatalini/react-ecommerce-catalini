import { Alert } from "@mui/material"
import Snackbar from '@mui/material/Snackbar';

const CustomSnackbar = ({open, handleClose, message, severity = 'info', duration = 2000}) => {

  return (
    <div>
      <Snackbar open={open} autoHideDuration={duration} onClose={handleClose} anchorOrigin={{vertical: 'top',horizontal:'right'}}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default CustomSnackbar