import { Component, Inject, LOCALE_ID } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateMusicItemComponent } from '../create-music-item/create-music-item.component';
import { FullMusicItemDto } from '../music-item.model';
import { ToastService } from 'src/app/core/toast.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'mi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
	constructor(private modalService: NgbModal,
		private toastService: ToastService,
		@Inject(LOCALE_ID) private locale: string) {}
	
	openCreateMIModal() {
		const modalRef = this.modalService.open(CreateMusicItemComponent);
		modalRef.result
		.then((value: FullMusicItemDto | string) => {
			if (typeof value !== "string") { // not a Close button click
				this.handleCreationSuccess(value);
			}
		}, (error: Error) => {
			this.handleError(error);
		});
	}

	handleCreationSuccess(mi: FullMusicItemDto) {
		// show a success toast
		console.log(mi);
		//format date
		const createdFormattedDate = formatDate(mi.created, 'dd MMM yyyy hh:mm:ss', this.locale);
		this.toastService.show("Success!", `Music Item ${mi.name} was created at ${createdFormattedDate}`, 5000, "bg-success text-light");
	}

	handleError(error: Error) {
		console.error(error);
		this.toastService.show("Something went wrong.", "Please try again later", 5000, "bg-danger text-light");
	}
}
