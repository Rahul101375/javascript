function multiplyNormal(x,y,z){
    return x*y*z;
}

function curry(x){
    return function(y){
        return function(z){
            return x*y*z;
        }
    }
}
let windstormCurry = curry(2)(3)
// console.log("curry",curry(2)(3)(4))
console.log("windstormCurry",windstormCurry(5))

function InfiniteCurry(x){
    return function(y){
        if(y) return InfiniteCurry(x*y);
        return x;
    }
}
console.log("infiniteCurry",InfiniteCurry(1)(2)(3)(4)(5)(6)(7)())
// () empty parameter is required to get value other it`s return a function

// using bind function curry impletion
function curryImplementationWithBind(a,b){
    return a*b;
}
const multipleByTwo = curryImplementationWithBind.bind(this,2);
// console.log("multipleByTwo",multipleByTwo()) NaN
// console.log("multipleByTwo",multipleByTwo) return function
console.log("multipleByTwo",multipleByTwo(2)) //4

// using closure to make curry function

function multipleByN(x){
    return function(y){
        return x*y;
    }
}
const multipleByFour = multipleByN(4);
console.log("multipleByFour",multipleByFour) // return function
console.log("multipleByFour",multipleByFour(9)) //36
console.log("multipleByFour",multipleByFour()) //NaN