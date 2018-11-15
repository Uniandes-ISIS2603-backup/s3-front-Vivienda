import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router'

import { ArrendadorDetail } from '../arrendador-detail';
import { ArrendadorService } from '../arrendador.service';

@Component({
  selector: 'app-arrendador-update',
  templateUrl: './arrendador-update.component.html',
  styleUrls: ['./arrendador-update.component.css']
})
export class ArrendadorUpdateComponent implements OnInit {

  constructor(private arrendadorService: ArrendadorService,
                  private route: ActivatedRoute,
                private router: Router,
                private toastrService: ToastrService) { }

arrendadorId: number;

arrendador: ArrendadorDetail;

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
                 /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to edit the student
    */
    cancelEdition(): void {
        this.cancel.emit();
        this.router.navigate(["/arrendadores/list"]);
    }
    
    /**
    * Updates the sitioInteres's information
    */
    updateArrendador(): void {
        this.arrendadorService.updateArrendador(this.arrendadorId, this.arrendador)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The arrendador's information was updated", "Arrendador edition");
            });
    }
    
        /**
    * Retrieves the information of the sitioInteres
    */
    getArrendador(): void {
        this.arrendadorService.getArrendadorDetail(this.arrendadorId)
            .subscribe(arrendador => {
                this.arrendador = arrendador;
            });
    }
  ngOnInit() {
        this.arrendador= new ArrendadorDetail();
        this.arrendadorId = +this.route.snapshot.paramMap.get('id');
        this.getArrendador();
  }

}
