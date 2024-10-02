import asdjson from '../../numeros-melonie.json'

interface Comprador {
    nombre: string;
    instagram: string;
}

interface Numeros {
    numero: number;
    comprador: Comprador;
    comprado: boolean;
    ganador: boolean;
}

interface Premios {
    premio: string;
    cantidad: number;
    descripcion: string;
    donador: string;
}

export const premiosMelonie: Premios[] = [
    {
        premio: "Landing Page",
        cantidad: 1,
        descripcion: "Creación de página web estática o 'informativa' personalizada, la cual puede ser transferible y para cuando lo necesite.",
        donador: "Rubik Apps"
    },{
        premio: "2 Vinos",
        cantidad: 3,
        descripcion: "3 Premios de dos vinos cada uno para quedar eposh",
        donador: "Tito"
    },{
        premio: "Six pack cervezas",
        cantidad: 1,
        descripcion: "Six pack de cervezas pa' pasar la sed de este pinche calor",
        donador: "Sujey"
    },{
        premio: "Frazadas de 2 plazas",
        cantidad: 2,
        descripcion: "Frazadas hechas en la legendaria fábrica Mincha Sur",
        donador: "Mincha Sur"
    },{
        premio: "Freestyle lateral o cintillo de trenzas",
        cantidad: 1,
        descripcion: "Las trenzas más sarpadas de lo hermida",
        donador: "Sujey"
    },{
        premio: "Kuchen familiar de Nuez",
        cantidad: 1,
        descripcion: "Rico kuchen fresquito, hecho con mucho amor",
        donador: "Hornearte"
    },{
        premio: "Blanqueamiento dental",
        cantidad: 1,
        descripcion: "Sesión de blanqueamiento dental, el cual consiste en ir al laboratorio, crearán cubetas de sus dientes y entregarán jeringas para blanquear en casa",
        donador: "Chumi"
    },{
        premio: "Sesión de masoterapia",
        cantidad: 1,
        descripcion: "Sesión de masoterapia con Carlos Gonzales (Con requisitos y condiciones)",
        donador: "Carlos Gonzales"
    },{
        premio: "Bolsa con dulces",
        cantidad: 1,
        descripcion: "Bolsa con variados dulces, aprox 15k en dulces",
        donador: "Vale"
    },{
        premio: "Sesión de masoterapia",
        cantidad: 1,
        descripcion: "Una sesión de 40 minutos de masajes descontracturantes o relajantes, con o sin ventosas",
        donador: "Francisca Letelier"
    },{
        premio: "Conjunto de Aros y Cadena",
        cantidad: 1,
        descripcion: "Conjunto de aros y cadena de plata",
        donador: "Macarena"
    },{
        premio: "Docena de donas",
        cantidad: 1,
        descripcion: "Ricas donas donadas :v",
        donador: "Jeanmeyli"
    }
]

export const numerosTabla: Numeros[] = asdjson;