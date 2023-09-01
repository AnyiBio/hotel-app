import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { CommandFooterComponent } from '../../../common-app/command-footer';
import { cx } from '@emotion/css';
import { Booking } from '../booking.vm';
import * as classes from './data.styles';

interface Props {
  booking: Booking;
  className?: string;
  onSave: (booking: Booking) => void;
  onCancel: () => void;
}

export const DataComponent: React.FunctionComponent<Props> = ({
  booking,
  className,
  onSave,
  onCancel,
}) => {
  console.log(booking);
  return (
    <Formik
      initialValues={booking}
      enableReinitialize={true}
      onSubmit={onSave}
    >
      {() => (
        <Form className={cx(classes.form(), className)}>
          <TextFieldComponent
            label="Nombre del Hotel"
            name="hotelName"
            className={classes.hotelName}
            disabled
          />
          <TextFieldComponent
            label="Nombre del cliente"
            name="clientName"
            className={classes.name}
            disabled
          />
          <TextFieldComponent
            label="Costo"
            name="details.cost"
            className={classes.cost}
            disabled
          />
           <TextFieldComponent
            label="Base"
            name="details.base"
            className={classes.base}
            disabled
          />
           <TextFieldComponent
            label="Tipo de Habitación"
            name="details.kindOfRoom"
            className={classes.kindOfRoom}
            disabled
          />
          <TextFieldComponent
            label="Habitación"
            name="room"
            className={classes.room}
            disabled
          />
          <CommandFooterComponent
            labels={{cancelButton: "Atrás"}}
            onCancel={onCancel}
            className={classes.commands}
          />
        </Form>
      )}
    </Formik>
  );
};
