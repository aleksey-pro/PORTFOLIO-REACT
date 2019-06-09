// Render Prop
import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';

import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import PortInput from '../form/portInput';
import PortDate from '../form/portDate';

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
  close: {
    maxWidth: '300px',
  },
}));

const validateErrors = values => {
  const errors = {};

  Object.entries(values).forEach(([key, value]) => {
    if (!values[key] && key !== 'endDate') {
      errors[key] = `Field ${key} is required!`;
    }
    if (
      values.endDate &&
      values.startDate &&
      values.startDate > values.endDate
    ) {
      errors.endDate = 'End date cannot be before start date';
    }
  });
  return errors;
};

const PortfolioCreateForm = ({ onSubmit, error, initialValues }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validate={validateErrors} // client-side validation
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type='text'
              name='title'
              component={PortInput}
              label='Title'
            />
            <Field
              type='text'
              name='company'
              component={PortInput}
              label='Company'
            />
            <Field
              type='text'
              name='location'
              component={PortInput}
              label='Location'
            />
            <Field
              type='text'
              name='position'
              component={PortInput}
              label='Position'
            />
            <Field
              type='textarea'
              name='description'
              component='textarea'
              component={PortInput}
              label='Description'
            />
            <Field
              type='date'
              name='startDate'
              component={PortDate}
              label='startDate'
              initialDate={initialValues.startDate}
            />
            <Field
              type='date'
              name='endDate'
              component={PortDate}
              label='endDate'
              initialDate={initialValues.endDate}
            />
            <div>
              {error && (
                <div>
                  <Snackbar
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    className={classes.close}
                    open={open}
                    onClose={handleClose}
                    message={<span id='message-id'>{error}</span>}
                    action={[
                      <Button
                        key='undo'
                        color='secondary'
                        size='small'
                        onClick={handleClose}
                      >
                        UNDO
                      </Button>,
                      <IconButton
                        key='close'
                        aria-label='Close'
                        color='inherit'
                        onClick={handleClose}
                      >
                        X
                      </IconButton>,
                    ]}
                  />
                </div>
              )}
              <Button
                className={classes.root}
                type='submit'
                disabled={isSubmitting}
              >
                Create
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

PortfolioCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default PortfolioCreateForm;
