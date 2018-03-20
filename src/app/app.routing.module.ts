import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        path: 'dashboard'
    }
];
