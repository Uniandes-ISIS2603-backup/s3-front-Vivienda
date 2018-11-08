import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ServicioAdicionalService } from '../servicio-adicional.service';
//import {ServicioAdicionalDetail} from '../servicio-adicional-detail';

@Component({
  selector: 'app-servicio-adicional-detail',
  templateUrl: './servicio-adicional-detail.component.html',
  styleUrls: ['./servicio-adicional-detail.component.css']
})
export class ServicioAdicionalDetailComponent implements OnInit {

  constructor(
        private servicioAdicionalService: ServicioAdicionalService,
        private route: ActivatedRoute) { }
  
  /**
   * The service whose details we want to show
   */
  // servicioAdicionalDetail: ServicioAdicionalDetail;
   
 /**
  * The services's id retrieved from the address
  */
  //servicioAdicional_id: number;
  
  //getServicioAdicionalDetail(): void {
    //this.servicioAdicionalService.getServicioAdicionalDetail(this.servicioAdicional_id)
      //.subscribe(servicioAdicionalDetail => {
       // this.servicioAdicionalDetail = servicioAdicionalDetail;
      //});
 // }

  ngOnInit() {    
      //this.servicioAdicional_id = +this.route.snapshot.paramMap.get('id');
     // this.servicioAdicionalDetail = new ServicioAdicionalDetail();
      //this.getServicioAdicionalDetail();
  }

}
