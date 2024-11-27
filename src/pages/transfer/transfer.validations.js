import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';

const validationSchema = {
    field: {
        iban: [
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },
            {
            validator: iban.validator,
            message: 'Iban no válido',
            },
        ],
        beneficiario: [
            {
            validator: Validators.required,
            message: 'Campo requerido',
            },
        ],
    },
};

export const formValidation = createFormValidation(validationSchema);