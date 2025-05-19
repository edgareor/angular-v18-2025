import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { TestingComponent } from './components/testing/testing.component';
import { CargarArchivosComponent } from './components/cargar-archivos/cargar-archivos.component';

export const routes: Routes = [
    { component: DashboardComponent, title: 'Table', path: 'table' },
    {component: RegistrarseComponent, title: 'Registrase', path: 'registrarse'},
    {component: TestingComponent, title: 'Testing', path: 'testing'},
    {component: CargarArchivosComponent, title: "Cargar Archivos", path: 'cargar'},
    { path: 'formulario', title: 'Formulario', component: FormularioComponent },
    { path: 'login', title: 'Login', component: LoginComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
