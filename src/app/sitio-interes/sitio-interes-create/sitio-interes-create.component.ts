import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {ActivatedRoute} from '@angular/router';

import { SitioInteresService } from '../sitioInteres.service';
import { SitioInteres } from '../sitioInteres';

@Component({
  selector: 'app-sitio-interes-create',
  templateUrl: './sitio-interes-create.component.html',
  styleUrls: ['./sitio-interes-create.component.css']
})
export class SitioInteresCreateComponent implements OnInit {

  constructor(
        private sitioInteresService: SitioInteresService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
        ) { }

  sitioInteres: SitioInteres;
  viviendaId: number;
  
   @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();
  
createSitioInteres(): SitioInteres {
      this.sitioInteresService.createSitioInteres(this.viviendaId,this.sitioInteres)
            .subscribe((sitio) => {
                this.sitioInteres = sitio;
                this.create.emit();
                this.toastrService.success("The sitioInteres was created", "SitioInteres creation");
                
            });
            return this.sitioInteres;
  }
  
  cancelCreation(): void {
        this.cancel.emit();
  }
  
  ngOnInit() {
      this.viviendaId = +this.route.snapshot.paramMap.get('id');
      this.sitioInteres= new SitioInteres();
  }

}
