    //synchoronous
    //jo sequence program me ha uk k according hi code run hoga har instruction pichli insctruction ka wait kare gi to run 
    console.log("1");
    console.log("2");
    console.log("3");//ab 1 2 3 print hoga becoz code kasequence ye ha
     
                 
 
                function  hello(){
                    console.log("hello");
                  };
                  //settimeout is callback isne hello(dosra function) as argument lia ha
                  setTimeout(hello,5000)//is se funtion ne kab execute hona ha usko decide krsakte ha...time decide krsakte
                             //2s=2000ms timeout me miliseconf=d me time dete ha
                             //hello function 2s k bad execute hoga
                             console.log("4");
                             console.log("5");
                              //asyncronous programming
// asyncronous programming me code ksi or ka wait nhi krta jo chiz time le gi execute hone me usko side krk dosri chize chala do ui me delay na ho
                                           
                                         //callback//
function sum(a,b){
    console.log(a+b);
}
function calculator(a,b,sumcallback){
    sumcallback(a,b)

}
//call function calculator
calculator(3,6,sum);//sum ko dosre function me as aargument pass kia ha is liye sum is callback
       
                                      //callback hell//
    //nesting ki waja se callback hell ki problem aati ha
    //
    function getdata(dataid,getnextdata){
        setTimeout(()=>{
            console.log("data",dataid);
            if(getnextdata){
                getnextdata();
            }
        },5000)
        }
        //ab hame data1,data2,data3 teeno in sequence chaiye

        //callback hell
        getdata(1 ,() => {
            getdata(2,()=>{
                getdata(3,()=>{
                    getdata(4)
                })//ik dosre k andar arrow function se callback dal dena ha to get data baribari with 2seconf difference
            });

        });//ab in data 1,2,3 ko bari bari print krne k or search krne k liye in function me ik or callback krna pare ga
        
//jab instagram me login krte ha to pehle username dalte ha phir password search krte ha
//callback hell ko samjna bht mushkil ha usko solve krne k liye promises use hote ha
                                     
                                            //promises//
  //promise  me jo code ha wo promise de ga k ya to kam eventually hoga ya cancel hoga ...like in online shopping
  let promise =new Promise((resolve,reject) =>{//resolve=code successful.....reject=code me error ha
        console.log("i am promise");
        resolve(123);
        reject("some error")
  })  ;                                        

  function viewdata(dataid,getnextdata){//ye function hamey data return karey ka in the form of promise after 5second
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("dataid",dataid);
            resolve("sucess");//agar data nhi bhejna hoga to resolve ki jaga reject likhe ge phir promise print kaareye ge to status reject hpga
            if(getnextdata){
                getnextdata();
            }

        },5000);
    });
    
   // promise ka data print hone k bad promise ka status fullfilled hpga  warna pending hpga
  };//promise ya to pending(result undefined) hota ha ya rejected(error in result) ya resolved(fullfilled)
                                              
    //general programming me sirf promises ko handle krna hotav ha 
    
    
 
        //api hamey ik promise return krta ha or usme data hota ha 
                                                          
                                                 //how to use promise
                                                 //promise ko fullfill karane k bad kam karana ho to promise.then use hoga
                                                 // //promise ko reject  karane k bad kam karana ho to promise.catch use hoga
                       //promise.then
                     const getpromise=()=>{
                      return   new Promise((resolve,reject) =>{
                            console.log("i am promise");
                            resolve("sucesss");//promise resolve horha ha
                            
                      })  ;       
                     };
                     let promise2=getpromise();
                     promise.then((res)=>{
                        console.log('promise resolves',res);
                     });

                    console.log(promise2);//pehle i am promise print hoga then after fullfulling promise promise resolves print hoga

                      //promise.catch
                      
                       let promise22=getpromise();
                       promise.catch((err)=>{
                          console.log('promise rejected',err);
                       });
  
                      console.log(promise22);//pehle i am promise print hoga then after rejecting promise promise reject print hoga
                      




                        //promise chain
           const ayncfunction=()=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log("data1 ");
                    resolve("sucess");
                },4000);
              
            });//ye function 4 second bad ye promise return kare with with message
           }
           console.log("data1 is being fetched ");
           let p1=ayncfunction();
           p1.then((res)=>{
            console.log(res)
           })
           const ayncfunction2=()=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log("data 2");
                    resolve("sucess");
                },4000);
              
            });//ye function 4 second bad ye promise return kare with with message
           }
           console.log("data2 is being fetched ");
           let p2=ayncfunction2();
           p2.then((res)=>{
            console.log(res)         //ayuns and aync 2 ka data ik sath fetch hoga 
                                    //but hamey chaiye k bari bari data fetch ho is liye promise chain use hogi
           })
                                //promise chain
                                // //but hamey chaiye k bari bari data fetch ho is liye promise chain use hogi
                                const ayncfunction3=()=>{
                                    return new Promise((resolve,reject)=>{
                                        setTimeout(()=>{
                                            console.log("data1 ");
                                            resolve("sucess");
                                            
                                        },4000);
                                      
                                    });
                                   }
                                   const ayncfunction4=()=>{
                                    return new Promise((resolve,reject)=>{
                                        setTimeout(()=>{
                                            console.log("data 2");
                                            resolve("sucess");
                                        },4000);
                                      
                                    });//ye function 4 second bad ye promise return kare with with message
                                   }
                                   console.log("data3 is being fetched ");
                                   let p3=ayncfunction3();
                                   p3.then((res)=>{
                                    console.log(res);
                                    console.log("data4 is being fetched ");//proise then k andar ik or then is promise chain
                                   let p4=ayncfunction4();
                                   p4.then((res)=>{
                                    console.log(res)        })
                                   })
                                   //understand promise again from anthother video 
                                   //promise chain is also difficult to understand to we use aync await
                                   //sab se call and call hell samja then us se better tha promise and promise chain 
                                   //ab us e better ha aync await
                                   //aync await>promise,promise chian>call and callback hell


                                         //aync await
              //asunync simple krta ha syuncrous programming ko
              //async return promise
              //await kisi us function k sath lagaya ha jab function call ho or wo function promise 
              //return kare ga to await baqi sab excution rok de ga
              //jab tak promise settle na ho
              //await sirf ayncs function me j=hi use hoga or surrouding ki excution rok dega
              function api(){
                
                    return new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            console.log("weather of city");
                            resolve(2000);//2000 success k liye use hota 
                        },2000);

                    })
                }
              
        async function getweather(){ //await sirf async function me use hota ha is liye is k liye alag function bna para
    /*    first call   */ await api();//calling api function ...await lagane k liye isko async me dala ha
    /*    second call   */await api();
}
//call getweather function
   getweather();
   function showdata(id){
    setTimeout(()=>{
        console.log("hey this is big data",id);
    },7000);
   }
  async function shownewdata(){
    await showdata(1200);
  }



                                   //IIFE immediately invoked  functionn expression
                                    //ye jaise hi defined hota ha waise hi foran call hojata
                                    //iska nam ni hota
                                    //you dont need to call them
                                    //()();
                                    //for example
                                  (  async function (){
                                        await showdata(1200);
                                      })()//function with no name and no need to call
                                      
                                    
                            
                                   