import { FooterColumnService } from './../../../service/footer-column.service';
import { FooterColumn } from './../../../models/footer-column.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-column',
  templateUrl: './footer-column.component.html',
  styleUrls: ['./footer-column.component.scss'],
})
export class FooterColumnComponent implements OnInit {
  columns: FooterColumn[] | any = [];
  constructor(private footerColumnService: FooterColumnService) {}
  ngOnInit(): void {
    this.columns = this.footerColumnService.getColumns();
  }
}
