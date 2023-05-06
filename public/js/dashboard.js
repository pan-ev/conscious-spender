const totalExpenseCanvas = document.querySelector("#totalExpenseChart");
const categoryExpenseCanvas = document.querySelector("#categoryExpenseChart");

// creates and renders total expense chart
function createTotalExpenseChart(data) {
     // we need to parse only 
     // the required fields from the data
     const parsedData = {};
     data.forEach(d => {
         // convert the transaction_date to a Date object
         const date = new Date(d.transaction_date).toLocaleDateString();
         // check if parsedData already has the date
         // if true, add the amount to the already existing date
         // if false, set the date in parsedDate,
         if (parsedData[date] === undefined) {
             parsedData[date] = Number(d.transaction_amount);
         } else {
             parsedData[date] += Number(d.transaction_amount);
         }
     });
 
     // create the chart using the Chart.js module
     new Chart(totalExpenseCanvas, {
         type: "bar",
         data: {
             labels: Object.keys(parsedData),
             datasets: [
                 {
                     label: "Amount",
                     data: Object.values(parsedData),
                     borderWidth: 1,
                 }
             ]
         },
         options: {
             scales: {
                 y: {
                     beginAtZero: true,
                 }
             }
         }
     });
 }
 
 // creates and renders category expense chart
 function createCategoryExpenseChart(data) {
     // here, we need to create key-value pair of category-amount
     const parsedData = {};
     // loop through the data and parse the required field
     data.forEach(d => {
         const category = d.category.toLowerCase()
         // if no already existing data in parsedData, create a new one
         if (parsedData[category] === undefined) {
             parsedData[category] = Number(d.transaction_amount);
         } else {
             // add the amount to the already existing key in parsedData
             parsedData[category] += Number(d.transaction_amount);
         }
     });
 
     // create the chart using the parsed data
     new Chart(categoryExpenseCanvas, {
         type: "pie",
         data: {
             labels: Object.keys(parsedData),
             datasets: [{ label: "Amount", data: Object.values(parsedData) }],
         },
         options: {
             maintainAspectRatio: false,
             responsive: true,
             plugins: {
                 legend: {
                     position: "right",
                 },
             },
         },
     })
 
 }
 
 
 // Fetch the transactions from our API
 async function fetchTransactions() {
     // using trycatch block to catch any errors
     try {
         const response = await fetch("/api/transactions");
         const data = await response.json();
 
         // create charts using the data returned from the API
         createTotalExpenseChart(data);
         createCategoryExpenseChart(data);
     } catch (error) {
         // log the error message to the console
         console.log(error.message);
     }
 }
 
 fetchTransactions()