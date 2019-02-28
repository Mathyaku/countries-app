import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
    selector: 'app-countries-dialog',
    templateUrl: './countries-dialog.component.html',
    styleUrls: ['./countries-dialog.component.css']
})

export class CountriesDialogComponent implements OnInit{

    constructor(
        public dialogRef: MatDialogRef<CountriesDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data
    ) { }

    displayedColumns: string[] = ['information','value'];
    keys: string[] = ['name', 'nativeName', 'region','subregion', 'capital', 'population', 'area'];
    dataSource: any[];

    ngOnInit() {
        this.dataSource = this.keys.map((key) => {
            return { information: key, value: this.data[key]};
        })
    }

    close(): void {
        this.dialogRef.close();
    }
}
