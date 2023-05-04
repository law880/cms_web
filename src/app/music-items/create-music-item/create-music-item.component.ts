import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'mi-create-music-item',
  templateUrl: './create-music-item.component.html',
  styleUrls: ['./create-music-item.component.sass']
})
export class CreateMusicItemComponent {
	constructor(public activeModal: NgbActiveModal) {}
}
