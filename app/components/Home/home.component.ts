import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import './../../../assets/js/Tran_js/page_create_new_session_export/jquery.prettydropdowns';
import {el} from '@angular/platform-browser/testing/src/browser_util';

declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    if (!localStorage.getItem('currentUser') && !sessionStorage.getItem('currentUser')) {
      this.router.navigate(['login']);
    } else {
      console.log('CurrentUser: ' + localStorage.getItem('currentUser'));
    }


    // js ad vao
    $(document).ready(function () {

      const forEach = function (t, o, r) {
        if ('[object Object]' === Object.prototype.toString.call(t)) {
          for (let c in t) {
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
          }
        }
        else {
          for (let e = 0, l = t.length; l > e; e++) {
            o.call(r, t[e], e, t);
          }
        }
      };
      const hamburgers = document.querySelectorAll('.hamburger');
      if (hamburgers.length > 0) {
        forEach(hamburgers, function (hamburger) {
          hamburger.addEventListener('click', function () {
            this.classList.toggle('is-active');
          }, false);
        }, false);
      }


      $(window).ready(function () {
        $('.hamburger').addClass('is-active');
      });

      $('.content').css({'padding-top': $('header').height()});
      $('nav.sticky-top').css({top: $('header').outerHeight()});
      if ($('.collapse a').hasClass('active')) {
      } else {
      }

      $('.hamburger').on('click', function () {
        if ($(this).hasClass('is-active')) {
          $('#left').css({
            width: '275px'
          });
          $('#main').css({
            marginLeft: '300px'
          });
          $('.content_left .accordion .accordion_item .nav.active a.active').css({border: '2px solid #ed1e24'});
        } else {
          $('#left').css({
            width: '60px'
          });
          $('#main').css({
            marginLeft: '85px'
          });
          $('.content_left .accordion .accordion_item .nav.active a.active').css({border: 'none'});
        }
      });


      $('.accordion_item').on('click', function () {
        $(this).parent().find('.fa-caret-up').removeClass('fa-caret-up');
        $(this).find('.fa-caret-down').toggleClass('fa-caret-up');
      });

      $('.content_right').css({
        height: ($('.content_left').height() - (($('header').height() * 2) + ($('footer').height() * 2))),
        'min-height': '800px'
      });

      $('[data-toggle=popover]').popover({
        'html': true,
        'trigger': 'click',
        content: function () {
          return $('#popover-content').html();
        }
      });

      $('.dropdown-el').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('expanded');
        $('#' + $(e.target).attr('for')).prop('checked', true);
      });

      $(document).click(function () {
        $('.dropdown-el').removeClass('expanded');
      });

      const prettyDropdown = function () {
        const Dropdown = $('select').prettyDropdown({

          // The default behavior is to move the selected item to the top.
          // If you want the order of items to remain static, then set this to true.
          classic: false,

          // Custom class to customize the drop-down menu style.
          customClass: 'arrow triangle',

          // Item height in pixels.
          height: 50,

          // The wait period (in milliseconds) before collapsing the drop-down menu after you hover off of it.
          hoverIntent: 9999999999,

          // The separator character to use for the list of selected items in a multi-select menu.
          multiDelimiter: '; ',

          // The maximum number of selected items to display in a multi-select menu before replacing it with a summary (e.g., "2/3 selected").
          // To display "0/3 selected" instead of "None selected", set this option to -1.
          multiVerbosity: 99,

          // The icon or symbol to mark that an item is selected. HTML is accepted
          selectedMarker: '',

          // Callback
          afterLoad: function () {
          }

        });
        Dropdown.refresh();
      };

    });

  }


}
