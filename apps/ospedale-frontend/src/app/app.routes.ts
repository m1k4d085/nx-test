import { Route } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { LayoutComponent } from './layout-component/layout.component';
import { Error404Component } from './error-404-component/error-404.component';
import { Patients } from './pages/patients/patients';
import { Examinations } from './pages/examinations/examinations';

export const appRoutes: Route[] = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: Dashboard,
            },
            {
                path: 'profile',
                component: Profile,
            },
            {
                path: 'patients',
                component: Patients,
            },
            {
                path: 'patients',
                component: Patients,
            },
            {
                path: 'examinations',
                component: Examinations,
            }
        ]
    },
    {
        path: '**',
        component: Error404Component,
    }
];
