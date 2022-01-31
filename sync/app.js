
let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings: ["chokolate", "peanuts"],
}

let order = (Fruit_name, call_production)=>{

    setTimeout(() => {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`)

    }, 2000);
    call_production();

}

let production = () =>{

    setTimeout(()=> {
        console.log("production has started");

        setTimeout(() => {
            console.log("the fruite has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added` );



                setTimeout(() => {
                    console.log("Machine was started");

                    setTimeout(()=> {
                        console.log(`${stocks.holder[0]} was selected`);

                        setTimeout(() => {
                            console.log(`${stocks.toppings[0]} was addedas toppings`);

                            setTimeout(() => {

                            }, 2000)
                        }, 3000)
                    }, 1000);
                }, 1000);

            }, 1000)
        }, 2000);

    }, 0000);
};

order("", production);