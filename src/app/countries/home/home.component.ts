import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    constructor( private countriesService: CountriesService) { }

    data: any[] = [];

    ngOnInit() {
        this.countriesService.getCountries()
        .then( countries => {
            if(countries.length > 0)
                this.data = countries;
        });
    }
}
