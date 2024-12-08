import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { ParamExampleComponent } from './param-example/param-example.component';
import { UserInfoFormComponent } from './user-info-form/user-info-form.component';
import { UserInfoDisplayComponent } from './user-info-display/user-info-display.component';

export const routes: Routes = [
    {path:'counter',
    component: CounterComponent
    },
    {path:'counter-page',
        component: CounterPageComponent
    },
    {path:'params/:id', component: ParamExampleComponent},
    {path:'user-info', component:UserInfoFormComponent},
    {path:'user-info-display', component:UserInfoDisplayComponent}

];
