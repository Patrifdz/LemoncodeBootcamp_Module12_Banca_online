// Importamos la librería fonk de Lemoncode y creamos nuestro esquema de validaciones. En este caso, vamos a utilizar la validación del email y de los campos requeridos. Aprovechamos también para crear un mensaje en español para que sea el que aparezca en la página cuando no supere las validaciones. 

import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        user: [
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },
            {
            validator: Validators.email,
            message: 'Email no válido',
            },
        ],
        password: [
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);