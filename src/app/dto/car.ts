export class Car {
    id: number;
    brand: string ;
    model: string ;
    year: number ;
    colour: string ;
    kilometers: number ;
    price: number ;
    rating: number ; 
    imgUrl: string;
    
    constructor(id: number, brand: string, model: string, year: number, colour: string, kilometers: number, price: number, rating: number, imgUrl: string){
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.colour = colour;
        this.kilometers = kilometers;
        this.price = price;
        this.rating = rating;
        this.imgUrl = imgUrl;
    }


}
