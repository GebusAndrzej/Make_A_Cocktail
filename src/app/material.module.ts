import { NgModule } from '@angular/core';

import { MatButtonModule, MatInputModule } from '@angular/material'
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select'


@NgModule({
    imports: [
        MatButtonModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonToggleModule,
        MatSelectModule

    ],
    exports: [
        MatButtonModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatButtonToggleModule,
        MatSelectModule
    ]
  })
  export class MaterialModule {}