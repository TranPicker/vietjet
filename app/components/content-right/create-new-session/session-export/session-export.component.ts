import {Component, OnInit, OnDestroy} from '@angular/core';
import './../../../../../assets/js/Tran_js/page_create_new_session_export/page_create_new_session_export.js';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-session-export',
  templateUrl: './session-export.component.html',
  styleUrls: ['./session-export.component.css']
})
export class SessionExportComponent implements OnInit, OnDestroy {
  cityPare = '';
  onSale = '';
  fromDate = '';
  routTrip = '';
  toDate = '';

  constructor() {
  }

  sendInfor() {
    console.log('Thông Tin Đã Được Gửi Đi');
    console.log('City Pair: ' + this.cityPare);
    console.log('On Sale; ' + this.onSale);
    console.log('from Date: ' + this.fromDate);
    console.log('Rout Trip: ' + this.routTrip);
    console.log('To Date: ' + this.toDate);
  }

  ngOnInit() {
    console.log('NgOnInit is working!');
    // Reload jquery
    // Initiate Pretty Dropdowns
    $(document).ready(function () {
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
