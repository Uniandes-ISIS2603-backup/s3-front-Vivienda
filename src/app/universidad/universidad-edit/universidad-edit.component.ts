import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {UniversidadService} from '../universidad.service';
import {UniversidadDetail} from '../universidad-detail';

@Component({
  selector: 'app-universidad-edit',
  templateUrl: './universidad-edit.component.html',
  styleUrls: ['./universidad-edit.component.css']
})
export class UniversidadEditComponent implements OnInit {

  constructor(
        private universidadService: UniversidadService,
        private toastrService: ToastrService,
        private router: Router,
        private route: ActivatedRoute
    ) { }
        

    /**
    * The university which will be updated
    */
    universidad: UniversidadDetail;

    universidad_id: number;
    
    @Output() cancel = new EventEmitter();
    @Output() update = new EventEmitter();
    
    /**
    * Retrieves the information of the university which will be updated
    */
    getUniversidad(): void {
        this.universidadService.getUniversidadDetail(this.universidad_id)
            .subscribe(universidad => {
            this.universidad = universidad;
        });
    }
    
     /**
    * Cancels the edition of the university
    */
    cancelEdition(): void {
        this.toastrService.warning('No se editó la universidad', 'Universidad Edition');
        this.cancel.emit();
        this.router.navigate(['/universidades/list']);
    }
    
     /**
    * This function updates the university
    */
    updateUniversidad(): void {
        
            this.universidadService.updateUniversidad( this.universidad)
                .subscribe(() => {
                    this.update.emit();
                    this.router.navigate(['/universidades/' + this.universidad.id]);
                    this.toastrService.success("Universidad Editada", 'Universidad Edition');
                }, err => {
                this.toastrService.error(err, "Error");
            });
        
    }


  ngOnInit() {
        this.universidad= new UniversidadDetail();
        this.universidad_id = +this.route.snapshot.paramMap.get('id');
        this.getUniversidad();
  }

}
