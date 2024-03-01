import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateMusicItemDto } from '../music-item.model';
import { MusicItemsService } from '../music-items.service';

@Component({
  selector: 'mi-create-music-item',
  templateUrl: './create-music-item.component.html',
  styleUrls: ['./create-music-item.component.sass']
})
export class CreateMusicItemComponent {
	formSubmitted = false;

  createMiForm = this.fb.group({
    name: ['', Validators.required],
    shortDescription: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]],
    longDescription: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(2000)]],
    size: ['', Validators.min(1)],
    instrument: ['', Validators.required]
  });

	constructor(
    public activeModal: NgbActiveModal,
		private fb: FormBuilder,
    private musicItemsService: MusicItemsService
  ) {}

  get name() { return this.createMiForm.get('name'); }

  get shortDesc() { return this.createMiForm.get('shortDescription'); }

  get longDesc() { return this.createMiForm.get('longDescription'); }

  get size() { return this.createMiForm.get('size'); }

  get instrument() { return this.createMiForm.get('instrument'); }

  processCancellation(reason: string) {
    this.activeModal.close();
  }

  submitForm(): void {
    if(this.formSubmitted !== true && this.createMiForm.valid) {
      this.formSubmitted = true;
      //create model from entered values
      const newMiModel = new CreateMusicItemDto(
        this.name?.value!, 
        this.shortDesc?.value!, 
        this.longDesc?.value!, 
        Number(this.size?.value!),
        this.instrument?.value!
      );
      console.log(newMiModel);
      //send request
      this.musicItemsService.create(newMiModel)
      .subscribe(newMi => {
        this.activeModal.close(newMi);
      }, error => {
        this.activeModal.dismiss(error);
      });
    }
  }
}
