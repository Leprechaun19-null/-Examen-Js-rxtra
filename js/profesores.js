document.addEventListener("DOMContentLoaded",  main())
function main(){
const elementonombre=document.getElementById("p-nombre");
const elementodni=document.getElementById("p-dni");
const elementotelefono=document.getElementById("p-telefono");
const elementocourso=document.getElementById("p-curso");
const botonenviar= document.getElementById("btn-form-profesor");
botonenviar.addEventListener(onclick,  registrar());
function registrar(){
    elementonombre.checkvalidity();
    elementodni.checkvalidity();
    elementotelefono.checkvalidity();
    elementocourso.checkvalidity();
    localStorage.setItem("id", 1)
    localStorage.setItem("nombre", elementonombre);
    localStorage.setItem("dni", elementodni);
    localStorage.setItem("telefono", elementotelefono);
    localStorage.setItem("curso", elementocourso);
    document.createElement("tr");
    document.createElement("td");
    document.createElement("td");
    document.createElement("td");
    document.createElement("td");
    document.createElement("button");
    document.createElement("button");
    document.createTextNode("Nombre");
    document.createTextNode("DNI");
    document.createTextNode("Telèfono");
    document.appendChild("tr");
    document.appendChild("tr");
    document.appendChild("tr");



}
}