import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { ParamExampleComponent } from './param-example/param-example.component';

export const routes: Routes = [
    {path:'counter',
    component: CounterComponent
    },
    {path:'counter-page',
        component: CounterPageComponent
    },
    {path: 'params/:id', component: ParamExampleComponent},
];
