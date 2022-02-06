import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "app-navbar" },
  { path: "listProvider", component: ListProviderComponent },
 { path: "addProvider", component: AddProviderComponent },
 { path: "updateProvider/:id", component: UpdateProviderComponent },
 { path: "login", component: LoginComponent },
 { path: "logout", component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
