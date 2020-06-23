import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    url = 'https://formspree.io/myynjave';
  constructor(private toast: ToastrService) { }

  ngOnInit(): void {
  }

  showNotification(from, align){
         this.toast.success('<span class="tim-icons icon-bell-55" [data-notify]="icon"></span> Your meesage has been sent successfully !.', '', {
          closeButton: true,
          enableHtml: true,
          toastClass: "alert alert-success alert-with-icon",
          positionClass: 'toast-' + from + '-' +  align
        });
  }
}
