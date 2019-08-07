import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentListsComponent } from './content-lists/content-lists.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    ContentListsComponent,
    HomeComponent,
    TopBarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '' , component: HomeComponent },
        { path: 'content/:contentLists' , component: ContentListsComponent},
        { path: 'login/:login' , component: LoginComponent },
        { path: 'register/:register' , component: RegisterComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
