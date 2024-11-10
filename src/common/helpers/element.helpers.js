// Recoge el valor del id que le pasemos por parámetro y realiza la función callback que le pasemos como el otro parámetro.
export const onUpdateField = (id, callback) => {
  const element = document.getElementById(id);
  element.oninput = event => callback(event);

  if (element.type !== 'checkbox') {
    element.onblur = event => callback(event);
  }
};

// Función a la que le pasamos el id con el que queramos lanzar una función cuando el usuario interactue con el mismo. Por ejemplo, el botón enviar del formulario de la página login. El callback que le pasaremos en ese caso será la función encargada de validar que los campos estén cumplimentados. 
export const onSubmitForm = (id, callback) => {
  const element = document.getElementById(id);
  element.onclick = e => {
    e.preventDefault();
    callback();
  };
};

// Función encargada de pintar el error de validación en el html para informar al usuario. 
export const onSetError = (id, error) => {
  if (error.succeeded) {
    removeElementClass(id);
    setErrorMessage(id, '');
  } else {
    setElementClass(id);
    setErrorMessage(id, error.message);
  }
};

const setElementClass = id => {
  const element = document.getElementById(id);
  if (element) {
    element.classList.add('error');
  }
};

const removeElementClass = id => {
  const element = document.getElementById(id);
  if (element) {
    element.classList.remove('error');
  }
};

const setErrorMessage = (id, message) => {
  const messageElement = document.getElementById(`${id}-error`);
  if (messageElement) {
    messageElement.textContent = message;
  }
};

export const onSetFormErrors = ({ fieldErrors }) => {
  Object.entries(fieldErrors).forEach(([key, value]) => {
    onSetError(key, value);
  });
};

const setValue = (element, value) => {
  const elementType = element.tagName.toLowerCase();
  if (elementType === 'select' || elementType === 'input') {
    element.value = value;
  } else {
    element.textContent = value;
  }
};

const onSetValue = (id, value) => {
  const element = document.getElementById(id);
  console.log({ element });
  if (element) {
    setValue(element, value);
  }
};

export const onSetValues = values => {
  Object.entries(values).forEach(([key, value]) => onSetValue(key, value));
};
