
document.getElementById('boton').onclick = function () {
console.log("Gracias Profesor Daniel Rinaldi");
document.getElementById("demo").innerHTML = "Muchas Gracias, por visitar Curriculum Vitae_Proyecto Ticmas";
}

document.getElementById('boton_color').addEventListener('click', function () {
    document.body.style.backgroundColor = 'cadetblue';
});

document.getElementById('boton_default').addEventListener('click', function () {
    document.body.style.backgroundColor = 'blanchedalmond';
});
