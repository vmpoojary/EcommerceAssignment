

export class data{
  FeatureLists:Commodity[]=[{
    id:1,
    name:"Royal Enfield"
  },
  {id:2,
  name:'Bajaj'
  }
];

CategoryList:category[]=[{category:'TVS'},
{category:'YAMAHA'},
{category:'ROYAL ENFIELD'},
{category:'HERO'},
{category:'HONDA'},
{category:'BAJAJ'},
{category:'SUZUKI'},
{category:'JAWA'},
{category:'KTM'},
{category:'HARLEY DAVIDSON'}
]



ProductList=[{
  id:1,
  name:"Bike1",
  Category:"TVS",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},
{
  id:2,
  name:"Bike2",
  Category:"YAMAHA",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},
{
  id:3,
  name:"Bike3",
  Category:"ROYAL ENFIELD",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},
{
  id:4,
  name:"Bike4",
  Category:"HERO",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},
{
  id:5,
  name:"Bike5",
  Category:"HONDA",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},
{
  id:6,
  name:"Bike6",
  Category:"BAJAJ",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},
{
  id:7,
  name:"Bike7",
  Category:"SUZUKI",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},
{
  id:8,
  name:"Bike8",
  Category:"JAWA",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},
{
  id:9,
  name:"Bike9",
  Category:"KTM",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},
{
  id:10,
  name:"Bike10",
  Category:"HARLEY DAVIDSON",
  desc:'sdsdjdsdsjs  sdsjdjsjdsjdjsd jsdjsjdjsdj jsdjsjdsdjsd'
},

]

}


export interface Commodity

{
  id:number;
  name:string;
}

export interface category
{
  category:string
}

export interface product{
  id: number;
  name: string;
  Category:string;
  desc: string;
}
