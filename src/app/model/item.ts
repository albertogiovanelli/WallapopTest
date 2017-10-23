export class Item {
    private title : string;
    private description : string;
    private price : string;
    private email : string;
    private image : string;

    constructor(title : string, description : string, price : string, email : string, image : string){
        this.title = title;
        this.description = description;
        this.price = price;
        this.email = email;
        this.image = image;
    }

    getTitle() : string {
        return this.title;
    }

    getDescription() : string {
        return this.description;
    }

    getPrice() : string {
        return this.price;
    }

    getEmail() : string {
        return this.email;
    }
}
