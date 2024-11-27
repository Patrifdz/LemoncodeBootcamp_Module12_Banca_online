import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';

const commonValidation = [
    {
        validator: Validators.required,
        message: 'Campo requerido',
    }
];
const validationSchema = {
    field: {
        iban: [
            ...commonValidation,
            {
            validator: iban.validator,
            message: 'IBAN no válido',
            },
        ],
        name  : commonValidation,
        amount: commonValidation,
        concept: commonValidation,
        notes: commonValidation,
        date : {
            day: [
                ...commonValidation,
                {
                    validator: Validators.pattern,
                    customArgs: { pattern:  '/^(7|8|9)\d{9}$/ ' },
                    message: 'La fecha introducida no es correcta'
                  },
            ],
            month: commonValidation,
            year: commonValidation,
        },
        email: [
            ...commonValidation,
        {
            validator: Validators.email,
            message: 'Email no válido',
        }
        ]

    },
};

export const formValidation = createFormValidation(validationSchema);