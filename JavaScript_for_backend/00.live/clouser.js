function a1(){
    var n1 = 10;
    console.log(n1);
    function a2(){
        var n2 = 20; 
        console.log(n2);
        function a3(){
            var n3 = 30;
            console.log(n1,n2,n3);
        }
        return a3;
    }
    return a2;
}

var c1 =  a1();
var c2 = c1();
c2();



function a1(){
    var n1 = 10;
    console.log(n1);
    function a2(){
        var n2 = 20; 
        console.log(n2);
        function a3(){
            var n3 = 30;
            console.log(n1);
            console.log(n2);
            console.log(n3);
        }
        a3();
    }
    a2();
}
a1();




