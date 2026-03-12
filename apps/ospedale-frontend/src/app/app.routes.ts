import { Route } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Profile } from './pages/profile/profile';
import { LayoutComponent } from './layout-component/layout.component';

export const appRoutes: Route[] = [
    {
        path: "",
        component: LayoutComponent,
        children: [
            {
                path: "",
                component: Dashboard,
            },
            {
                path: "profile",
                component: Profile,
            }
        ]
    },
];
