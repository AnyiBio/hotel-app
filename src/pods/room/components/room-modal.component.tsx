import React from 'react';
import { useFormik } from 'formik';
import { Modal, Box, TextField, Typography, Button, Select, MenuItem } from '@mui/material';
import { FormComponent } from 'common/components';
import * as classes from './room-modal.styles';

interface Props {
  modalOpen: boolean;
  onClose: () => void;
}

export const RoomModalComponent: React.FunctionComponent<Props> = ({
  modalOpen, onClose
}) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      birthDate: '',
      gender: '',
      documentType: '',
      documentNumber: '',
      email: '',
      phone: '',
      emergencyContactName: '',
      emergencyContactPhone: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
  <Modal open={modalOpen} onClose={onClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "80%",
        height: "80%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      }}
    >
    <Typography variant="h6" component="h2">
      Hacer una reserva
    </Typography>
    <FormComponent
      onSubmit={formik.handleSubmit}
      className={classes.roomFormik}
    >
      <TextField
          label="Nombres y apellidos"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          required
        />
      <TextField
        label="Email"
        name="email"
        required
      />
      <TextField
        select
        label="Género"
      >
        <MenuItem key={1} value="M">
          Masculino
        </MenuItem>
        <MenuItem key={2} value="F">
          Femenino
        </MenuItem>
        <MenuItem key={2} value="F">
          No binario
        </MenuItem>
      </TextField>
      <Select
        label="Tipo de documento"
        name="document"
        defaultValue="cedula"
        required
      >
        <MenuItem value="cedula">Cédula</MenuItem>
        <MenuItem value="pasaporte">Pasaporte</MenuItem>
        <MenuItem value="extranjeria">Tarjeta de extranjería</MenuItem>
      </Select>
      <TextField
        name="document"
        label="Número de documento"
        required
      />
      <TextField
        label="Teléfono"
        name="phone"
        type="number"
        required
      />
      <Typography variant="h6" component="h3">
        Contacto de emergencia
      </Typography>
      <TextField
          label="Nombres y apellidos"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
        />
      <TextField
        label="teléfono"
        name="phone"
        type="number"
      />
      <Button
        type="submit"
        color="secondary"
        variant="contained"
        onClick={onClose}
        >
          Reservar
      </Button>
    </FormComponent>
</Box>
</Modal>
)};
