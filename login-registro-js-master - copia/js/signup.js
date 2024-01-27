//Inicializar una variable para que almacene toda la info del formulario
const signupForm = document.querySelector('#signupForm')

//Agregar un evento para que me evite que la página se recargue sin anters enviar el formulario
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    //Inicializar unas variables para que capture os datos de los campos de entrada
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    //Inicializar una variable que reciba ls datos que serán guardados en JSON (Array de datos)
    const Users = JSON.parse(localStorage.getItem('users')) || []

    //Verificamos si el correo que se trata de ingresar se encuentra registrado o no
    const isUserRegistred = Users.find(user => user.email === email)
    if(isUserRegistred){
        return alert ('El correo que ingresas ya se encuentra registrado')
    }
    //Si el correo no está registrado, que le permita guardarlo. Push agrega datos
    Users.push({name: name, 
                email:email, 
                password: password})
                //Convertimos los datos en cadenas
                localStorage.setItem ('users',JSON.stringify(Users))
                alert('Registro exitoso')
                window.location.href = 'login.html'
})