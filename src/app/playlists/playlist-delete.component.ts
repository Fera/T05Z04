import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'playlist-delete',
  template: `
    <p> Czy napewno chcesz usunąć "{{playlist.name}}" ?</p>
    <hr>
    <button class="btn btn-danger" (click)="remove()">Usuń</button>
    <button class="btn" (click)="save()">Zachowaj</button>
  `,
  styles: []
})
export class PlaylistDeleteComponent implements OnInit {

  constructor() { }
  @Input()
  playlist;

  @Output("deleted")
  del = new EventEmitter();

  remove(){
    this.del.emit(this.playlist);
  }

  save(){
    this.del.emit(null);
  }

  ngOnInit() {
  }

}
