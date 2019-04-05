const insrt = (x, ys) =>
  ys.map(y => x + y);

function combn(n, zs) {
   if (n === 0) {
    return [''];
  } else if (zs.length === 0) {
    return [];
  } else {
    const h = zs.slice(0,1);
    const t = zs.slice(1);
    return insrt(h, combn(n-1, t)).concat(combn(n, t));
  }
}

function lendisp(n) {
  if (n === 1) {
    return '1 Combination';
  } else {
    return `${n} Combinations`;
  }
}

function factorial(n) {
  if (n === 1) {
    return 1
  } else {
    return n * factorial(n-1);
  }
}

export class Comb {
  title: string;
  combs: string[];
  combdisp: string;
  comblen: string;

  constructor(m: number, title: string, n: number) {

    this.title = title;
    this.combs = combn(m, title);
    this.comblen = lendisp(n);
    this.combdisp = (this.combs).join(', ');

  }


}
