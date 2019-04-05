import { Component } from '@angular/core';
import { NatNum } from './factors/factors.model';
import { Perm } from './perm/perm.model';
import { Comb } from './comb/comb.model';



function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n-1);
  }
}

function combsize(n, s) {
  const l = s.length;
  return factorial(l)/(factorial(n)*factorial(l-n));

}

function combdict(s) {
  let k = 0;
  let dict = new Map();
  for (let c of s) {
    k = k+1;
    if (dict.has(c)) {
      dict.set(c, 1 + dict.get(c));
    } else {
      dict.set(c, 1);
    }
  }
  return [...dict.entries()];

}

function permsize(s) {
  let k = 0;
  let dict = new Map();
  for (let c of s) {
    k = k+1;
    if (dict.has(c)) {
      dict.set(c, 1 + dict.get(c));
    } else {
      dict.set(c, 1);
    }
  }
  let f = factorial(k);
  for (const val of dict.values()) {
    f = f / factorial(val);
  }

  return f;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  natnums: NatNum[];
  strings: Perm[];
  c_strings: Comb[];
  mode: string;
  ermsg: boolean;
  ermsg_c: boolean;
  ermsg_f: boolean;
  ermsg_n: boolean;
  pcount: number;
  ccount: number;

  constructor() {
    this.natnums = [];
    this.strings = [];
    this.c_strings = [];
    this.mode = "factor";
    this.ermsg = false;
    this.pcount = 0;
    this.ccount = 0;
    this.ermsg_c = false;
    this.ermsg_f = false;
    this.ermsg_n = false;
  }



switchFactor(): boolean {
  this.mode = "factor";
  return false;
}

switchPerm(): boolean {
  this.mode = "perm";
  return false;
}

switchComb(): boolean {
  this.mode = "comb";
  return false;
}

addNumber(title: HTMLInputElement): boolean {

  const n = +title.value;

  if (n > 0) {
  this.ermsg_n = false;
  this.natnums.unshift( new NatNum(+title.value) );

} else {
  this.ermsg_n = true;
}
  return false;
}

addString(pseed: HTMLInputElement): boolean {
    const p = pseed.value.trim();

    const n = permsize(p);
    if (n > 100000) {
      this.pcount = n;
      this.ermsg = true;
    } else {
      this.ermsg = false;
      this.strings.unshift( new Perm(p, n) );
}
  return false;
}

removePerm(p: string): boolean {
  this.strings = this.strings.filter(item => item.title != p);
  return false;
}

removeComb(c: string): boolean {
  this.c_strings = this.c_strings.filter(item => item.title != c);
  return false;
}

removeNat(n: number): boolean {
  this.natnums = this.natnums.filter(item => item.title != n);
  return false;
}

addComb(n: HTMLInputElement, cseed: HTMLInputElement): boolean {
  const c = cseed.value.trim();
  if (!n || !c.length || +n.value < 1 || +n.value > c.length) {
    this.ermsg_f = true;

  } else {
    const m = combsize(+n.value, c);
//  if (m > 100000) {
//    this.ccount = m;
//    this.ermsg_c = true;
//  } else {
  //  this.ermsg_c = false;
  //  this.ermsg_f = false;
    const d = combdict(c);
    console.log(d);
    for (const [m,x] of d) {
      console.log(m,x);
    }
    this.c_strings.unshift( new Comb(+n.value, d, c, m));
  }

  return false;
}

 sortedNumbers(): NatNum[] {
   return this.natnums.sort((a: NatNum, b: NatNum) => b.title - a.title);
 }

}
