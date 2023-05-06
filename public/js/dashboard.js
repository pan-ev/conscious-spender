const totalExpenseCanvas = document.querySelector("#totalExpenseChart");
const categoryExpenseCanvas = document.querySelector("#categoryExpenseChart");

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

          }