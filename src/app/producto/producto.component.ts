import { Component, OnInit, Input } from '@angular/core';
import { ServicioEnvioService } from '../servicio-envio/servicio-envio.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input()
  precioSinEnvio: number;

  precioConEnvio: number;
 
  constructor(private servicioEnvio: ServicioEnvioService) { }

  ngOnInit() {
    this.precioConEnvio = this.servicioEnvio.calcularConEnvio(this.precioSinEnvio);
  }

}
