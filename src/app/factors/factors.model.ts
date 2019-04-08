function factor(n: number, k: number, s: number, f: number[]) : number[] {
 if (k >= s + 1) {
   console.log(s);
   return [n, ...f];
 } else if (n % k == 0) {
   const div = n/k;

    return factor(div, k, Math.sqrt(div), [k].concat(f) );
 } else {
   return factor(n, k+2, s, f);
 }
};


function fact2(n: number, s: number, f: number[]): number[] {
  if (2 > s) {
    console.log(s);
    return [n, ...f];
  } else if (n % 2 == 0) {

    const half = n/2;

    return fact2(half, Math.sqrt(half), [2].concat(f));
  } else {
    return factor(n, 3, s, f);
  }
}

function factloop(n: number): number[] {
  let f = [];
  let s = Math.floor(Math.sqrt(n));
  while (2 <= s) {
    if (n % 2 == 0) {
        f.push(2);
        n = n/2;
        s = Math.floor(Math.sqrt(n));
    } else {

      let k = 3;
      while (k < s + 1) {
        if (n % k == 0) {
          f.push(k);
          n = n/k;
          s = Math.floor(Math.sqrt(n));
        } else {
          k += 2;
        }
      }
      f.push(n);
      return f;
    }
  }
  f.push(n);
  return f;

}



export class NatNum {
  title: number;
  factors: number[];
  factdisp: string;

  constructor(title: number) {

    this.title = title;
    this.factors = factloop(this.title); //fact2(this.title, Math.floor(Math.sqrt(this.title)), []);
    this.factdisp = (this.factors).join(', ');
  }

  voteUp(): void {
    this.title += 1;
    this.factors = factloop(this.title); //fact2(this.title, Math.floor(Math.sqrt(this.title)), []);
    this.factdisp = (this.factors).join(', ');
  }

  voteDown(): void {
    this.title -= 1;
    this.factors = factloop(this.title); //fact2(this.title, Math.floor(Math.sqrt(this.title)), []);
    this.factdisp = (this.factors).join(', ');
  }
}
