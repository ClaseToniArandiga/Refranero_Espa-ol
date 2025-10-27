// 10 refraneros como frases de cenco palabraas en español
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


