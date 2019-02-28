import { Component, OnDestroy, OnInit } from '@angular/core';
import { FavoriteService } from './favorite.service';
import { ISubscription } from "rxjs/Subscription";

@Component({
    selector: 'app-favorite',
    templateUrl: './favorite.component.html',
    styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit, OnDestroy {

    data: any[] = [];
    favoritesSubscription: ISubscription;

    constructor(private favoriteService: FavoriteService) { 
        this.favoritesSubscription = this.favoriteService.favoriteObservable.subscribe( (favorites:any) => {
            this.data = favorites;
        });
    }

    ngOnInit() {
        this.data = this.favoriteService.favorites.slice();
    }

    ngOnDestroy() {
        this.favoritesSubscription.unsubscribe();
    }
}
