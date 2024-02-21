// boton para subir a la pagina
/*$(document).ready(function () { irArriba(); }); //Hacia arriba

function irArriba() {
  $('.ir-arriba').click(function () { $('body,html').animate({ scrollTop: '0px' }, 1000); });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) { $('.ir-arriba').slideDown(600); } else { $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function () { $('body,html').animate({ scrollTop: '1000px' }, 1000); });
} */

//VALIDACION DE FORMULARIO
document.querySelector("Form").addEventListener("submit", function (event) {
  event.preventDefault(); // paraliza envío formulario

  console.log(event.target.elements);
  console.log(event.target.fname.value);
  console.log(event.target.lname.value);
  console.log(event.target.email.value);
  console.log(event.target.tlf.value);
  console.log(event.target.colaborar.value);  //radio
  console.log(event.target.animal.value);     //select
  console.log(event.target.comments.value);   //textarea
  console.log(event.target.accept.checked);   //checkbox

  const fname = event.target.fname.value;
  const lname = event.target.lname.value;
  const email = event.target.email.value;
  const tlf = event.target.tlf.value;
  const colaborar = event.target.colaborar.value; //radio
  const animal = event.target.animal.value;       //select
  const comments = event.target.comments.value;   //textarea
  const accept = event.target.accept.checked;     //checkbox


  let errores = "";

  // Lógica de validación
  if (fname.length < 3 || fname.length > 30) { //Nombre
    console.log("Por favor, el nombre debe tener entre 3 y 30 caracteres");
    errores += "Por favor, el tamaño para el nombre es entre 3 y 30 caracteres\n";
  }

  if (lname.length < 3 || lname.length > 30) {
    console.log("Por favor, el apellido debe tener entre 3 y 30 caracteres");
    errores += "Por favor, el apellido debe tener entre 3 y 30 caracteres\n";
  }

  if ((!email.endsWith(".com") && !email.endsWith(".es")) || !email.includes("@")) {
    console.log("Error validación, introduce un email con dominio .com o .es: ");
    errores += "Error validación, introduce un email con dominio .com o .es:\n";
  }

  if (tlf.length < 8 || tlf.length > 15){
    console.log("Error validación");
    errores += "Error validación\n";
  }

  if (colaborar == "") {
    console.log("Selecciona, por favor, cómo quieres colaborar con nosotros");
    errores += "Selecciona, por favor, cómo quieres colaborar con nosotros\n";
  }

  if (!accept) {
    console.log("Por favor, acepta los términos legales");
    errores += "Por favor, acepta los términos legales\n";
  }
  console.log(errores);

  // Comprobar si hay errores
  if (errores.length != 0) {
    alert(errores);
  }
  else {
    //Enviar formulario
    alert("Gracias, nos pondremos en contacto contigo muy pronto");
    event.target.submit();
  }
});