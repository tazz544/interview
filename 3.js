let y = 1;
if (function f() {}) {
    y += typeof f;
}

console.log(y);























// Above code would give output 1undefined. If condition statement evaluate using
// eval so eval(function f() {}) which return function f() {} which is true so
// inside if statement code executes. typeof f return undefined because if
// statement code executes at run time, so statement inside if condition evaluated
// at run time.
