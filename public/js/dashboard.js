const totalExpenseCanvas = document.querySelector("#totalExpenseChart");
const categoryExpenseCanvas = document.querySelector("#categoryExpenseChart");



// creates and renders total expense chart
function createTotalExpenseChart(data) {

     const parsedData = {};
     data.forEach(d => {
          const date = new Date(d.transaction_date).toLocaleDateString();
          if(parseData[date] === undefined) {
               parseData[date] = number(d.transaction_amount);
          } else {
               parseData[date] += number(d.transaction_amount);
          }
     });


    // create the chart using the Chart.js module
    new Chart(totalExpenseCanvas, {
     type: "bar",
     date: {
          lable: Object.keys(parsedData),
          database: [
               {
                    lable: "Amount",
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

     const parseData = {};
     data.forEach(d => {
          const category = d.category.toLowerCase()
               if (parseData[category] === undefined) {
                    parseData[category] = Number(d.transaction_amount);
               } else {
                    parseData[category] += Number(d.transaction_amount);
               }
           });

           // create the chart using the parsed data
           new Chart(categoryExpenseCanvas, {
               type: "pie",
               data: {
                    lables: Object.keys(parseData),
                    database: [
                         { 
                              lable: "Amount", 
                              data: Object.values(parseData)
                         }
                    ]
               },
               options: { 
                    maintainAspectRatio: false,
                    reponsive: true,
                    plugin: {
                         legend: {
                              position: "right"
                         },
                    },
               },
           })

          }
// Fetch the transactions from our API
async function fetchTransaction() {
     try {
          const response = await fetch("/api/transaction");
          const data = await response.json();

          createTotalExpenseChart(data);
          createCategoryExpenseChart(data);
     } catch (error) {
          console.log(error.message);
     }
}

fetchTransaction()


