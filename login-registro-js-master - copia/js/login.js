//Inicializar una variable para que capture el formulario

const loginForm = document.querySelector ('#loginForm')//querySelector para seleccionar un valor específico. Numeral porque es un ID

//Inicializar un eveno para evitar envíos de datos al recargar un sitio
    loginForm.addEventListener('submit',(e)=>{//Agrega una lista de eventos

    //Evita que el formulario se envíe y que se recargue automáticamente
    e.preventDefault() 
    //Inicializar variables que capturen los valores de campos de entrada
    const email = document.querySelector('#email').value //.value para almacenar el dato  
    const password = document.querySelector('#password').value

    //Inicializar la clave.
    //Convertir la variable users a formato json, trayéndolo de local storage, o si no hay una variable ya creada, crear un espacio vacío.
    const Users = JSON.parse(localStorage.getItem('users')) || []

    //Verificar si el correo y clave coinciden con los valores almacenados en el arreglo
    const validUser = Users.find (user => user.email === email && user.password === password) //find: busca en el arreglo

    //Si los datos de los usuarios no concuerdan 

    if (!validUser){
        return alert('Usuario y/o contraseña son incorrectos')
    }
    //Si los datos concuerdan, muestra mensaje de bienvenida
    alert (`Bienvenido de nuevo ${validUser.name}`)

    //Guardar los datos como string
    localStorage.setItem ('login_success', JSON.stringify(validUser)) //stringify para convertir a cadena de texto

    //Cuando se loggee el usuario nos redirija al home (index)
    window.location.href='index.html'

}) 