//Verificar si los datos que se loggeo, concuerden con los datos almacenados en la base de datos local
const user = JSON.parse(localStorage.getItem('login_success')) || false

if (!user){
    window.location.href='login.html'
}

const logout = document.querySelector('#logout')

//Inicializar un evento click que me permita cerrar sesión
logout.addEventListener('click',()=>{
    alert('Cerraste sesión')
    //Para cerrar sesión, removemos el login
    localStorage.removeItem('login_success')
    //Volvemos a la página de login
    window.location.href='login.html'
})
