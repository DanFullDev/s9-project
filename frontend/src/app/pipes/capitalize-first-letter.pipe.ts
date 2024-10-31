import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeFirstLetter',
  standalone: true,
})
export class CapitalizeFirstLetterPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return value; // Return if the input is null or empty
    return value.charAt(0).toUpperCase() + value.slice(1); // Capitalize the first letter
  }
}
