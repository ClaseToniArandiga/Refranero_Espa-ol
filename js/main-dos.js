
const form = document.createElement('form');
form.id = 'refranForm';

const mainCantidad = document.createElement('div');
mainCantidad.id = 'mainCantidad';

const label = document.createElement('label');
label.for = 'cantidad';
label.textContent = 'Cantidad de refranes a mostrar: ';
const input = document.createElement('input');
input.type = 'number';
input.id = 'cantidad';
input.name = 'cantidad';
input.min = '1';
input.max = '10';
input.value = '1';
form.appendChild(label);
const button = document.createElement('button');
button.id = 'mostrarRefraneros';
button.textContent = 'Mostrar Refranes';
form.appendChild(button);
const resultadoDiv = document.createElement('div');
resultadoDiv.id = 'resultado';

mainCantidad.appendChild(input);
mainCantidad.appendChild(button);
form.appendChild(mainCantidad);
document.body.appendChild(form);

form.appendChild(resultadoDiv); 

const refranes = [
    "A buen hambre no hay mal pan.",
    "A caballo regalado no le mires el diente.",
    "A mal tiempo, buena cara.",
    "Al que madruga, Dios le ayuda.",
    "Más vale tarde que nunca.",
    "No hay mal que por bien no venga.",
    "Ojos que no ven, corazón que no siente.",
    "Perro ladrador, poco mordedor.",
    "Quien mucho abarca, poco aprieta.",
    "Zapatero a tus zapatos."
];  

const refranContainer = document.getElementById('resultado');
const generarRefranBtn = document.getElementById('mostrarRefraneros');
const cantidad = document.getElementById('cantidad');
generarRefranBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(cantidad.value);
    refranContainer.innerHTML = ''; // Limpiar resultados anteriores
    for (let i = 0; i < cantidad.value; i++) {
        const randomIndex = Math.floor(Math.random() * refranes.length);
        console.log(randomIndex);
        refranContainer.innerHTML += `<p class="parrafo">${refranes[randomIndex]}</p>`;
    }           
});



