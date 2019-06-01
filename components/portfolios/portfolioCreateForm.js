// Render Prop
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { makeStyles } from '@material-ui/styles'
import PortInput from '../form/portInput'
import PortDate from '../form/portDate'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
}))

const validateErrors = (values) => {
  let errors = {};
  // console.log(values.startDate);
  // console.log(values.endDate);
  // console.log(values.startDate === values.endDate);
  Object.enties(values).forEach(([key, value]) => {
    if(!values[key]) {
      errors[key] = `Field ${key} is required!`
    }
    if(values.endDate && values.startDate
      && (values.startDate < values.endDate)) {
        errors.endDate = 'End date cannot be before start date'
    }
  })
  return errors;
}

const INITIAL_VALUES =
 { title: '',
  company: '',
  location: '',
  position: '',
  description: '',
  startDate: '',
  endDate: ''
 }

const PortfolioCreateForm = () => {
  const classes = useStyles()
  return (
  <div>
    <Formik
      initialValues={INITIAL_VALUES}
      validate={validateErrors}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="text" name="title" component={PortInput} label="Title"/>
          <Field type="text" name="company" component={PortInput} label="Company"/>
          <Field type="text" name="location" component={PortInput} label="Location"/>
          <Field type="text" name="position" component={PortInput} label="Position"/>
          <Field type="textarea" name="description" component='textarea' component={PortInput} label="Description"/>
          <Field type="date" name="startDate" component={PortDate} label="startDate" />
          <Field type="date" name="endDate" component={PortDate} label="endDate" />
          <div>
            <Button className={classes.root} type="submit" disabled={isSubmitting}>
              Create
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
  )
}

export default PortfolioCreateForm



// import React from 'react'

// export default class PortfolioCreateForm extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {title: ''};
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//       debugger;
//       const field = event.target.name
//       this.setState({[field]: event.target.value});
//     }
  
//     handleSubmit(event) {
//         // debugger;
//       alert('A name was submitted: ' + this.state.title);
//       event.preventDefault();
//     }
  
//     render() {
//     //   debugger;
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }