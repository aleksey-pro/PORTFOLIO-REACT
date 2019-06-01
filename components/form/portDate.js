import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import FormControl from '@material-ui/core/FormControl'
import {fieldToTextField , TextFieldProps} from 'formik-material-ui'
import MuiTextField  from '@material-ui/core/TextField'

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
    },
}))

const PortDate = ({ TextFieldProps,...props }) => {
    const classes = useStyles()
    const { touched, errors } = props.form
    const {name} = props.field
     return (
        <FormControl className={classes.formControl}>
            <div className="form-control">
                <MuiTextField
                    {...fieldToTextField(props)}
                    defaultValue={props.value}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    {...props}
                />
            </div>            
            {touched[name] && errors[name] && <div className="error">{errors[name]}</div>}
        </FormControl>
    )
}

PortDate.propTypes = {
    TextFieldProps: PropTypes.object,
    form: PropTypes.object,
    field: PropTypes.object
  }

export default PortDate