import { Component, OnInit } from '@angular/core';
import { Universidad } from '../universidad';
import { UniversidadService } from '../universidad.service';

@Component({
  selector: 'app-universidad-list',
  templateUrl: './universidad-list.component.html',
  styleUrls: ['./universidad-list.component.css']
})
export class UniversidadListComponent implements OnInit {

    constructor(private universidadService: UniversidadService) { } 
    universidades: Universidad[];
    getUniversidades(): void {
        this.universidadService.getUniversidades().subscribe(universidades => this.universidades = universidades);
    }
    ngOnInit() {
        this.getUniversidades();
    }

}
