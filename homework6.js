var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

var result = [];

var regex = /^[a-z0-9]+(\.[a-z0-9]+)?@(gmail\.com|yahoo\.com)$/i;

for (var i = 0; i < arr.length; i++) {
    if (regex.test(arr[i].email)) {
        result.push(arr[i].email);
    }
}

console.log(result);