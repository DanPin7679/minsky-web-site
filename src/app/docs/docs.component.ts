import { Component, inject } from '@angular/core';
import { DocSection } from '../services/docs/sections.js';
import { SidebarComponent } from '../shared/sidebar/sidebar.component.js';
import { DocsService } from '../services/docs/docs.service.js';
@Component({
  selector: 'app-docs',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './docs.component.html',
  styleUrl: './docs.component.css',
})
export class DocsComponent {
  docService: DocsService = inject(DocsService);

  sections: DocSection[] = [];
  section: DocSection = this.sections[0];

  constructor() {
    this.sections = this.docService.getAllDocSections();
    this.section = this.sections[0];
  }

  newSection(e: number) {
    this.section = this.sections[e - 1];
  }
}
