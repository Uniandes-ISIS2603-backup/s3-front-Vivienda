import { Component, OnInit, Output, EventEmitter , Input} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router'

import { SitioInteresService } from '../sitioInteres.service';
import { SitioInteresDetail } from '../sitioInteresDetail';

@Component({
  selector: 'app-sitio-interes-update',
  templateUrl: './sitio-interes-update.component.html',
  styleUrls: ['./sitio-interes-update.component.css']
})
export class SitioInteresUpdateComponent implements OnInit {

sitioInteresId: number;
viviendaId: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to edit a sitioInteres
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated the sitioInteres's information
    */
    @Output() update = new EventEmitter();
    
    sitioInteres: SitioInteresDetail;
    
  constructor(private sitioInteresService: SitioInteresService,
                private route: ActivatedRoute,
                private router: Router,
                private toastrService: ToastrService) { }
                
                   /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to edit the student
    */
    cancelEdition(): void {
        this.cancel.emit();
        this.router.navigate(["/sitioInteres/list"]);
    }
    
    /**
    * Updates the sitioInteres's information
    */
    editSitioInteres(): void {
        this.sitioInteresService.updateSitioInteres(this.viviendaId, this.sitioInteresId, this.sitioInteres)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The sitioInteres's information was updated", "SitioInteres edition");
                this.router.navigate(["/sitioInteres/"+this.viviendaId]);
            });
            
    }
    
        /**
    * Retrieves the information of the sitioInteres
    */
    getSitioInteres(): void {
        this.sitioInteresService.getSitioInteresDetail(this.viviendaId, this.sitioInteresId)
            .subscribe(sitioInteres => {
                this.sitioInteres = sitioInteres;
            });
    }

  ngOnInit() {
      this.sitioInteres= new SitioInteresDetail();
        this.sitioInteresId = +this.route.snapshot.paramMap.get('id2');
        this.viviendaId = +this.route.snapshot.paramMap.get('id');
        this.getSitioInteres();
  }

}
