import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';
import { TemplateDrivenFormsExampleComponent } from './components/template-driven-forms-example/template-driven-forms-example.component';
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { UseRegistrationComponent } from './components/use-registration/use-registration.component';

export const routes: Routes = [
    { path: 'for-directive-example', component:ForDirectiveExampleComponent },
    { path: 'component-input-example', component:ComponentInputExampleComponent},
    { path: 'component-output-example', component:ComponentOutputExampleComponent },
    { path: 'event-bind-example', component: EventBindExampleComponent},
    { path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
    { path: 'template-driven-form-example', component: TemplateDrivenFormsExampleComponent},
    { path: 'reactive-form-example', component: ReactiveFormExampleComponent},
    { path: 'http-client-example', component: HttpClientExampleComponent},
    { path: 'user-registration-example', component: UseRegistrationComponent },
    { path:'welcome', component: WelcomeComponent },
    { path: '', redirectTo:'/welcome', pathMatch:'full'}    // pathMatch:'full' ετσι ώστε μόνο το '' να οδηγεί στο /welcome
];
