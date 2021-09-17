const form = document.querySelector('.form')
const regex = {
   email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
   name: /^[a-zA-Z]+$/,
   password: /^\w+\S$/
}


//functions

const validate = ({target}) => {
   target.value === '' ? showError(target, `${target.name} cannot by empty`) : deleteError(target)

   switch(target.id) {
      case 'firstName':
         if(!regex.name.test(target.value)) {
            showError(target, `Looks like this is not an ${target.name}`)
         }
         break;
      case 'lastName':
         if(!regex.name.test(target.value)) {
            showError(target, `Looks like this is not an ${target.name}`)
         }
         break;
      case 'email':
         if(!regex.email.test(target.value)) {
            showError(target, `Looks like this is not an email`)  
         }
      break;
      case 'password':
         if(!regex.password.test(target.value)) {
            showError(target, `Do not use spaces`)
         }
      break;
   }
}

const showError = (target, msj) => {
   if(!target.parentElement.parentElement.querySelector('.msj-error')){
      const tagP = document.createElement('P')
      const parent = target.parentElement.parentElement
      tagP.textContent = msj
      tagP.classList.add('msj-error')
      parent.appendChild(tagP)
      parent.classList.add('input-error')
   
      target.parentElement.querySelector('img').classList.remove('hidden')
      target.parentElement.parentElement.querySelector('.input').classList.add('error')
   }
}

const deleteError = (target) => {
   const msjErr = target.parentElement.parentElement.querySelector('.msj-error')
   msjErr && msjErr.remove()
   target.parentElement.querySelector('img').classList.add('hidden')
   target.parentElement.parentElement.querySelector('.input').classList.remove('error')
}

//Events
form.addEventListener('keyup', validate)
form.addEventListener('blur', validate)

form.addEventListener('submit', e => e.preventDefault())
