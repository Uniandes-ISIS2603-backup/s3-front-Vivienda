import {Injectable} from "@angular/core";
import {SitioInteres} from "./sitioInteres";

@Injectable()
export class SitioInteresService
{
    sitiosInteres: SitioInteres[];
    
    constructor()
    {
        this.sitiosInteres=[];
    }
    
    getSitiosInteres(): SitioInteres[]
    {
        for (let i = 0; i < 3; i++) {
            let id = Math.random()*10;
            let nombre = "SitioInteres" + (i+1);
            let descripccion = "Ipsum bibendum lectus egestas cursus lacinia mi ullamcorper natoque dictumst. Blandit at varius penatibus diam senectus.Molestie vestibulum proin mauris cras cras tempus et facilisi congue suspendisse a nascetur. Mauris phasellus sem ad vivamus et mauris integer vehicula tortor."      
            let img = "assets/img/sitioInteres" + (i + 1) + ".jpg";
            let sitioInteres = new SitioInteres(id, nombre, descripccion, img);
            this.sitiosInteres.push(sitioInteres);
        }    
        return this.sitiosInteres;
    }
    
}
