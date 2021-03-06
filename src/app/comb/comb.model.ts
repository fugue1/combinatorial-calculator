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

function flatten(arr) {
  return arr.reduce((a,b) => a.concat(b));
}

function xpete(x,m) {
  if (m === 1) {
    return [[1, x]];
  } else {
    return [[m, x.repeat(m)], ...xpete(x,m-1)];
  }
}

function rcombn(n, zs) {
  if (n === 0) {
    return [''];
  } else if (zs.length === 0) {
    return [];
  } else {
    const [h, ...t] = zs;
    const [x, m] = h;
    return flatten( xpete(x,m).map( item => insrt(item[1], rcombn(n-item[0], t)) ) ).concat(rcombn(n,t));
  }
}

function lendisp(n) {
  if (n === 1) {
    return '1 choice';
  } else {
    return `${n} choices`;
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
  dict: any;
  combs: string[];
  combdisp: string;
  comblen: string;
  choices: number;


  constructor(n: number, dict: any, title: string, m: number) {

    this.title = title;
    this.combs = rcombn(n, dict);
    this.comblen = lendisp(m);
    this.combdisp = (this.combs).join(', ');
    this.choices = n;



  }


}
