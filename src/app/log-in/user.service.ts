import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions';


/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class UserService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
     
        const role = localStorage.getItem('role');
        if (!role) {
            this.setGuestRole();
        } else if (role === 'ADMIN') {
            this.setAdministratorRole();
        }
        else if (role === 'ARRENDADOR') {
            this.setArrendadorRole();
        } else {
            this.setEstudianteRole();
        }
    }

    setGuestRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
    }

    setEstudianteRole (id:string = null): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ESTUDIANTE', ['']);
        localStorage.setItem('role', 'ESTUDIANTE');
        if (id != null)
            localStorage.setItem('id', id);
    }
    
    setArrendadorRole (id:string = null): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ARRENDADOR', ['']);
        localStorage.setItem('role', 'ARRENDADOR');
        if (id != null)
            localStorage.setItem('id', id);
    }

    setAdministratorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['']);
        localStorage.setItem('role', 'ADMIN');
    }

    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login (role, id:string = null): void {
        if (role === 'Administrador') {
            this.setAdministratorRole();
        } else if (role==='Arrendador'){
            this.setArrendadorRole(id);
        }
        else{
            this.setEstudianteRole(id);
        }
        this.router.navigateByUrl('/viviendas/list');
    }

    /**
     * Logs the user out
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        localStorage.removeItem('id');
        this.router.navigateByUrl('/viviendas/list');
    }
}


