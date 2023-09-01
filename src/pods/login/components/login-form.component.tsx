import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@mui/material';
import { TextFieldComponent } from 'common/components';
import { Login, createEmptyLogin } from '../login.vm';
import * as classes from './login-form.styles';

interface Props {
  onLogin: (login: Login) => void;
}

export const LoginFormComponent: React.FunctionComponent<Props> = (props) => {
  const { onLogin } = props;
  return (
    <Formik
      onSubmit={onLogin}
      initialValues={createEmptyLogin()}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent
            name="user"
            label={` *`}
            variant="outlined"
          />
          <TextFieldComponent
            name="password"
            label={` *`}
            type="password"
            variant="outlined"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
