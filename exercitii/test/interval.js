var myFunction = function ( text, inteval) {
    var i = 1,
        inte = inteval * 1000;

    var int = setInterval( function () {
        console.log(text + ' at ' + i )
        i++;
    }, inte);

    setTimeout( function () {
        clearInterval(int);
    }, 13000);
};

myFunction('heloo',1);