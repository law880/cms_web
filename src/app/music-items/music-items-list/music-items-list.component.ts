import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FullMusicItemDto } from '../music-item.model';
import { MusicItemsService } from '../music-items.service';

@Component({
  selector: 'app-music-items-list',
  templateUrl: './music-items-list.component.html',
  styleUrls: ['./music-items-list.component.sass']
})
export class MusicItemsListComponent {
  musicItems: FullMusicItemDto[] = [];

  constructor(private musicItemsService: MusicItemsService,
    private changeDirRef: ChangeDetectorRef) {
    
  }

  ngOnInit() {
    this.musicItemsService.getAll().subscribe(item => {
      this.musicItems.push(item);
      console.log('in component', item);
      this.changeDirRef.detectChanges();
    });
  }
}
