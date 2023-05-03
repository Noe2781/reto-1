const cuerpoPagina=document.querySelector("#body");
const inputNombre= document.querySelector ("#nombre");
const inputEdad=document.querySelector("#edad");
const inputDni=document.querySelector("#dni");
const inputEmail=document.querySelector("#email");
const inputContraseña=document.querySelector("#contraseña");
const text1 =document.querySelector("#texto1");
const text2=document.querySelector("#texto2");
const text3=document.querySelector("#texto3");
const text4=document.querySelector("#texto4");
const text5=document.querySelector("#texto5");
const text6=document.querySelector("#text6");
const imagen1=document.querySelector("#imagen1");
const titulo1=document.querySelector("#titulo1");
const titulo2=document.querySelector("titulo2");

const img2= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26APeBIyazkOtzg9HbREx7qDoPeM9_mr8EA&usqp=CAU";
const img3= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5FfxTAcV1Zv64R8Y7Y72WCNA8OoJvGWegxA&usqp=CAU";

const mayor18 = 18;
const colorFondoPag ="#0d1117";
const colorTextopag = "#e6edf3";
const tipoTextoIngresado = "monospace";
const colorTextoIngresado = "red";
const usuario = "Noegunner";
const claveSecreta = "Noe2012";

function verificacion1() {

    let nombreIngresado =" def nombre";
    let edadIngresada = "def edad";
    let dniIngresado = "def dni";
    let emailIngresado = "def email";
    let claveIngresada = " def clave";

    nombreIngresado = inputNombre.value;
    edadIngresada = inputEdad.value;
    dniIngresado = inputDni.value;
    emailIngresado = inputEmail.value;
    text1.innerHTML=("Bienvenido" + nombreIngresado);
    text2.innerHTML=("Tu tienes " + edadIngresada +"edad");
    text3.innerHTML=("Tu DNI es : " + dniIngresado);
    text4.innerHTML=("Tu email es : " + emailIngresado);

    cuerpoPagina.style.background=colorFondoPag;
    cuerpoPagina.style.color=colorTextopag;
    cuerpoPagina.style.fontFamily=tipoTextoIngresado;
    titulo1.style.color=colorTextoIngresado;
    titulo2.style.color=colorTextoIngresado;
    claveIngresada=inputContraseña.value;

    if (edadIngresada>=mayor18) {
        text2.innerHTML=("El usuario registrado es mayor de edad");

    } else {
        text2.innerHTML=("El usuario no puede registrarse porque es menor de edad");
        
    }}

function verificacion2(){

    claveIngresada=clave1.value;


    if (claveIngresada == claveSecreta) {
       imagen1.src = img2;
       text6.innerHTML=("Ya puedes ingresar a la pagina");
    } else {


        imagen1.src=img3;
        text6.innerHTML=("No eres usuario de la pagina");
        text6.style.color="red"
        
    }





}





