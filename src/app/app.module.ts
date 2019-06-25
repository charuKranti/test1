import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { ImageViewerModule } from 'ng2-image-viewer';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RecordsListComponent } from './records-list/records-list.component';
import { DetailsComponent } from './details/details.component';
import { KeysPipe } from './keys.pipe';

const appRoute: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/records' },
  { path: 'login', component: LoginComponent },
  { path: 'records', component: RecordsListComponent},
  { path: 'details/:id', component: DetailsComponent},
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RecordsListComponent,
    DetailsComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoute),
    ImageViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
