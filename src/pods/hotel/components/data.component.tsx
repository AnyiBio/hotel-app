import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent, CheckboxComponent } from 'common/components';
import { CommandFooterComponent } from '../../../common-app/command-footer';
import { Hotel } from '../hotel.vm';
import * as classes from './data.styles';
interface Props {
  hotel: Hotel;
  onSave: (hotel: Hotel) => void;
  onCancel: () => void;
  className: string;
}

export const DataComponent: React.FunctionComponent<Props> = ({
  hotel,
  onSave,
  onCancel,
  className,
}) => {
  return (
    <Formik initialValues={hotel} enableReinitialize={true} onSubmit={onSave}>
      {() => (
        <Form className={className}>
          <TextFieldComponent
            label="Id"
            name="id"
            InputProps={{
              readOnly: true,
            }}
          />
          <TextFieldComponent
            label="Nombre"
            name="name"
            className={classes.name}
          />
          <TextFieldComponent
            label="Estrellas"
            name="stars"
            className={classes.stars}
          />
          <TextFieldComponent
            label="Comentarios"
            name="comments"
            className={classes.name}
            multiline />
          <CheckboxComponent
            label="Activo"
            name="isActive"
            className={classes.name}
            color="primary" />
          <CommandFooterComponent onCancel={onCancel} />
        </Form>
      )}
    </Formik>
  );
};
