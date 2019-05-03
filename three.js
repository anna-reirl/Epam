function deepCopy(source, target) {
  if (target === undefined || source === undefined) {
    return;
  }
  for (const k in source) {
    if (typeof (source[k]) === 'object' && source[k] !== null) {
      if (source[k] instanceof Array) {
        target[k] = [];
        if (typeof (source[k][0]) !== 'object') {
          for (let i = 0; i < source[k].length; i++) {
            target[k].push(source[k][i]);
          }
        }
      }
      target[k] = {};
      deepCopy(source[k], target[k]);
    } else {
      target[k] = source[k];
    }
  }
}

function simpleCopy(source, target) {
  if (target === undefined || source === undefined) {
    return;
  }
  for (const k in source) {
    target[k] = source[k];
  }
}

function Car(n) {
  this.name = n;
}

const source = {
  arr: [1, 2, 3],
  obj: new Car('Toyota RAV4'),
  obj_arr: [new Car('Car1'), new Car('Car2'), new Car('Car3')],
  number: 3
};

const simple_copy = {};
const deep_copy = {};

simpleCopy(source, simple_copy);
deepCopy(source, deep_copy);

source.arr[0] = 0;
source.obj_arr[0].name = 'Car0';
source.obj.name = 'Honda CRV';

console.log('Target values after simpleCopy:');
console.log(simple_copy.arr[0]);
console.log(simple_copy.obj_arr[0].name);
console.log(simple_copy.obj.name);
console.log('-------------------------------');

console.log('Target values after deepCopy:');
console.log(deep_copy.arr[0]);
console.log(deep_copy.obj_arr[0].name);
console.log(deep_copy.obj.name);