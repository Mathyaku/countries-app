import { Injectable } from '@angular/core';
import { NotificationService } from '../../common/services/notification.service';
import { Subject } from 'rxjs';

@Injectable()
export class FavoriteService {

  constructor(
    private notificationService: NotificationService
  ) {}

  favorites: any[] = [];
  favoriteObservable = new Subject();

  add(element){
    this.favorites.push(element);
    this.notificationService.notifyMessage('success', 'The Country ' + element.name + 'was added of favorites.');
    this.favoriteObservable.next(this.favorites);
  }

  remove(element, index){
    this.favorites.splice(index, 1);
    this.notificationService.notifyMessage('warning', 'The Country ' + element.name + 'was removed of favorites.');
    this.favoriteObservable.next(this.favorites);
  }

  verifyAddOrRemove(element)
  {
    const index = this.favorites.map(e => e.name).indexOf(element.name);
    if(index > -1)
        this.remove(element, index);
    else
        this.add(element);
  }

}
