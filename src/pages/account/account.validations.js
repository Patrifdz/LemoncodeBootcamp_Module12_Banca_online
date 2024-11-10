//Igual que hicimos en la carpeta "login", importamos la librería fonk y creamos un esquema con las validaciones de campo requerido que necesitemos usar en account.js

import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
    field: {
        type: [
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },
        ],
        alias: [
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },
        ],
    },
};


export const formValidation = createFormValidation(validationSchema);