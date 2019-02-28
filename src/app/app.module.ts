import { NgModule } from '@angular/core';

// Imports
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

// Declarations
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { HomeComponent } from './countries/home/home.component';
import { FavoriteComponent } from './countries/favorite/favorite.component';
import { CountriesTableComponent } from './common/countries-table-filter/countries-table/countries-table.component';
import { CountriesFilterComponent } from './common/countries-table-filter/countries-filter/countries-filter.component';
import { CountriesTableFilterComponent } from './common/countries-table-filter/countries-table-filter.component';

// Providers
import { ErrorHandlerService } from './common/services/errorHandler.service';
import { NotificationService } from './common/services/notification.service';
import { CountriesService } from './countries/countries.service';
import { FavoriteService } from './countries/favorite/favorite.service';

// EntryComponents
import { CountriesDialogComponent } from './common/countries-table-filter/countries-dialog/countries-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    HomeComponent,
    FavoriteComponent,
    CountriesTableComponent,
    CountriesFilterComponent,
    CountriesTableFilterComponent,
    CountriesDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    ErrorHandlerService, 
    NotificationService, 
    CountriesService,
    FavoriteService,
    CountriesTableFilterComponent
  ],
  entryComponents: [
    CountriesDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
