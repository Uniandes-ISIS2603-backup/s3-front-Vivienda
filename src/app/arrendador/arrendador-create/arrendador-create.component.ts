import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { ArrendadorService } from '../arrendador.service';
import { Arrendador } from '../arrendador';

@Component({
  selector: 'app-arrendador-create',
  templateUrl: './arrendador-create.component.html',
  styleUrls: ['./arrendador-create.component.css']
})
export class ArrendadorCreateComponent implements OnInit {

  constructor(
        private arrendadorService: ArrendadorService,
        private toastrService: ToastrService
  ) { }

  arrendador: Arrendador;
  
  @Output() cancel = new EventEmitter();
  
  @Output() create = new EventEmitter();
  
  createArrendador(): Arrendador {
      this.arrendadorService.createArrendador(this.arrendador)
            .subscribe((arrendador) => {
                this.arrendador = arrendador;
                this.create.emit({id: arrendador.id});
                this.toastrService.success("The arrendador was created", "Arrendador creation");
                
            });
            return this.arrendador;
  }
  
  cancelCreation(): void {
        this.cancel.emit();
  }
  
  ngOnInit() {
      this.arrendador= new Arrendador();
  }

}
