// RAW transactions data 

const rawTransactionDataJSON = `[
  {"id": "TXN_001", "item": "Mechanical Keyboard", "price": 90.00, "currency": "USD", "tax": 4.50, "shipping": 5.00, "status": "completed"},
  {"id": "TXN_002", "item": "Designer Shoes", "price": 120.00, "currency": "EUR", "tax": 6.00, "shipping": 12.00, "status": "completed"},
  {"id": "TXN_003", "item": "Wireless Mouse", "price": 35.00, "currency": "USD", "tax": 1.75, "shipping": 2.50, "status": "fraud"},
  {"id": "TXN_004", "item": "Backpack", "price": 75.00, "currency": "EUR", "tax": 3.75, "shipping": 8.00, "status": "completed"},
  {"id": "TXN_005", "item": "Sticker Pack", "price": 5.00, "currency": "USD", "tax": 0.25, "shipping": 0.00, "status": "cancelled"}
]`;

// main actual function 

function financialTransactionData(rawJson){

    
    let parsedTransactions = [];
// step 1 run the try catch to catch the error from the json 
    try{
       
        parsedTransactions =JSON.parse(rawJson);

    }catch(error){
         
       return {error:"Failed to parse transaction engine data: Corrupt JSON."};

    }


    // step2 use filter method 

    const filteringOutTheOdd = parsedTransactions.filter(txn =>{
        return txn.status === "completed";
           
    });


    // step3 use the map method to implement the foriegn exchange

    const usdTransactions = filteringOutTheOdd.map(txn => {

        const isEur = txn.currency === "EUR";
        const rate = isEur ? 1.10 : 1.00 ;

        return{
            ...txn,
            price: txn.price * rate,
            tax : txn.tax * rate,
            shipping : txn.shipping * rate,
            currency: "USD" //default

        };

    });
    

    // reduce method

    const initialDashboard = { totalNetRevenue: 0, totalTaxes: 0, totalShipping: 0 };

    const financialDashboard = usdTransactions.reduce((dashboard,txn) => {

        dashboard.totalNetRevenue += txn.price;
        dashboard.totalTaxes += txn.tax;
        dashboard.totalShipping += txn.shipping;

        return dashboard;

    },initialDashboard);


        return {
        totalNetRevenue: Number(financialDashboard.totalNetRevenue.toFixed(2)),
        totalTaxes: Number(financialDashboard.totalTaxes.toFixed(2)),
        totalShipping: Number(financialDashboard.totalShipping.toFixed(2)),
        processedCount: usdTransactions.length
    };

}



console.log("--- FINANCIAL DASHBOARD REPORT ---");
console.log(financialTransactionData(rawTransactionDataJSON)); 