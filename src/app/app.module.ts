import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/****** Third Party Modules ******/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ToastrModule } from 'ngx-toastr';
import { Ng2Webstorage } from 'ngx-webstorage';
import { ImageCropperModule } from 'ngx-image-cropper';

/****** Services ******/
import { SignupService } from './Shared/signup.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './basic/login.component';
import { SignupComponent } from './basic/signup.component';
import { HeaderComponent } from './basic/header.component';
import { FooterComponent } from './basic/footer.component';
import { SidebarComponent } from './basic/sidebar.component';
import { ContentComponent } from './basic/content.component';
import { DashboardComponent } from './basic/dashboard.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    Ng2Webstorage,
    ImageCropperModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    SignupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
