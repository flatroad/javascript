var f = function ()
{
    console.log(1 + 1);
    console.log(1 + 2);
}


var a = [f];
console.log(a[0]);
a[0]();


var o =
{
    func:f
}

console.log(o.func);
o.func();