// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// class Student extends Person {
//     constructor(name, branch) {
//         super(name);
//         this.branch = branch;
//     }
// }

// let obj1 = new Person("dev");
// console.log(obj1.name);


class A {
    constructor(v1,v2) {
        this.v1 = v1;
        this.v2 = v2;
    }
    method_1(){
        console.log("method 1");
    }
    static method_3(){
        console.log("method 3");
    }
}
class B extends A {
    constructor(v1,v2,v3) {
        super(v1,v2);
        this.v3 = v3;
    }
    method_2(){
        console.log("method 2");
    }
}
class C extends B{
    constructor(v1,v2,v3,v4,v5){
        super(v1,v2,v3);
        this.v4 = v4;
        this.v5= v5;
    }
}
var obj5 = new C(10,20,30,40,50);
console.log(obj5);
obj5.method_1();
obj5.method_2();
A.method_3();





