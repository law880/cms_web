import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMusicItemComponent } from './create-music-item/create-music-item.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    CreateMusicItemComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class MusicItemsModule { }
