'use strict'
//Fetch(ajax) y peticiones a servicios/ apis rest
var div_usuarios = document.querySelector('#usuarios');
var div_usuario = document.querySelector('#singleUser');


getUsuarios()
    .then(data => data.json())
    .then(users => {
        listadoUsuarios(users.data);

        return getSingle();
    })
    .then(data => data.json())
    .then(single =>{
        mostrarSingle(single.data)
    });


function getUsuarios(){
    return fetch('https://reqres.in/api/users?page=2s')
}

function getSingle(){
    return fetch('https://reqres.in/api/users/2')
}

function listadoUsuarios(usuarios){
    usuarios.map((user, i)=> {
        let nombre = document.createElement('h3')
        let avatar = document.createElement('img');
        nombre.innerHTML = i +" "+ user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width ="100"
        div_usuarios.appendChild(nombre);
        div_usuarios.appendChild(avatar);
        document.querySelector(".loading").style.display = "none";
    } );
}

function mostrarSingle(usuario){
    
    let nombre = document.createElement('h4')
    let avatar = document.createElement('img');
    nombre.innerHTML = usuario.id +" "+ usuario.first_name + " " + usuario.last_name;
    avatar.src = usuario.avatar;
    avatar.width = "100";
    div_usuario.appendChild(nombre);
    div_usuario.appendChild(avatar);

    document.querySelector("#singleUser .loading").style.display = "none";
}