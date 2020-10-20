var form = document.querySelector('#form');
var input = document.querySelector('#email');
var msg = document.querySelector('p.error-msg');
var inputVal = input.value;

function timeout(){
  setTimeout(()=>{
    form.classList.remove('invalid')
  },3000)
}


function
validate(){
  if(inputVal === '' || inputVal == null) {
    form.classList.add('invalid');
    msg.textContent = 'Email cannot be empty';
    timeout()
  }
}

/*

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

*/

form.addEventListener('submit', (e) => {
  e.preventDefault();
  validate()
})