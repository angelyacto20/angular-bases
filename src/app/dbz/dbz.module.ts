import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListGenComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/addCharacters/addCharacters.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainPageComponent,ListGenComponent,AddCharacterComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[MainPageComponent],
})
export class DbzModule { }
