const scriptURL = 'https://script.google.com/macros/s/AKfycbw3vivQGw4Ci3B_Og5FirjkNUmR0NRMyhGddvnvtlJAJJdlk2Dv9oWfZa3domkZ4E04KA/exec'
const form = document.forms['submit-to-google-sheet1']
const msg=document.getElementById("msg")


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
        msg.innerHTML="Thank you for subscribing"
        setTimeout (function(){
             msg.innerHTML=" "
        },5000)  
     })
    .catch(error => console.error('Error!', error.message))
})
