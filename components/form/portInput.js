import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
    },
}))

const FormInput = ({
    label,
    type,
    field,
    form: { touched, errors },
    ...props
  }) => {
    const classes = useStyles();
    return  (
    <FormControl className={classes.formControl}>
        <InputLabel shrink htmlFor={field.name}>{label}</InputLabel>      
        <TextField            
                id={field.name}
                required
                margin="normal"
                type={type}
                {...field}
                {...props}
        />  
        {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
    </FormControl>
  )}

  export default FormInput