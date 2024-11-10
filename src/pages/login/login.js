import { onUpdateField, onSubmitForm, onSetError, onSetFormErrors} from '../../common/helpers';
import { isValidLogin } from './login.api';
import { formValidation } from './login.validations';
import { history, routes } from '../../core/router';

let login = {
    user: '',
    password: '',
};


// El método onUpdateField recoge el valor del input user y password, crea un nuevo objeto con las propiedades con el mismo nombre ('user' y 'password') y guarda ese valor en dichas propiedades.  
onUpdateField('user', event => {
    const value = event.target.value;
    login = { ...login, user: value };
   
    formValidation.validateField('password', login.password).then(result => {
        onSetError('password', result);
        });
});
onUpdateField('password', event => {
    const value = event.target.value;
    login = { ...login, password: value };

    formValidation.validateField('user', login.user).then(result => {
        onSetError('user', result);
        });
});

const onNavigate = isValid => {
    if (isValid) {
        history.push(routes.accountList);
    } else {
        alert('Usuario y/o contraseña no válidos');
    }
};

// El método OnsubmitForm recoge el valor del formulario cuanto el usuario clicka en 'login-button':
onSubmitForm('login-button', () => {
    formValidation.validateForm(login).then(result => {
        onSetFormErrors(result);
        if (result.succeeded) {
            isValidLogin(login).then(isValid => {
                onNavigate(isValid);
            });
        }
    });
});