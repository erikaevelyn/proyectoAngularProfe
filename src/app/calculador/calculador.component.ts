import { Component, OnInit } from '@angular/core';
import { ServicioEnvioService } from '../servicio-envio/servicio-envio.service';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent implements OnInit {

  precio: string;
  precioConEnvio: number;

  constructor(private servicioEnvio: ServicioEnvioService) { }

  ngOnInit() {
  }

  calcular() {
    this.precioConEnvio = this.servicioEnvio.calcularConEnvio(Number(this.precio));
  }

}
