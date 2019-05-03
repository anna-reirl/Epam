cloneObject(source: any, target: any) {
    if (target === undefined || source === undefined) {
      return;
    }
    for (const k in source) {
      if (typeof (source[k]) === 'object' && source[k] !== null) {
        if (source[k] instanceof Array) {
          if (source[k].length === 0) {
            target[k] = [];
          } else {
            if (typeof (source[k][0]) !== 'object') {
              target[k] = [];
              for (let i = 0; i < source.length; i++) {
                target[k].push(source[i]);
              }
            }
          }
        }
        this.cloneObject(source[k], target[k]);
      } else {
        target[k] = source[k];
      }
    }
  }