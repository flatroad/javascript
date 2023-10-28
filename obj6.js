var o = 
{
    v1:'v1',
    v2:'v2',
    f1:function ()
    {
        console.log(o.v1);
    },
    f2:function ()
    {
        console.log(o.v2);
    }
}

console.log(o.v1);
console.log(o.v2);
console.log("\n");
console.log(o.f1);
console.log(o.f2);
o.f1();
o.f2();

var k = o;

k.v1 = 'a';
k.v2 = 'b';

o.f1();
o.f2();
