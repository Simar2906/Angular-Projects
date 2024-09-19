import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { StandaloneComponent } from "./standalone/standalone.component";
import { AppRoutingModule } from './app-routing.module';
import { SharedBehaviourDirective } from './shared-behaviour.directive';
@NgModule({
  declarations: [
    AppComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StandaloneComponent,
    AppRoutingModule,
    SharedBehaviourDirective
],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
