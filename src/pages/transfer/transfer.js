import { history, routes } from '../../core/router';
import { getAccountList, sendDataTransfer } from './transfer.api';
import { setAccountOptions } from './transfer.helpers';
import { formValidation } from './transfer.validations';
import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors} from '../../common/helpers';


const paramsUrl = history.getParams();

getAccountList().then( account => {
setAccountOptions (account, paramsUrl.id)
})


let transfer = {
    iban: '',
    name: '',
    amount: '',
    concept: '',
    notes: '',
    date: '',
    email: ''
};

const fieldId = [
    'iban',
    'name',
    'amount',
    'concept',
    'notes',
    'day',
    'month',
    'year',
    'email',
];

fieldId.forEach(field => {
    // Capturar todos los valores cumplimentados en el formulario
    onUpdateField(field, event => {
        const value = event.target.value;
        // Actualización de la estructura del objeto `transfer`
        transfer = {
            ...transfer,
            [field]: value,
          };
        // Actualización del campo fecha y validación
        if (field === "day" | field === "month" | field === "year"){
            transfer = {
              ...transfer,        
              date: `${transfer.year}/${transfer.month}/${transfer.day}`,
          }
        formValidation.validateField('date', transfer.date)
        .then((result) => onSetError("date", result));
        } 

        // Validación de los campos actualizados
        formValidation.validateField(field, value
        ).then(result => {
            onSetError(field, result);
        });
    });
});

onSubmitForm('transfer-button', () => {
     formValidation.validateForm(transfer).then(result => {
        console.log(result); // Muestra el resultado de la validación
        onSetFormErrors(result); // Maneja los errores en el formulario

        if (result.succeeded) {
            sendDataTransfer(transfer).then(() => {
                { history.push(routes.accountList) };
                alert('Transferencia realizada con éxito');
            });
        };
    });
});
