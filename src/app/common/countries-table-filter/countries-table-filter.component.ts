import { Component, Input, OnChanges } from '@angular/core';

@Component({
    selector: 'app-countries-table-filter',
    templateUrl: './countries-table-filter.component.html',
    styleUrls: ['./countries-table-filter.component.css']
})

export class CountriesTableFilterComponent implements OnChanges{

    constructor() { }

    @Input() public data: any[];
    filterData: any[] = [];

    ngOnChanges() {
        this.filterData = this.data.slice();
    }

    updateFilterData(_this, newData)
    {
        _this.filterData = newData;
    }

}
