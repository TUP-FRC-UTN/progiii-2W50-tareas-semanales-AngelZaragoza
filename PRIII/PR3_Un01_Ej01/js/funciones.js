function validarNro() {
  let DNI = document.getElementById("txtDNI");
  if(isNaN(DNI.value)) {
    alert('Debe ingresar un valor numérico');
    DNI.focus();
    // document.getElementById("txtDNI").focus();
    return false;
  }
  return true;
}