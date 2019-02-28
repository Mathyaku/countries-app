import { Component, Input } from '@angular/core';
import { FavoriteService } from 'src/app/countries/favorite/favorite.service';
import { CountriesDialogComponent } from '../countries-dialog/countries-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-countries-table',
    templateUrl: './countries-table.component.html',
    styleUrls: ['./countries-table.component.css']
})

export class CountriesTableComponent {

    constructor(private favoriteService: FavoriteService,
        public dialog: MatDialog) { }

    @Input() public dataSource: any[];
    displayedColumns: string[] = ['favorite', 'flag', 'name', 'nativeName', 'region', 'info'];

    addOrRemoveFavorite(element)
    {
        this.favoriteService.verifyAddOrRemove(element);
    }

    isElementOnFavoriteList(element)
    {
        return this.favoriteService.favorites.map(el => el.name).indexOf(element.name) > -1;
    }

    openCountryInfoDialog(element)
    {
        this.dialog.open(CountriesDialogComponent, {
            width: 'auto',
            data: element
          });
    }
}
