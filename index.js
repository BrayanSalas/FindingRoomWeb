//CARGANDO CASAS DE MUESTRA EN PAGINA INICIO 3 CASAS INICIALES TOMADAS DE FIREBASE
var db = firebase.database().ref('establecimientos/apodaca/casa3');
	    
	db.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion1").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono1").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa1").src = data.val().poster;
        document.getElementById("Link1").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos1").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras1").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio1").firstChild.nodeValue = data.val().precio;
    });
var db2 = firebase.database().ref('establecimientos/escobedo/casa2');

	db2.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion2").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono2").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa2").src = data.val().poster;
        document.getElementById("Link2").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos2").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras2").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio2").firstChild.nodeValue = data.val().precio;
    });
        
var db3 = firebase.database().ref('establecimientos/santa catarina/casa1');
	    
	db3.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion3").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono3").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa3").src = data.val().poster;
        document.getElementById("Link3").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos3").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras3").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio3").firstChild.nodeValue = data.val().precio;
    });

//FUNCIONES PARA TOMAR LAS CASAS POR MUNICIPIO DESDE FIREBASE

function casasApodaca(){
document.getElementById("contenedor2").style.display = "block";
document.getElementById("contenedor3").style.display = "block";
    document.getElementById("1").style.display = "block";
var db1 = firebase.database().ref('establecimientos/apodaca/casa1');
	   document.getElementById("Introduccion").innerHTML = "Casas de Apodaca";
	db1.on('value', function(data){
   console.log("data: ", data.val());
        document.getElementById("Ubicacion1").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono1").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa1").src = data.val().poster;
        document.getElementById("Link1").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos1").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras1").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio1").firstChild.nodeValue = data.val().precio;
    });
    
    
var db2 = firebase.database().ref('establecimientos/apodaca/casa2');
	    
	db2.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion2").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono2").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa2").src = data.val().poster;
        document.getElementById("Link2").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos2").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras2").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio2").firstChild.nodeValue = data.val().precio;
    });
    
    
var db3 = firebase.database().ref('establecimientos/apodaca/casa3');
	    
	db3.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion3").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono3").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa3").src = data.val().poster;
        document.getElementById("Link3").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos3").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras3").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio3").firstChild.nodeValue = data.val().precio;
    });

}

function casasEscobedo(){
document.getElementById("contenedor2").style.display = "block";
document.getElementById("contenedor3").style.display = "block";    
document.getElementById("1").style.display = "block";
var db1 = firebase.database().ref('establecimientos/escobedo/casa1');
document.getElementById("Introduccion").innerHTML = "Casas de Escobedo";	    
	db1.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion1").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono1").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa1").src = data.val().poster;
        document.getElementById("Link1").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos1").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras1").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio1").firstChild.nodeValue = data.val().precio;
    });
    
    
var db2 = firebase.database().ref('establecimientos/escobedo/casa2');
	    
	db2.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion2").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono2").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa2").src = data.val().poster;
        document.getElementById("Link2").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos2").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras2").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio2").firstChild.nodeValue = data.val().precio;
    });
    
    
var db3 = firebase.database().ref('establecimientos/escobedo/casa3');
	    
	db3.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion3").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono3").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa3").src = data.val().poster;
        document.getElementById("Link3").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos3").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras3").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio3").firstChild.nodeValue = data.val().precio;
    });
}

function casasSantaCatarina(){
document.getElementById("contenedor2").style.display = "block";
document.getElementById("contenedor3").style.display = "block";
document.getElementById("1").style.display = "block";
var db1 = firebase.database().ref('establecimientos/santa catarina/casa1');
document.getElementById("Introduccion").innerHTML = "Casas de Santa Catarina";	    
	db1.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion1").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono1").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa1").src = data.val().poster;
        document.getElementById("Link1").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos1").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras1").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio1").firstChild.nodeValue = data.val().precio;
    });
    
    
var db2 = firebase.database().ref('establecimientos/santa catarina/casa2');
	    
	db2.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion2").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono2").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa2").src = data.val().poster;
        document.getElementById("Link2").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos2").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras2").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio2").firstChild.nodeValue = data.val().precio;
    });
    
    
var db3 = firebase.database().ref('establecimientos/santa catarina/casa3');
	    
	db3.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion3").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono3").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa3").src = data.val().poster;
        document.getElementById("Link3").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos3").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras3").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio3").firstChild.nodeValue = data.val().precio;
    });
}

function casasSanNicolas(){
document.getElementById("contenedor2").style.display = "block";
document.getElementById("contenedor3").style.display = "block";
document.getElementById("1").style.display = "block";
    var db1 = firebase.database().ref('establecimientos/san nicolas/casa1');
    document.getElementById("Introduccion").innerHTML = "Casas de San Nicolas";
	db1.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion1").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono1").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa1").src = data.val().poster;
        document.getElementById("Link1").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa1").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos1").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras1").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio1").firstChild.nodeValue = data.val().precio;
    });
    
    
var db2 = firebase.database().ref('establecimientos/san nicolas/casa2');
	    
	db2.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion2").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono2").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa2").src = data.val().poster;
        document.getElementById("Link2").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa2").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos2").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras2").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio2").firstChild.nodeValue = data.val().precio;
    });
    
    
var db3 = firebase.database().ref('establecimientos/san nicolas/casa3');
	    
	db3.on('value', function(data){
   console.log("data: ", data.val());
        
        document.getElementById("Ubicacion3").firstChild.nodeValue = data.val().ubicacion;
        document.getElementById("Telefono3").firstChild.nodeValue = data.val().telefono;
        document.getElementById("Informacion3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("imgCasa3").src = data.val().poster;
        document.getElementById("Link3").firstChild.nodeValue = data.val().poster;
        document.getElementById("casa3").firstChild.nodeValue = data.val().informacion;
        document.getElementById("Banos3").firstChild.nodeValue = data.val().banos;
        document.getElementById("Recamaras3").firstChild.nodeValue = data.val().recamaras;
        document.getElementById("Precio3").firstChild.nodeValue = data.val().precio;
    });
}

//SCRIPT INICIAL, SI LA PERSONA INICIO SESION COMIENZA CON LA PANTALLA DE RENTA DE CASAS, SINO, EN EL LOGIN
//AL INICIAR EL SCRIPT COMPRUEBA QUE ESTE LOGEADO, SI ES ASI
//PASA A LA PANTALLA DE CARGA
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
    var user = firebase.auth().currentUser;
      
if(user != null){
    
    }

  }else {
    // EL USUARIO NO INICIO SESION, ENTONCES VA AL LOGIN.

    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
   }
});

//FUNCION AL PRESIONAR EL BOTON DE ENTRAR DE LA PANTALLA LOGIN
function login(){

  var userEmail = document.getElementById("loginemail_field").value;
  var userPass = document.getElementById("loginpassword_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    //ERRORES VALIDADOS DESDE FIREBASE.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error : " + errorMessage);

  });

}

//FUNCION PARA MOSTRAR EL FORMULARIO DE REGISTRO
function goRegister(){
    document.getElementById("register_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";
}

//FUNCION PARA TOMAR LOS CAMPOS DEL REGISTRO Y PASARLOS A LA SECCION "usuarios/+userName"
//ASI COMO TAMBIEN SU REGISTRO NORMAL DE USER + PASSWORD EN FIREBASE.
function register() {
    var uName = document.getElementById("name_field").value;
    var userName = document.getElementById("user_field").value;
    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;
    
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // ERRORES VALIDADOS DESDE FIREBASE.
  var errorCode = error.code;
  var errorMessage = error.message;

  
});
// SETEAR EN "usuarios/+username" DE LA BASE DE DATOS
  firebase.database().ref('usuarios/' + userName).set({
    nombre: uName,
    correo: userEmail,
    contrasena: userPass,
    usuario: userName
  });
 document.getElementById("register_div").style.display = "none";

}


//FUNCION DEL BOTON RENTAR, TOMA COMO PARAMETRO EL ID DEL BOTON Y LO UTILIZA 
//PARA SETEAR EN LA BASE DE DATOS LOS VALORES DE LA CASA
function rentar(comp){
let id = comp.id;//TOMANDO VALOR DE LOS BOTONES RENTAR
    
//VALIDACION PARA USUARIO Y CONTRASEÑA CORRECTOS AL RENTAR
var userName = prompt("Introduzca su nombre de usuario para confirmar");
var password = prompt("Introduzca su contraseña para confirmar");
     
    var dbr = firebase.database().ref('usuarios/'+userName);   
	dbr.on('value', function(data){
   console.log("data: ", data.val());
        //COMPRUEBA SI EXISTE EL USUARIO, SINO, SE LE NOTIFICA
        if(data.val()==null){
            alert("Ese usuario no existe, verifique porfavor");
        }//COMPRUEBA SI EL USUARIO Y CONTRASEÑA SON CORRECTOS
        if((data.val().usuario == userName) && (data.val().contrasena == password)){
            var inf = document.getElementById("Informacion"+id).textContent;
            var tel = document.getElementById("Telefono"+id).textContent;
            var rec = document.getElementById("Recamaras"+id).textContent;
            var ban = document.getElementById("Banos"+id).textContent;
            var pos = document.getElementById("Link"+id).textContent;
            var pre = document.getElementById("Precio"+id).textContent;
            var ubi = document.getElementById("Ubicacion"+id).textContent;
            // SETEAR UNA PETICION DE RENTA EN "usuarios/+username" DE LA BASE DE DATOS
              firebase.database().ref('usuarios/'+userName+"/peticion").set({
                informacion: inf,
                telefono: tel,
                banos: ban,
                recamaras: rec,
                precio: pre,
                ubicacion: ubi,
                poster: pos
              });
        }else{
            alert("El usuario y/o contrasena es incorrecto");
        }
        
    });


}

function miRenta(){
    var userName = prompt("Introduzca su nombre de usuario para visualizar");
    var dbR = firebase.database().ref('usuarios/'+userName+'/peticion');
	dbR.on('value', function(data){
    console.log("data: ", data.val());
        console.log(userName);
        if(data.val()==null){
            alert("Primero renta una casa para poder visualizarla en esta seccion \n(Verifique su usuario tambien)");
        }else{
            document.getElementById("Ubicacion1").firstChild.nodeValue = data.val().ubicacion;
            document.getElementById("Telefono1").firstChild.nodeValue = data.val().telefono;
            document.getElementById("Informacion1").firstChild.nodeValue = data.val().informacion;
            document.getElementById("imgCasa1").src = data.val().poster;
            document.getElementById("casa1").firstChild.nodeValue = data.val().informacion;
            document.getElementById("Banos1").firstChild.nodeValue = data.val().banos;
            document.getElementById("Recamaras1").firstChild.nodeValue = data.val().recamaras;
            document.getElementById("Precio1").firstChild.nodeValue = data.val().precio;
            document.getElementById("Introduccion").innerHTML = "Mi casa rentada";
            document.getElementById("contenedor2").style.display = "none";
            document.getElementById("contenedor3").style.display = "none";
            document.getElementById("1").style.display = "none";
        }
        
    });
    
}

// FUNCION PARA CERRAR SESION DE FIREBASE
function logout(){
  firebase.auth().signOut();
}

function back(){
     document.getElementById("register_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
}