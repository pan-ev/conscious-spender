const totalExpenseCanvas = document.querySelector("#totalExpenseChart");
const categoryExpenseCanvas = document.querySelector("#categoryExpenseChart");

// creates and renders total expense chart
function createTotalExpenseChart(data) {
 
     const parsedData = {};
     data.forEach(d => {
       
         const date = new Date(d.transaction_date).toLocaleDateString();
     
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
 
     const parsedData = {};
   
     data.forEach(d => {
         const category = d.category.toLowerCase()
        
         if (parsedData[category] === undefined) {
             parsedData[category] = Number(d.transaction_amount);
         } else {
           
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
   
     try {
         const response = await fetch("/api/transactions");
         const data = await response.json();
 
       
         createTotalExpenseChart(data);
         createCategoryExpenseChart(data);
     } catch (error) {
    
         console.log(error.message);
     }
 }
 
 fetchTransactions()