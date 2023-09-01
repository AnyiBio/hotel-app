import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent, CheckboxComponent } from 'common/components';
import { CommandFooterComponent } from '../../../common-app/command-footer';
import { cx } from '@emotion/css';
import { Booking } from '../booking.vm';
import * as classes from './data.styles';

interface Props {
  booking: Booking;
  className?: string;
  isEditMode: boolean;
  onSave: (room: Booking) => void;
  onCancel: () => void;
}

export const DataComponent: React.FunctionComponent<Props> = ({
  booking: room,
  className,
  onSave,
  isEditMode,
  onCancel,
}) => {
  console.log(room);
  React.useEffect(() => {

  }, [isEditMode]);

  return (
    <Formik
      initialValues={room}
      enableReinitialize={true}
      onSubmit={onSave}
    >
      {() => (
        <Form className={cx(classes.form({ isEditMode }), className)}>
          <TextFieldComponent
            label="Nombre"
            name="clientName"
            className={classes.name}
          />
          <TextFieldComponent
            label="Habitación"
            name="room"
            className={classes.room}
          />
          <CheckboxComponent
            name="isActive"
            label="Activo"
            color="primary"
            className={classes.isActive}
          />
          <CommandFooterComponent
            labels={{cancelButton: "Volver"}}
            onCancel={onCancel}
            className={classes.commands}
          />
        </Form>
      )}
    </Formik>
  );
};
