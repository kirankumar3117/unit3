// var cat={
//     legs:'4',
//     tail:true,
//     mostatch:"yes",
// }

// var tigar=Object.create(cat);
// tigar.speed="60";
// tigar.tail=false;
// console.log('tigar:',tigar)

// console.log(tigar.hasOwnProperty("mostatch"))
// console.log(tigar.hasOwnProperty("speed"));
// console.log(Math.round(Math.random()*10))

// function news(m){
//     this.name="Kumar Publications";
//     this.earns_money=m;
//     this.Date= new Date();

// }
// news.prototype.ad=function(){
//     console.log("50% off on food")
// }
// let king= new news("36434");
// console.log(king)

// king.ad();


// let k=new Array(1,2,3);
// console.log(k)
// let p=new String("kiran");
// console.log(p)

// let hello=new myfun("amma","nanna","thammudu","chelli");


function myfun(){

    Object.defineProperty(this,"length", {
        writable:true,
        //writable means we can re write it.
        enumarable:false,
        //resist the iteration thats why we take that as false
    })
    for(let i=0;i<arguments.length;i++){
    this[i]=arguments[i]
      
    this.length=arguments.length;
    }
}
let hello=new myfun("amma","nanna","thammudu","chelli");


myfun.prototype.my=function (x){
    let index=this.length-1;
    delete this[index]
   
}
hello.my();
    console.log(Object.values(hello))

