// js/datos.js

export const ingredientes = [
{
    id: 1,
    nombre: "Pollo",
    categoria: "Proteínas",
    kcal: 165,
    descripcion: "Pechuga magra rica en proteínas",
    cantidadCasa: "850 g en casa",
    proteinas: 31,
    grasas: 3.6,
    carbohidratos: 0
},
{
    id: 2,
    nombre: "Lentejas",
    categoria: "Legumbres",
    kcal: 116,
    descripcion: "Legumbre rica en fibra y hierro",
    cantidadCasa: "1,2 kg en casa",
    proteinas: 9,
    grasas: 0.4,
    carbohidratos: 20
},
{
    id: 3,
    nombre: "Arroz blanco",
    categoria: "Cereales",
    kcal: 130,
    descripcion: "Cereal energético de base",
    cantidadCasa: "2 kg en casa",
    proteinas: 2.7,
    grasas: 0.3,
    carbohidratos: 28
},
{
    id: 4,
    nombre: "Cereales",
    categoria: "Cereales",
    kcal: 389,
    descripcion: "Hierro para el desayuno",
    cantidadCasa: "Agotado",
    proteinas: 7,
    grasas: 1.2,
    carbohidratos: 75
},
{
    id: 5,
    nombre: "Tomate",
    categoria: "Frescos",
    kcal: 18,
    descripcion: "Fresco, antioxidante",
    cantidadCasa: "500 g en casa",
    proteinas: 0.9,
    grasas: 0.2,
    carbohidratos: 3.9
},
{
    id: 6,
    nombre: "Yogur",
    categoria: "Lácteos",
    kcal: 61,
    descripcion: "Lácteo probiótico",
    cantidadCasa: "4 unidades",
    proteinas: 3.5,
    grasas: 3.3,
    carbohidratos: 4.7
},
{
    id: 7,
    nombre: "Pasta",
    categoria: "Cereales",
    kcal: 350,
    descripcion: "Pasta de trigo duro",
    cantidadCasa: "1 kg en casa",
    proteinas: 12,
    grasas: 1.5,
    carbohidratos: 70
},
{
    id: 8,
    nombre: "Limón",
    categoria: "Frescos",
    kcal: 29,
    descripcion: "Cítrico rico en vitamina C",
    cantidadCasa: "3 unidades",
    proteinas: 1.1,
    grasas: 0.3,
    carbohidratos: 9
},
{
    id: 9,
    nombre: "Comino",
    categoria: "Especias",
    kcal: 375,
    descripcion: "Especias aromáticas molidas",
    cantidadCasa: "1 tarro",
    proteinas: 17.8,
    grasas: 22.3,
    carbohidratos: 44.2
},
{
    id: 10,
    nombre: "Ajo",
    categoria: "Frescos",
    kcal: 149,
    descripcion: "Bulbo aromático esencial",
    cantidadCasa: "2 cabezas",
    proteinas: 6.4,
    grasas: 0.5,
    carbohidratos: 33
}
];

export const recetas = [
{
    id: 1,
    titulo: "Pasta carbonara económica",
    tiempo: "15 min",
    costeRacion: 1.20,
    kcal: 380,
    dificultad: "Baja",
    etiquetas: ["Económicas", "Rápidas"],
    descripcion: "Deliciosa pasta rápida adaptada al presupuesto.",
    ingredientesIds: [7, 10] // Pasta y Ajo
},
{
    id: 2,
    titulo: "Pollo salteado estilo wok",
    tiempo: "15 min",
    costeRacion: 1.10,
    kcal: 380,
    dificultad: "Baja",
    etiquetas: ["Económicas", "Saludables"],
    descripcion: "Pechuga magra con vegetales salteados.",
    ingredientesIds: [1, 5, 10] // Pollo, Tomate y Ajo
},
{
    id: 3,
    titulo: "Lentejas con limón y comino",
    tiempo: "8-10 min",
    costeRacion: 0.95,
    kcal: 290,
    dificultad: "Baja",
    etiquetas: ["Económicas", "Saludables"],
    descripcion: "Legumbre rica en hierro con toque cítrico.",
    ingredientesIds: [2, 8, 9, 10] // Lentejas, Limón, Comino y Ajo
},
{
    id: 4,
    titulo: "Arroz salteado estilo wok",
    tiempo: "15 min",
    costeRacion: 1.10,
    kcal: 380,
    dificultad: "Baja",
    etiquetas: ["Rápidas"],
    descripcion: "Arroz blanco salteado con ingredientes de despensa.",
    ingredientesIds: [3, 5] // Arroz blanco y Tomate
}
];