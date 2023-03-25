import { FooterColumn } from './../models/footer-column.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FooterColumnService {
  columns: FooterColumn[] = [
    new FooterColumn('Product', [
      'Overview',
      'Features',
      'Tutorials',
      'Pricing',
      'Releases',
    ]),
    new FooterColumn('Company', [
      'About',
      'Press',
      'Careers',
      'Contact',
      'Partners',
    ]),
    new FooterColumn('Support', [
      'Help Center',
      'Terms of service',
      'Legal',
      'Privacy Policy',
      'Status',
    ]),
  ];

  constructor() {}

  getColumns() {
    return this.columns.slice();
  }
}
