import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DocSection } from '../../services/docs/sections';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input()
  sections: DocSection[] = [];

  @Output()
  sectionChanged: EventEmitter<number> = new EventEmitter<number>();

  onClick(e: number) {
    this.sectionChanged.emit(e);
  }
}
