import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  appTitle = 'Task Master';
  @Output() sectionSelected = new EventEmitter<string>();

  onSelect(arg: string) {
    this.sectionSelected.emit(arg);
  }
}
