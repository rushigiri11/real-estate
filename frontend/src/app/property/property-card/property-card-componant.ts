import { Component } from "@angular/core";

@Component(
{
    selector:'app-property-card',
    templateUrl:'property-card-componant.html',
    styleUrl:'property-card-componant.css'
}

)
export class PropertyCardComponant{

    Property : any={
        "Id":1,
        "Name":"Anand Vila",
        "Type" : "House",
        "Price": 120000
    }

}