import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mgs'
})
export class MgsPipe implements PipeTransform {

  transform(value: any): any {
    let cadena = value;
    let message;
    let patron = "&#39;";
      let nuevoValor = " ' ";
      message = cadena.replace(patron, nuevoValor);
    return message;
  }
}
