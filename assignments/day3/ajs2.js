var m;

function myfun(){

    Object.defineProperty(this,"length", {
        writable:true,
        //writable means we can re write it.
        enumarable:false,
        //resist the iteration thats why we take that as false
   
    })  


    for(let i=0;i<arguments.length;i++){

        this[i]=arguments[i];
        this.length=arguments.length;

    

    
    };
    m=(arguments.length)

}

let obj= new myfun("kiran",'kumar','bannu','vijay');





myfun.prototype.p=function(x){

    

    var index=arguments.length

    this[m]=x;
   


}
obj.p("venkat")

myfun.prototype.empt=function(){

   var index=m;

   delete this[m]
   



}








obj.empt()


// myfun.prototype.reverse=function(){
// while(m-1>=0){
//     var m=this.length
//         this[i]=arguments[i]
//         this.length=arguments.length
       
//      m--
    
//     }
// }


// obj.reverse()


console.log(Object.values(obj))