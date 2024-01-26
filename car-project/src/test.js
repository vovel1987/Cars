

models=[
    {
     ferrari1:{
        titleModel:'Portofino',
        fahrzeuge:2,
        imgModel:'image',
        id:1,
        modelId:1,
        autos:[
            {
                kennzeichen:'KS-Y-10',
                name:'Schmidt',
                vorname:'Dennis',
                date:'11.09.2023',
                vin:'ZRKJKHKJHJDSJH12',
                besitzer:'Test Gmbh',
                id:1,
                modelId:1,
            },
            {
                kennzeichen:'KS-D-5',
                name:'Schiller',
                vorname:'Johan',
                date:'11.09.2022',
                vin:'ZRKALDOBNET8995',
                besitzer:'Test2 Gmbh',
                id:2,
                modelId:2,
            },
        

        ]
     }
     

     
    },
    {
       ferrari2:{
        titleModel:'F8 Spider',
        fahrzeuge:3,
        imgModel:'image',
        id:2,
        modelId:2,

        autos:[
            {
                kennzeichen:'KS-F-1',
                name:'Vogel',
                vorname:'Petr',
                date:'12.05.2023',
                vin:'ZWROPRKJSDA98SS',
                besitzer:'Test4 Gmbh',
                id:1,
                modelId:2,
            },
            {
                kennzeichen:'KS-F-5',
                name:'Scholz',
                vorname:'Sven',
                date:'11.07.2022',
                vin:'ZRKALDKJLXOEJET8995',
                besitzer:'Test4 Gmbh',
                id:2,
                modelId:2,
            },
            {
                kennzeichen:'KS-F-7',
                name:'Westmeier',
                vorname:'John',
                date:'11.09.2021',
                vin:'ZRKA4654DOBNET8995',
                besitzer:'Test5 Gmbh',
                id:3,
                modelId:2,
            },
        

        ]

       }
    },
    {
      ferrari3:{
        titleModel:'Roma',
        fahrzeuge:2,
        imgModel:'image',
        id:3,
        modelId:3,
        autos:[
            {
                kennzeichen:'KS-R-1',
                name:'Vellmann',
                vorname:'Robert',
                date:'12.05.2024',
                vin:'ZWROP456RKJSDA98SS',
                besitzer:'Test6 Gmbh',
                id:1,
                modelId:3,
            },
            {
                kennzeichen:'KS-R-5',
                name:'Rantel',
                vorname:'Sergej',
                date:'11.01.2024',
                vin:'ZRKALDKJLXOEJET1234',
                besitzer:'Test7 Gmbh',
                id:2,
                modelId:3,
            },

        ]

      }
    }
]

const cars = models.map((item) => item)
const carsFilter =cars.find((car) => car.id === 2)
console.log(carsFilter);
console.log(cars);
