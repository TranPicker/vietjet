import {Component, OnInit, OnDestroy} from '@angular/core';
import './../../../../../assets/js/Tran_js/page_create_new_session_export/page_create_new_session_export.js';
import {Export} from '../../../../Models/export/export';
import {ExportService} from '../../../../service/export/export.service';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-session-export',
  templateUrl: './session-export.component.html',
  styleUrls: ['./session-export.component.css']
})
export class SessionExportComponent implements OnInit, OnDestroy {
  public data: Export = new Export();

  constructor(private exportService: ExportService) {
  }

  addNewExport() {
    this.data.typeTrip = $('#prettydropdown-typeTrip ul li:first-child').attr('data-value');
    this.data.cityPair = $('#prettydropdown-cityPare ul li:first-child').attr('data-value');
    this.data.onSale = $('#prettydropdown-onSale ul li:first-child').attr('data-value');
    this.data.fromDate = $('.form--datepicker#from-date').datepicker('getDate');
    this.data.toDate = $('.form--datepicker#to-date').datepicker('getDate');


    this.exportService.addExport(this.data).subscribe(res => {
      console.log(res);
    });

    console.log('City Pair:' + this.data.typeTrip);
    console.log('City Pair:' + this.data.cityPair);
    console.log('OnSale:' + this.data.onSale);
    console.log('From Date:' + this.data.fromDate);
    console.log('rout Trip:' + this.data.routTrip);
    console.log('To date:' + this.data.toDate);

  }

  ngOnInit() {
    // Reload jquery
    // Initiate Pretty Dropdowns
    $(document).ready(function () {
      // jquery for pretty dropdown
      $('.pretty').prettyDropdown();

      $('.form--right .prettydropdown.arrow').addClass('col-9');
      $('.form--datepicker').datepicker({
        dateFormat: 'dd.mm.yy'
      });
      // event click
      $('.form--datepicker').click(function (event) {
        $('.form--datepicker:not(this)').removeClass('border-red');
        event.stopPropagation();
        $(this).addClass('border-red');
      });
      $('html').click(function () {
        $('.form--datepicker').removeClass('border-red');
      });
    });

  }

  ngOnDestroy() {
    console.log('ngOnDestroy is Working');
  }

}
