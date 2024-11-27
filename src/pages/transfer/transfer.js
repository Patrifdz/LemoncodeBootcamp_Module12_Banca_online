import { history } from '../../core/router';
import { getAccountList } from './transfer.api';
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
    date: {
        day: '',
        month: '',
        year: '',
    },
    email: ''
};

onUpdateField('iban', event => {
    const value = event.target.value;
    transfer = { ...transfer, iban: value };
    formValidation.validateField('iban', transfer.iban).then(result => {
        onSetError('iban', result);
        });
});

onUpdateField('name', event => {
    const value = event.target.value;
    transfer = { ...transfer, name: value };
    formValidation.validateField('name', transfer.name).then(result => {
    onSetError('name', result);
    });
});

onUpdateField ('amount', event =>{
    const value = event.target.value;
    transfer = {...transfer, amount: value}
    formValidation.validateField('amount', transfer.amount).then(result => {
        onSetError('amount', result);
        });
} )

onUpdateField ('concept', event =>{
    const value = event.target.value;
    transfer = {...transfer, concept: value}
    formValidation.validateField('concept', transfer.concept).then(result => {
        onSetError('concept', result);
        });
} )

onUpdateField ('notes', event =>{
    const value = event.target.value;
    transfer = {...transfer, notes: value}
    formValidation.validateField('notes', transfer.notes).then(result => {
        onSetError('notes', result);
        });
} )

onUpdateField('day', event => {
    const value = event.target.value;
    
    transfer = {
        ...transfer,
        date: {
            ...transfer.date,
            day: value
        }
    };
    formValidation.validateField('day', transfer.date.day).then(result => {
        onSetError('date', result);
        });
});


onUpdateField ('month', event =>{
    const value = event.target.value;
    transfer = {
        ...transfer,
        date: {
            ...transfer.date,
            month: value
        }
    };
    formValidation.validateField('month', transfer.date.month).then(result => {
        onSetError('date', result);
        });
} )

onUpdateField ('year', event =>{
    const value = event.target.value;
    transfer = {
        ...transfer,
        date: {
            ...transfer.date,
            year: value
        }
    };
    formValidation.validateField('year', transfer.date.year).then(result => {
        onSetError('date', result);
        });
} )


onUpdateField ('email', event =>{
    const value = event.target.value;
    transfer = {...transfer, email: value}
    formValidation.validateField('email', transfer.email).then(result => {
        onSetError('email', result);
        });
} )

onSubmitForm( 'transfer-button', ( ) => {
    console.log({transfer})
    formValidation.validateForm (transfer).then( result => {
        console.log(result)
        onSetFormErrors(result);
    })
})