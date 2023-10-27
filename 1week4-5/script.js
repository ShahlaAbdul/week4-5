// let text= " this is programming language";
// let netice = "this"
// function myfunction( text1, index=0){
//     for (let i = 0; i < text1.length; i++) {
//        if (text1(text1[i]===this)) {
//         return true;
//        }
//     }
//     return false;

// }
// console.log(myfunction(text,"5"))

// const text="programming"
// const array1=text.split("")
// console.log(array1)

// ?---------------------task12--------------------------------

// function myfunction2(text){
//     text= text.toString()
//      array2=[]
// for (let i = 0; i < text.length; i++) {
//     array2.push(text[i])

// }
// return array2

// }
// console.log(myfunction2(34803233))

// ?--------------------task13----------------------------

// function myfunction( text2){
//     text2= text2.toString()
//    let num_enboyuk=text2[0]
//     for (let i = 0; i < text2.length; i++) {
//         if (num_enboyuk < text2[i]) {

//             num_enboyuk=text2[i]

//         }
//     }
//     return num_enboyuk

// }
// console.log(myfunction(136389))

//?--------------- task14-------------------------------
// function myfunction( text2,){
//     text2= text2.toString()
//      let num_enkicik=text2[0]
//     for (let i = 0; i < text2.length; i++) {
//         if (num_enkicik>text2[i]) {
//             num_enkicik=text2[i]

//         }
//     }
//     return num_enkicik

// }
// console.log(myfunction(36389))


//? --------------------task15---------------
// function myfunction(text3) {
//     text3 = text3.toString()
//     const array1 = text3.split("")
//     console.log(array1);
//     let cem = 0
//     let hasil = 0
//     let ededi_orta = 0
//     for (let i = 0; i < text3.length; i++) {
//         cem = cem + parseInt(array1[i])
//         hasil = hasil * parseInt(array1[i])
//         ededi_orta = ededi_orta * parseInt(array1[i])


//     }
//      console.log(cem);
// }
// console.log(myfunction(3267812))


//? ----------------task16-----------------------


// function myfunction(num){
//     bolenler=0;
//     arr=[]
//     for (let i = 0; i < num; i++) {
//         if (num%i==0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// console.log(myfunction(8));



//? ------------------------task17------------------


// function myfunction(num){
//     bolenler=0;
//     let count=0

//     for (let i = 0; i <= num; i++) {
//         if (num%i==0) {
//            count++
//            }
//     }
//     return count
// }

// console.log(myfunction(4));


// ?-------------------------------task18------------

// function myfunction(num,sum,hasil,edediorta){

//     sum = 0
//     hasil = 1
//     edediorta=0
//     for (let i = 0; i <= num; i++) {
//         if (num%i==0) {
//             sum = sum + i
//             hasil = hasil * i
//             edediorta=(edediorta+i)/i
//         }

//     }
//     console.log(sum);
//         console.log(hasil);
//         console.log(edediorta);   
// }
// console.log(myfunction(8))

// ?----------------------19---------------------------

// function myfunction(num, vuruqlar) {
//       vuruqlar =[] 

//     for (let i = 0; i <= num; i++) {
//         if (num % i == 0) {
//                  vuruqlar.push(i)
//                  num= num/i     
//         }
//     }
//     return vuruqlar  
// }

// console.log(myfunction(20))

// ?-----------------------20------------------------
// function myfunction(num) {
//     let text1 = " bu eded ne sade ne murekkebdir"
//     let text2= "bu eded sadedir"
//     let text="bu eded murekkebdir"
//     if (num <= 1) {
//         return text1   
//     }
//     else if (num == 2) {
//         return text2
//     }
//     else if (num == 3 || num == 5 || num == 7 || num==13) { 
//         return text2
//         }
//     else   {
//         for (let i = 2; i < num; i++){
//             if (num % 2 == 0 || num % 3 == 0 || num%5==0 ||num%7==0) {   // 10a eder olan sade ededler bunlar oldugu ucun bunlari qeyd edirik
//                 return text
//             } 
//         } 
//     }  
// }
// console.log(myfunction(14));



// const arr=["Şəhla", "Zümrüd", "Samir", "Sona", "Qulam"]


// arr.forEach((x,i)=>console.log(x.toUpperCase(),i))21




// const arr=[1,2,3,4,5,6,7,8]
//     // arr.forEach(( x,i) =>x==3? console.log(x,i) :null) 


//     function foreachqrr(arr,cb){
//         const newAarr=[]
//         for (let i = 0; i< arr.length; i++) {    
//                 newarr.push(cb(arr[i],i,ar))

//         }
//         return newarr
//     }
//     mymap(arr,function(x) {x*=2})
//     console.log(mymap(arr,   x=>2//function(x){ x*2}))

//     const nearr=arr.filter(x)






// const arr1=[1,2,3,4,5,6,7,8,9,10]
// arr1.forEach((x,i )=> x%2!==0? console.log(x,i) :null)
// console.log("------------------------------------------------------------------------------------")

// const arr2=[1,2,3,4,5,6,7,8,9,10]
// arr2.forEach((x,i )=> x%2==0? console.log(x,i) :null)
// console.log("------------------------------------------------------------------------------------")

// const arr3=[1,2,3,4,5,6,7,8,9,10]
// arr3.forEach((x,i )=> i%2!==0? console.log(x,i) :null)
// console.log("------------------------------------------------------------------------------------")

// const arr4=[1,2,3,4,5,6,7,8,9,10]
// arr4.forEach((x,i )=> i%2==0? console.log(x,i) :null)
// console.log("------------------------------------------------------------------------------------")

// const arr5=[1,2,3,4,5,6,7,8,9,10]
// let max =arr5[0];
// arr5.forEach((x)=> x>max ? max=x :null);
// console.log(max)

// console.log("------------------------------------------------------------------------------------")

// const arr6=[1,2,3,4,5,6,7,8,9,10]
// let max1 =arr6[0];
// arr6.forEach((x)=> x<max1 ? max1=x :null);
// console.log(max1)

// console.log("-------------------------------------TASK32----------------------------------------------")

// const arr7=[1,2,3,4,5,6,7,8,9,10]
// let max2 =arr7[1];
// arr7.forEach((x)=>x%2==0 && x>max2 ? max2=x:null);

// console.log(max2)

// console.log("-------------------------TASK33-----------------------------------------------------------")
// const arr8=[1,2,3,4,5,6,7,8,9,10]
// let max3 =arr8[1];
// arr8.forEach((x)=>x%2==0 && x<max3 ? max3=x:null);

// console.log(max3)

// console.log("------------------------------------TASK34------------------------------------------------")
// const arr9=[1,2,3,4,5,6,7,8,9,10]
// let max4 =arr9[1];
// arr4.forEach((x)=>x%2!==0 && x<max4 ? max4=x:null);

// console.log(max4)

// console.log("-------------------------------------------TASK35-----------------------------------------")
// const arr10=[1,2,3,4,5,6,7,8,9,10]
// let max5 =arr10[1];
// arr5.forEach((x)=>x%2!==0 && x>max5 ? max5=x:null);

// console.log(max5)

// console.log("-------------------------------task36-----------------------------------------------------")


// const arr11=[1,2,3,4,5,6,7,8,9,10]
// let max11=arr11[0]
// arr11.forEach((x,i )=>{ x>max11? { x=max1 index= i}:null) console.log(max11,i)  
// console.log(max11,i)
// console.log("------------------------------------------------------------------------------------")

// const arr11=[1,2,3,4,5,6,7,8,9,10]
// let max11 =arr11[0];
// let indeks=0
// arr11.forEach((x)=>{
//     if (x<max11) {
//         max11=x
//         indeks=i

//     }
// }  )


// const arr11=[1,2,3,4,5,6,7,8,9,10]
// let max11 =arr11[0];
// let indeks=0
// arr11.forEach((x,i)=>{
//     if (x>max11) {
//         max11=x
//         indeks=i

//     }
// }  )



// console.log("----------task38--------------");

// const array14=[1,2,3,3,3,3,1]
// let max=array14[0]
// let sum=0
// array14.forEach((x) => {
//     if (x>max){
//         max=x
//     } 
//     else if (max==x) {
//         sum++;
//     } 

// })
// console.log(sum)


// console.log("----------task39--------------");

// const array14=[2,3,3,3,3,1]
// let max=array14[0]
// let sum=0
// array14.forEach((x) => {
//     if (x<max){
//         max=x
//     } 
//     else if (max==x) {
//         sum++;
//     } 

// })
// console.log(sum)


// console.log("----------task40--------------");

// const array14=[2,3,3,7,3,1]
// let max=array14[0]
// let maxindeks=0
// array14.forEach((x,i) => {
//     if (x>max){
//         max=x
//         maxindeks=i
//     }      
// })
// firstelement=array14[0];
// array14[0]=array14[maxindeks]
// array14[maxindeks]=firstelement

// console.log(array14)
//  console.log("----------task41--------------");

// const array14=[2,3,3,7,3,1]
// let min=array14[0]
// let minindeks=0
// array14.forEach((x,i) => {
//     if (x<min){
//         min=x
//         minindeks=i
//     }      
// })
// firstelement=array14[0];
// array14[0]=array14[minindeks]
// array14[minindeks]=firstelement

// console.log(array14)


const array = [2, 3, 1, 5, 6, 7, 8]
let max = -Infinity
let min = Infinity
let maxindex = 0
let minindex = 0
array.forEach((x, i) => {
    if (x < min) {
        min = x
        minindex = i
    }
    if (x > max) {
        max = x
        maxindex = i
    }
})
let minEl=array[minindex]
array[minindex] = array[maxindex]
array[maxindex] = minEl
console.log(array)














