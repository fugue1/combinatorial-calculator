function factor(n: number, k: number) : number[] {
 if (Math.pow(k, 2) > n) {
   return [n];
 } else if (n % k == 0) {
   return factor(n/k, k).concat([k]);
 } else {
   return factor(n, k+2);
 }
};


function fact2(n: number): number[] {
  if (4 > n) {
    return [n];
  } else if (n % 2 == 0) {
    return fact2(n/2).concat([2]);
  } else {
    return factor(n, 3);
  }
}



export class NatNum {
  title: number;
  factors: number[];
  factdisp: string;

  constructor(title: number) {

    this.title = title;
    this.factors = fact2(this.title);
    this.factdisp = (this.factors).join(', ');
  }

  voteUp(): void {
    this.title += 1;
    this.factors = fact2(this.title);
    this.factdisp = (this.factors).join(', ');
  }

  voteDown(): void {
    this.title -= 1;
    this.factors = fact2(this.title);
    this.factdisp = (this.factors).join(', ');
  }
}
