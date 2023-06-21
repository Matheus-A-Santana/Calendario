const date = new Date();

const renderCalendario = ()=>{
    
date.setDate(1);

const mesesDias = document.querySelector('.dias');

const lastDias = new Date(date.getFullYear(),
date.getMonth() + 1, 0).getDate();

const prevLastDay = new Date(date.getFullYear(),
date.getMonth(), 0).getDate();

const firstDiaIndex = date.getDay();

const lastDayIndex = new Date(date.getFullYear(),
date.getMonth() + 1, 0).getDay(); 

const nextDias = 7 - lastDayIndex - 1;

const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const semana = [
    'Domingo',
    'Segunda - feira',
    'Terça - feira',
    'Quarta - feira',
    'Quinta - feira',
    'Sexta - feira',
    'Sábado'
];


document.querySelector('.date h1').innerHTML =
meses[date.getMonth()];

document.querySelector('.date p').innerHTML =
semana[new Date().getDay()] +", "+ new Date().getDate() + ",  "+ 
date.getFullYear();

let dias = "";

for(let x = firstDiaIndex; x > 0; x-- ){
    dias += `<div class="prev-date">${prevLastDay - x + 1}</div>`; 
}

for(let i = 1; i <= lastDias; i++){
    if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() 
    && date.getFullYear() === new Date().getFullYear()){
        dias += `<div class="today">${i}</div>`;
    }
    else{
        dias += `<div>${i}</div>`;
    }

}

for(let j = 1; j <= nextDias; j++){
    dias += `<div class="next-date">${j}</div>`;
    mesesDias.innerHTML = dias;
}
}


document.querySelector('.left-prev').addEventListener('click', () =>{
    date.setMonth(date.getMonth() - 1)
    renderCalendario();
});

document.querySelector('.right-prev').addEventListener('click', () =>{
    date.setMonth(date.getMonth() + 1)
    renderCalendario();
});

renderCalendario()