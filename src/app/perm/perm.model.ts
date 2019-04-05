
function riffle(x: string, s: string): string[] {
  if (s.length === 0) {
    return [x];
  } else {
  const h = s.slice(0,1);
  if (x === h) {
    return [x+s]
  } else {
  const t = s.slice(1);
//  return (riffle(x,t).map(c => h+c)).concat([x+s]);
  return [x+s].concat(riffle(x,t).map(c => h+c));
}
}
}

function flatten(arr) {
  return arr.reduce((a,b) => a.concat(b));
}

function permu(s: string): string[] {
  if (s.length === 0) {
    return [''];
  } else {
    const h = s.slice(0,1);
    const t = s.slice(1);
    const p = permu(t);
    const arr = p.map(z => riffle(h, z));

    return flatten(arr);


  }
}

function lendisp(n) {
  if (n === 1) {
    return '1 Permutation';
  } else {
    return `${n} Permutations`;
  }
}

function factorial(n) {
  if (n === 1) {
    return 1
  } else {
    return n * factorial(n-1);
  }
}



export class Perm {
  title: string;
  perms: string[];
  permdisp: string;
  permlen: string;


  constructor(title: string, n: number) {

    this.title = title;
    this.perms = permu(title);
    this.permlen = lendisp(n);
    this.permdisp = (this.perms).join(', ');

  }


}
