var roles =
{
    'programmer' : 'egoing',
    'designer' : 'k8805',
    'manager' : 'hoya'
}

console.log(roles.designer);
console.log(roles['designer']);

for (var ldd in roles)
{
    console.log('object => ', ldd);
}