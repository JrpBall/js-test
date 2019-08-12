import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentListsComponent } from './content-lists/content-lists.component';
import { HomeComponent } from './home/home.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './auth-gaurd.service';


@NgModule({
  declarations: [
    AppComponent,
    ContentListsComponent,
    HomeComponent,
    TopBarComponent,
    LoginComponent,
    RegisterComponent,
    UserprofileComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
        { path: '' , component: HomeComponent },
        { path: 'content' , component: ContentListsComponent},
        { path: 'login' , component: LoginComponent },
        { path: 'register' , component: RegisterComponent },
        { path: 'userprofile' , component: UserprofileComponent, canActivate:[AuthGaurdService]},
        { path: 'logout', component: LogoutComponent, canActivate:[AuthGaurdService]},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
