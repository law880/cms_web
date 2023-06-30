import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateMusicItemComponent } from '../create-music-item/create-music-item.component';
import { MusicItem } from '../music-item.model';
import { ToastService } from 'src/app/core/toast.service';

@Component({
  selector: 'mi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
	constructor(private modalService: NgbModal,
		private toastService: ToastService) {}
	
	openCreateMIModal() {
		const modalRef = this.modalService.open(CreateMusicItemComponent);
	}

	handleCreationSuccess(mi: MusicItem) {
		// show a success toast
		this.toastService.show("Success!", `Music Item ${mi.name} was created at ${mi.created} (ID ${mi.id})`, 5000, "bg-success text-light");
	}

	handleError(error: Error) {
		this.toastService.show("Something went wrong.", "Please try again later", 5000, "bg-danger text-light");
	}
}
