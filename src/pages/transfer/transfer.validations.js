import { Validators, createFormValidation } from '@lemoncode/fonk';
import { iban } from '@lemoncode/fonk-iban-validator';
import { laterDate } from '@lemoncode/fonk-later-date-validator';
import { positiveNumber } from '@lemoncode/fonk-positive-number-validator';

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
        amount: [
            ...commonValidation,
            {
                validator: positiveNumber.validator,
                customArgs: { allowZero: false },
                message: 'La cantidad debe ser superior a 0',
            },
            {
            validator: Validators.pattern,
            customArgs: { pattern: /^[+]?(0|[1-9]\d*)(\.\d+)?$/ },
          },
        ],
        concept: commonValidation,
        notes: commonValidation,
        day: [
                ...commonValidation,
                {
                    validator: Validators.pattern,
                    customArgs: { pattern: /^([1-9]|[1-2]\d|3[01])$/ },
                    message: 'Día no válido',
                  },
        ],
        month: [
                ...commonValidation,
                {
                    validator: Validators.pattern,
                    customArgs: { pattern: /^([1-9]|1[012])$/ },
                    message: 'Mes no válido',
                  },
        ],
        year: [
                ...commonValidation,
                {
                    validator: Validators.pattern,
                    customArgs: { pattern: /^2[0-9][2-9][3-9]$/ },
                    message: 'Año no válido',
                  },
        ],
        date: [
                ...commonValidation,
                {
                    validator: laterDate.validator,
                    customArgs: {
                      parseStringToDateFn: (value) => new Date(value),
                      date: new Date(),
                    },
                    message: 'La fecha debe ser igual o posterior a la actual',
                }
        ],
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