import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedBtnComponent} from './components/shared-btn/shared-btn.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FilterPipe} from './pipes/filter.pipe';
import {ChangeColorByValueDirective} from './directives/change-color-by-value.directive';
import {DropdownComponent} from './components/dropdown/dropdown.component';

@NgModule({
  declarations: [
    DropdownComponent,
    SharedBtnComponent,
    FilterPipe,
    ChangeColorByValueDirective
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SharedBtnComponent,
    DropdownComponent,
    FilterPipe
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule {

}
