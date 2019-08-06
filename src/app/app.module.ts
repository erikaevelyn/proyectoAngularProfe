import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CalculadorComponent } from './calculador/calculador.component';
import { ProductoComponent } from './producto/producto.component';
import { ServicioEnvioService } from './servicio-envio/servicio-envio.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculadorComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ServicioEnvioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
