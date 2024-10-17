import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: '',
            loadChildren: () => import('./public/components/landing/landing.module').then(m => m.LandingModule)
          }
        ]
      },
];
