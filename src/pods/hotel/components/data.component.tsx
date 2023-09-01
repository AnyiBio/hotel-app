import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent, CheckboxComponent } from 'common/components';
import { CommandFooterComponent } from '../../../common-app/command-footer';
import { Hotel } from '../hotel.vm';

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
          <TextFieldComponent label="Nombre" name="name" />
          <TextFieldComponent label="Id Externo" name="externalId" />
          <TextFieldComponent label="Comentarios" name="comments" multiline />
          <CheckboxComponent label="Activo" name="isActive" color="primary" />
          <CommandFooterComponent onCancel={onCancel} />
        </Form>
      )}
    </Formik>
  );
};
