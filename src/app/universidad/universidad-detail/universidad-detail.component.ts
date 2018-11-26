import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';


import {UniversidadService} from '../universidad.service';
import {Universidad} from '../universidad';
import {UniversidadDetail} from '../universidad-detail';

@Component({
  selector: 'app-universidad-detail',
  templateUrl: './universidad-detail.component.html',
  styleUrls: ['./universidad-detail.component.css']
})
export class UniversidadDetailComponent implements OnInit, OnDestroy {

 /**
  * The constructor of the component
  * @param universidadService The universities' service provider
  * @param route The route
  */
  constructor(
        private universidadService: UniversidadService,
        private route: ActivatedRoute,
        private router: Router
       
    ) { //This is added so we can refresh the view when one of the books in
        //the "Other books" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });}

    /**
     * The university's id number
     */
    universidad_id : number;
    
    /**
     * The university
     */
    universidadDetail : UniversidadDetail;
    
    /**
    * The other universities shown in the sidebar
    */
    other_universidades: Universidad[];
    
     /**
    * The suscription which helps to know when a new book
    * needs to be loaded
    */
    navigationSubscription;
    
    
    showEdit: boolean;

    /**
     * Retrives the university
     */
    getUniversidadDetail(): void {
        this.universidadService.getUniversidadDetail(this.universidad_id)
              .subscribe(universidadDetail => {
                  this.universidadDetail = universidadDetail;
        })
    }
    
    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
    getOtherUniversidades(): void {
        this.universidadService.getUniversidades()
            .subscribe(universidades => {
                this.other_universidades = universidades;
                this.other_universidades = this.other_universidades.filter(universidad => universidad.id !== this.universidad_id);
            });
    }

    /**
     * Initializes the component
     */
    ngOnInit() {
        this.universidad_id = +this.route.snapshot.paramMap.get('id');
        this.universidadDetail = new UniversidadDetail();
         this.getUniversidadDetail();
         this.getOtherUniversidades();
         this.showEdit = true;
    }

   /**
    * This method helps to refresh the view when we need to load another book into it
    * when one of the other books in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }

}
