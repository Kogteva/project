document.querySelector('.btn').addEventListener('click', ()=>{
   if (document.form.name.value == ""){
      alert("Введите имя")
   }
   if (document.form.mail.value == ""){
      alert("Введите E-mail")
   }
   if(document.form.pass.value == ""){
      alert("Введите пароль")
   }
})