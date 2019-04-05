import { Pipe, PipeTransform } from '@angular/core';


function unique(arr: number[]): number[] {
  var un: number[] = [arr[0]];
  for (var i = 1; i < arr.length; i++ ) {
    if (arr[i] != arr[i-1]) {
      un.push(arr[i]);
    }
  }
  return un;
};

function disparr(arr) {
  return arr.join(', ')
}


function comp(arr: number[]): string {
  if (1 == arr.length) {
    return 'prime';
  } else {
    return 'composite';
  }
};


@Pipe({name: 'disparr'})
export class DispArr implements PipeTransform {
  transform(arr) {
    return disparr(arr);
  }
}


@Pipe({name: 'unique'})
export class Unique implements PipeTransform {
  transform(arr: number[]): number[] {
    return unique(arr);
  }
}



@Pipe({name: 'comp'})
export class Comp implements PipeTransform {
  transform(arr: number[]): string {
    return comp(arr);
  }
}
