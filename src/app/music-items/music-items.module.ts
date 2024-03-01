import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateMusicItemComponent } from './create-music-item/create-music-item.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CreateMusicItemComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent
  ]
})
export class MusicItemsModule { }
