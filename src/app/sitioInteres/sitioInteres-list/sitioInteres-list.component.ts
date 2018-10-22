import {Component, OnInit} from "@angular/core";
import {SitioInteres} from "../sitioInteres";
import { SitioInteresService } from "../sitioInteres.service";

@Component({
  selector: 'sitioInteres-list',
  templateUrl: './sitioInteres-list.component.html',
  styleUrls: ['./sitioInteres-list.component.css']
})
export class SitioInteresListComponent implements OnInit
{
    sitiosInteres: SitioInteres[];
    
    constructor(private sitioInteresService: SitioInteresService){}
    
    getSitiosInteres(): SitioInteres[]
    {
        return this.sitioInteresService.getSitiosInteres();
    }
    
    ngOnInit() 
    {
        this.sitiosInteres = this.getSitiosInteres();
    }

}
