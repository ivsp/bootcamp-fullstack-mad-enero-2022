
const out = document.querySelector('#log_out');

//ahora tengo que crear un evento que vacie el local store

function deleteStorage (){

    localStorage.removeItem('username');
    localStorage.removeItem('password');
    history.back();

}

out.addEventListener('click', () => deleteStorage());