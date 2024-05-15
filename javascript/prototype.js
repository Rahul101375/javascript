function eggDrop(n, k)
{
    let dp = new Array();
 
    for(let i = 0; i < k + 1; i++){
        dp.push(new Array(n + 1).fill(0))
    }
 
    let x = 0;

    while (dp[x][n] < k) {
 
        x++;
        for (let i = 1; i <= n; i++)
            dp[x][i] = dp[x - 1][i - 1] + dp[x - 1][i] + 1;
    }
    return x;
}

function checkGreater(a,b){
    return a > b
}
function checkLessThen(a,b){
    return a < b;
}
function checkEqual(a,b){
    return a==b;
}
function checkNotEqual(a,b){
    return a != b;
}
function checkEqualWithDataType(a,b){
    return a ===b;
}
function checkNotEqualWithDataType(a,b){
    return a !==b
}

Object.prototype.eggDrop;
Object.prototype.checkGreater;
Object.prototype.checkLessThen;
Object.prototype.checkNotEqual;
Object.prototype.checkEqual;
Object.prototype.checkEqualWithDataType;
Object.prototype.checkNotEqualWithDataType;