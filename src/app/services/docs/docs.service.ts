import { Injectable } from '@angular/core';
import { docSections, DocSection } from './sections.js';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  getAllDocSections(): DocSection[] {
    return docSections;
  }
}
