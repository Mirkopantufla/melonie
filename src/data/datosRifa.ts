import numerosMelonie from '../../numeros-melonie.json'

export interface Comprador {
    nombre: string;
    instagram: string;
}

export interface Numeros {
    numero: number;
    comprador: Comprador;
    ocupado: boolean;
    ganador: boolean;
}

export interface Premios {
    premio: string;
    cantidad: number;
    descripcion: string;
    donador: string;
}

export interface Ganadores {
    comprador: Comprador;
    numero: number;
    premio: string;
}

export const premiosMelonie: Premios[] = [
    {
        premio: "Landing Page",
        cantidad: 1,
        descripcion: "Creación de página web estática o 'informativa' personalizada, la cual puede ser transferible y para cuando lo necesite.",
        donador: "Rubik Apps"
    }, {
        premio: "2 Vinos",
        cantidad: 3,
        descripcion: "3 Premios de dos vinos cada uno, para acompañar el almuerzo",
        donador: "Tito"
    }, {
        premio: "18 pack cervezas",
        cantidad: 1,
        descripcion: "Pack de 18 cervezas para pasar la sed de este pinche calor",
        donador: "Camila Sujey"
    }, {
        premio: "Frazada de 2 plazas",
        cantidad: 2,
        descripcion: "2 Premios de 1 frazada hecha en la legendaria fábrica Mincha Sur",
        donador: "Mincha Sur"
    }, {
        premio: "Freestyle lateral o cintillo de trenzas",
        cantidad: 1,
        descripcion: "Las trenzas y freestyle más sarpadas de lo hermida",
        donador: "Camila Sujey"
    }, {
        premio: "Kuchen familiar de Nuez",
        cantidad: 1,
        descripcion: "Rico kuchen fresquito, hecho con mucho amor",
        donador: "Hornearte"
    }, {
        premio: "Blanqueamiento dental",
        cantidad: 1,
        descripcion: "Sesión de blanqueamiento dental, el cual consiste en ir al laboratorio, crearán cubetas de sus dientes y entregarán jeringas para blanquear en casa",
        donador: "Chumi"
    }, {
        premio: "Sesión de masoterapia Carlos",
        cantidad: 1,
        descripcion: "Sesión de masoterapia con Carlos Gonzales (Con requisitos y condiciones)",
        donador: "Carlos Gonzales"
    }, {
        premio: "Bolsa con 15k en dulces",
        cantidad: 1,
        descripcion: "Bolsa con variados dulces, aprox 15k en dulces",
        donador: "Valentina Castro"
    }, {
        premio: "Sesión de masoterapia Francisca",
        cantidad: 1,
        descripcion: "Una sesión de 40 minutos de masajes descontracturantes o relajantes, con o sin ventosas",
        donador: "Francisca Letelier"
    }, {
        premio: "Conjunto de Aros y Cadena",
        cantidad: 1,
        descripcion: "Conjunto de aros y cadena de plata",
        donador: "Maca Paz Thomas"
    }, {
        premio: "Docena de donas",
        cantidad: 1,
        descripcion: "Ricas donas donadas :v para pasar una dulce tarde",
        donador: "Jeanmeyli"
    }, {
        premio: "Juego de dos toallas Doral",
        cantidad: 1,
        descripcion: "Juego de 2 toallas de baño nuevas de color violeta",
        donador: "Nena Painevilú"
    }, {
        premio: "Set de 6 vasos nuevitos",
        cantidad: 1,
        descripcion: "Pack de 6 vasos krea de los tipicos pal juguito y sus copetes",
        donador: "Nena Painevilú"
    }
]

export const ganadoresRifa: Ganadores[] = [
    {
        comprador: {
            nombre: "Ximena Carcamo",
            instagram: "ximenacarcamonunez"
        },
        numero: 3,
        premio: "Docena de donas"
    },
    {
        comprador: {
            nombre: "Nena Painevilú",
            instagram: "nenipv"
        },
        numero: 19,
        premio: "Frazada de 2 Plazas"
    },
    {
        comprador: {
            nombre: "Washington Pasten",
            instagram: "tito_opc"
        },
        numero: 34,
        premio: "Landing Page"
    },
    {
        comprador: {
            nombre: "Catalina Pasten",
            instagram: "catalina_pastenh"
        },
        numero: 47,
        premio: "2 Vinos"
    },
    {
        comprador: {
            nombre: "Aaron Morales",
            instagram: "aa.morales_"
        },
        numero: 59,
        premio: "Frazada de 2 Plazas"
    },
    {
        comprador: {
            nombre: "Alexa Mendez",
            instagram: "sonder.yep"
        },
        numero: 60,
        premio: "2 Vinos"
    },
    {
        comprador: {
            nombre: "Aaron Morales",
            instagram: "aa.morales_"
        },
        numero: 61,
        premio: "Bolsa con 15k de dulces"
    },
    {
        comprador: {
            nombre: "Sebastian Pasten",
            instagram: "_chevipl"
        },
        numero: 94,
        premio: "18 Pack Cervezas"
    },
    {
        comprador: {
            nombre: "Alberto Morales",
            instagram: "still.bet0"
        },
        numero: 104,
        premio: "Set de 6 vasos de vidrio"
    },
    {
        comprador: {
            nombre: "Pedro Proaño",
            instagram: "recklessshadow"
        },
        numero: 127,
        premio: "Conjunto aros y cadena plata"
    },
    {
        comprador: {
            nombre: "Gladys Navarrete",
            instagram: "navarretegladys"
        },
        numero: 146,
        premio: "Blanqueamiento Dental"
    },
    {
        comprador: {
            nombre: "Yerko Pasten",
            instagram: "yerkop22"
        },
        numero: 149,
        premio: "Juego de toallas doral"
    },
    {
        comprador: {
            nombre: "Gladys Navarrete",
            instagram: "navarretegladys"
        },
        numero: 150,
        premio: "Sesión masoterapia Carlos"
    },
    {
        comprador: {
            nombre: "Amanda Eng Cancino",
            instagram: "aeng_089"
        },
        numero: 153,
        premio: "Freestyle lateral o cintillo de trenzas"
    },
    {
        comprador: {
            nombre: "Francisca Uribe",
            instagram: "fran_up84"
        },
        numero: 168,
        premio: "Kuchen familiar de Nuez"
    },
    {
        comprador: {
            nombre: "Rocio Pastén",
            instagram: "pasten.d.rocio"
        },
        numero: 182,
        premio: "Sesión masoterapia Francisca"
    },
    {
        comprador: {
            nombre: "Carla Gutierrez",
            instagram: "carlitayoya"
        },
        numero: 193,
        premio: "2 Vinos"
    },
]

export const numerosTabla: Numeros[] = structuredClone(numerosMelonie);