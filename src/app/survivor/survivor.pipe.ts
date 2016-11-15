import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'survivor_id'
})

export class SurvivorPipe implements PipeTransform {
  transform(value: string): string {
  	if (value != undefined)
    	return value.split('/').pop();
  }
}
