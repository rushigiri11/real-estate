import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PropertyCardComponant } from "./property/property-card/property-card-componant";
import { PropertyListComponent } from "./property/property-list/property-list.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PropertyCardComponant, PropertyListComponent, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   title = 'realestate';
}
