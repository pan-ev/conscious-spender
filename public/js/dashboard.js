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
}