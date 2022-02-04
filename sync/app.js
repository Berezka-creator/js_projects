
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings: ["chokolate", "peanuts"],
}

let is_shop_open = true;

//finall code for ice cream shop

function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            
        }
    })
}

//async

let toppings_choice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                console.log("WHich topping would you like")
            )
           
        }, 3000);
    });
};

async function kitchen(){
    console.log("A");
    console.log("B");
    console.log("C");

    await toppings_choice();

    console.log("D");
    console.log("E");
}

kitchen()
console.log("Clearning the tables");
console.log("Doing dishes");
console.log("Picking others orders");




//PROMISE
let order = (time, work) => {
    return new Promise((resolve, reject) => {

        if(is_shop_open){
            setTimeout(() => {
                resolve( work() );

            }, time);
        }else{
            reject(console.log("Our shop is closed"));
        }
    }
}

order(2000, () => console.log("Prod has started"))
.then(() => {
    return order(0000, () => console.log('Cut fruits'))
})
.then(() => {
    return order(1000, () => console.log("Add toppings"))
})
.then(() => {
    return order(1000, () => console.log("Add ice"))
})
.then(() => {
    return order(1000, () => console.log("Add chocoltate"))
})
.catch(() => console.log("Customer left"))
.finally(() => consolee.log("Our shop is closed"));

//Example ASYNC/await
//we have to declare async key word
async function order(){
    try{
        await abc();//fake function
    }
    catch(error){
        console.log("error");
    }finally{
        console.log("runs code anyways");
    }
}

order();




// let order = (Fruit_name, call_production)=>{
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//     }, 2000);
//     call_production();
// }

// let production = () =>{

//     setTimeout(()=> {
//         console.log("production has started");

//         setTimeout(() => {
//             console.log("the fruite has been chopped");

//             setTimeout(() => {
//                 console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added` );

//                 setTimeout(() => {
//                     console.log("Machine was started");

//                     setTimeout(()=> {
//                         console.log(`${stocks.holder[0]} was selected`);

//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} was addedas toppings`);

//                             setTimeout(() => {

//                             }, 2000)
//                         }, 3000)
//                     }, 1000);
//                 }, 1000);
//             }, 1000)
//         }, 2000);
//     }, 0000);
// };

// order("", production)
