/* (c) 2012 Robbert Broersma. All rights reserved. */;(function(){'use strict';var e = void 0, h = !1, l = Object.prototype.toString;
function m(a) {
  return a instanceof Array || "object" === typeof a && "[object Array]" === l.call(a)
}
"isArray" in Array && (m = Array.isArray);
var n = {};
n.isArray = m;
n.indexOf = function(a, b, d) {
  return a.indexOf(b, d)
};
"indexOf" in Array.prototype || (n.indexOf = function(a, b, d) {
  d = d || 0;
  for(var c = a.length;d < c;d++) {
    if(a[d] === b) {
      return d
    }
  }
  return-1
});
n.contains = function(a, b) {
  return-1 !== n.indexOf(a, b)
};
n.g = function(a) {
  return n.filter(a, null, function(a) {
    return a !== e
  })
};
n.last = function(a) {
  return a[a.length - 1]
};
n.remove = function(a, b) {
  var d = n.indexOf(a, b);
  -1 != d && a.splice(d, 1)
};
n.i = function() {
};
n.clear = function(a) {
  a.splice(0, a.length)
};
n.f = function(a, b) {
  a.push.apply(a, b)
};
n.h = function(a) {
  for(var b, d = 0, c = a.length, f = {};d < c;d++) {
    if(b = a[d], "string" === typeof b || "number" === typeof b) {
      f[b] = d
    }
  }
  return f
};
n.clone = function(a) {
  return[].concat(a)
};
n.forEach = function(a, b, d) {
  for(var c = 0, f = a.length >>> 0;c < f;c++) {
    c in a && d.call(b, a[c], c, a)
  }
};
n.map = function(a, b, d) {
  for(var c = 0, f = [], k = a.length >>> 0;c < k;c++) {
    c in a && (f[c] = d.call(b, a[c], c, a))
  }
  return f
};
n.filter = function(a, b, d) {
  for(var c = 0, f = 0, k = [], g = a.length >>> 0;c < g;c++) {
    c in a && d.call(b, a[c], c, a) && (k[f] = a[c], f++)
  }
  return k
};
n.toArray = function(a) {
  for(var b = 0, d = a.length, c = Array(d);b < d;b++) {
    c[b] = a[b]
  }
  return c
};
n.every = function(a, b, d) {
  b = 0;
  for(var c = a.length;b < c;b++) {
    if(!d.call(this, a[b], b, a)) {
      return h
    }
  }
  return!0
};
n.some = function(a, b, d) {
  b = 0;
  for(var c = a.length;b < c;b++) {
    if(d.call(this, a[b], b, a)) {
      return!0
    }
  }
  return h
};
n.reduce = function(a, b, d) {
  var c = 0, f = a.length >> 0;
  d === e && (d = a[0], c = 1);
  for(;c < f;++c) {
    c in a && (d = b.call(e, d, a[c], c, a))
  }
  return d
};
n.e = function(a) {
  for(var b, d, c, f = [], k = 0, g = 0, t = a.length;k < t;) {
    b = a[k];
    if(n.isArray(b)) {
      b = n.e(b);
      d = 0;
      for(c = b.length;d < c;) {
        f[g] = b[d], d++, g++
      }
    }else {
      f[g] = b, g++
    }
    k++
  }
  return f
};
top.list = n;
function p() {
  this.c = [];
  this.b = [];
  this.a = !0
}
p.prototype.a = !0;
p.prototype.success = h;
p.prototype.reason = e;
p.prototype.value = e;
p.prototype.after = null;
var q = [], r = [], s = -1;
function u() {
  s = -1;
  var a = q;
  q = [];
  for(var b = 0, d = a.length;b < d;b++) {
    for(var c = a[b], f = 0, k = c.b.length;f < k;f++) {
      try {
        var g = c.b[f](c.reason);
        c.after && (g instanceof p ? v(g, c.after) : c.after.reject(g))
      }catch(t) {
        c.after && c.after.reject(t)
      }
    }
    n.clear(c.c);
    n.clear(c.b)
  }
  a = r;
  r = [];
  b = 0;
  for(d = a.length;b < d;b++) {
    g = a[b];
    c = 0;
    for(f = g.c.length;c < f;c++) {
      k = g.c[c](g.value), g.after && (k instanceof p ? v(k, g.after) : g.after.resolve(k))
    }
    n.clear(g.c);
    n.clear(g.b)
  }
}
function w() {
  -1 == s && (s = setTimeout(u, 0))
}
function v(a, b) {
  a.then(function(a) {
    b.resolve(a)
  }, function(a) {
    b.reject(a)
  })
}
p.prototype.reject = function(a) {
  this.a && (this.success = this.a = h, this.reason = a, q.push(this), w())
};
p.prototype.resolve = function(a) {
  this.a && (this.a = h, this.success = !0, this.value = a, r.push(this), w())
};
function x(a) {
  function b() {
    d = d.after = null
  }
  var d = a;
  a = new p;
  a.done(b);
  a.fail(b);
  return a
}
p.prototype.then = function(a, b) {
  this.done(a);
  b !== e && this.fail(b);
  this.after || (this.after = x(this));
  return this.after
};
p.prototype.done = function(a) {
  "function" == typeof a && (this.c.push(a), this.a || (this.success ? r.push(this) : q.push(this), w()))
};
p.prototype.fail = function(a) {
  "function" == typeof a && (this.b.push(a), this.a || (this.success ? r.push(this) : q.push(this), w()))
};
var y = "undefined" != typeof Function.prototype.bind;
function z(a, b) {
  return y ? b.bind(a) : function() {
    return b.apply(a, arguments)
  }
}
function A(a) {
  this.d = a
}
function B(a) {
  throw a;
}
function C() {
  var a = D;
  return function() {
    console.log("This is were arguments originally is defined");
    var b = new p;
    this.d.then(function(d) {
      var c = d[a];
      console.log("This is it ends up");
      c = c.apply(d, arguments);
      c instanceof p ? c.then(z(b, b.resolve), z(b, b.reject)) : c instanceof A ? c.d.then(z(b, b.resolve), z(b, b.reject)) : b.resolve(c);
      return c
    }, B);
    return new A(b)
  }
}
for(var D in jQuery.fn) {
  jQuery.fn.hasOwnProperty(D) && "function" == typeof jQuery.fn[D] && (A.prototype[D] = C())
}
;})();
