import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, type: string = 'user'): any {

    if (!img) {
      return '../../../assets/images/no_photo.png';
    }

    return img;
  }

}
