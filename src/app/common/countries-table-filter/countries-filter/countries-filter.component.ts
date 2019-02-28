import { Component, Input, OnInit } from '@angular/core';
import { CountriesTableFilterComponent } from '../countries-table-filter.component';

@Component({
    selector: 'app-countries-filter',
    templateUrl: './countries-filter.component.html',
    styleUrls: ['./countries-filter.component.css']
})

export class CountriesFilterComponent implements OnInit {

    @Input() data: any[];
    @Input() updateFilterData: Function;

    filterData: any[] = [];
    filterObj = {region: undefined, name: undefined};
    regions: Set<string>;

    constructor(private countriesTableFilterComponent: CountriesTableFilterComponent) { }

    ngOnInit() {
        this.filterData = this.data;
        this.regions = new Set(this.data.map(d => d.region));
    }

    filter() {
        let filterData = this.filterData;

        if(this.filterObj.region || this.filterObj.region === "")
            filterData = filterData.filter(d => d.region === this.filterObj.region);

        if(this.filterObj.name)
            filterData = filterData.filter(d => d.name.toLowerCase().includes(this.filterObj.name.toLowerCase()));

        this.updateFilterData(this.countriesTableFilterComponent, filterData);
    }

    clearFilter() {
        this.filterObj = {region: undefined, name: undefined};
        this.filterData = this.data;
        this.updateFilterData(this.countriesTableFilterComponent, this.filterData);
    }

}
