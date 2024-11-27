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
    beneficiario: '',
}

onUpdateField('iban', event => {
    const value = event.target.value;
    login = { ...transfer, iban: value };
   
    formValidation.validateField('name', transfer.beneficiario).then(result => {
        onSetError('name', result);
        });
});