import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import 'hammerjs';
import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { SubpageComponent } from './subpage/subpage.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    SubpageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot([{path: 'subpage', component: SubpageComponent},
                          {path: 'greeter', component: GreeterComponent},
                          {path: 'navbar', component: NavbarComponent}
                        ])
  ],
  providers: [SubpageComponent, GreeterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
