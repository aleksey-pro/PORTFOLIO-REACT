import React from "react"
import DatePicker from "react-datepicker"
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import "react-datepicker/dist/react-datepicker.css"

export default class PortDate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateValue: new Date()
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(date) {
    const { setFieldValue, setFieldTouched } = this.props.form;
    const { name } = this.props.field;
    this.setState({
        dateValue: date
    });
    setFieldValue(name, date, true);
    setFieldTouched(name, true, true);
  }

  render() {
    const {label, field, form: { touched, errors }} = this.props
    // const { touched, errors } = this.props.form
    return (
        <div>
            <FormControl>
            <InputLabel shrink htmlFor={field.name}>{label}</InputLabel> 
            </FormControl>
            <div className="form-control">
                <DatePicker
                    id={field.name}
                    selected={this.state.dateValue}
                    onChange={this.handleChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    maxDate={new Date()}
                    dropdownMode ="select"
                />
            </div>
            {touched[field.name] && errors[field.name] && <div className="error">{errors[field.name]}</div>}
        </div>
    );
  }
}