'use-strict';
/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* General - Index                                 */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

function onEvent(event, selector, callback) {
  return selector.addEventListener(event, callback);
}
  

function select(selector, parent = document) {
  return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return parent.querySelectorAll(selector);
}


function create(element, parent = document) {
 return parent.createElement(element);
}

function log(content) {
 console.log(content);
}



/* - - - - - - - - - - - - - - - - - - - - - - - - */
/* Form - Contact Page                             */
/* - - - - - - - - - - - - - - - - - - - - - - - - */

const form = select('form');
const btn = select('.send');
const inputs = selectAll('.form-input');
const emailRegex = /^(?=^.{8,}$)[-_A-Za-z0-9]+([_.-][a-zA-Z0-9]+)*@[A-Za-z0-9]+([.-][a-zA-Z0-9]+)*\.[A-Za-z]{2,}$/;
const postalRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

function isValid(input) {
if (Number.isInteger(input)) {
  return true;
}

return  false;
}

function validate() {
let firstName = select('.fname').value.trim();
let email = select('.email-me').value.trim();

let message = '';
let valid = true;
let count = 0;

if (firstName.length === 0) {
  message += 'First name is required\n';
  valid = false;
  count++;
}

if (email.length === 0) {
  message += 'Email is required \n';
  valid = false;
  count++;
} else if (!emailRegex.test(email)) {
  message += 'A valid email is required \n';
  valid = false;
}

if (count === 2) {
  alert('Fields with * are required');
} else if (!valid) {
  alert(message);
} else {
  alert('Form submitted')
  inputs.forEach(input => input.innerText = '');
  // form.submit();
}
}

onEvent('click', btn, function() {
validate();
})
