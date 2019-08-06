import { Injectable } from '@angular/core';

@Injectable()
export class ServicioEnvioService {

  constructor() { }

  calcularConEnvio(precio: number) {
    // El 25 equivaldria al valor del envio
    return (precio + 150);
  }
}
