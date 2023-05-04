import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateMusicItemComponent } from '../create-music-item/create-music-item.component';

@Component({
  selector: 'mi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
	constructor(private modalService: NgbModal) {}
	
	openCreateMIModal() {
		const modalRef = this.modalService.open(CreateMusicItemComponent);
	}
}
