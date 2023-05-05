const transactionFormHandler = async (event) => {
  event.preventDefault();

  const transaction_amount = document
    .querySelector("#inputAmount")
    .value.trim();
  const transaction_date = document.querySelector("#inputDate").value.trim();
  const vendor_name = document.querySelector("#inputPayee").value.trim();
  const category = document.querySelector("#inputCategory").value.trim();
  const transaction_description = document
    .querySelector("#inputDescription")
    .value.trim();

  if (transaction_amount && transaction_date && vendor_name && category) {
    const response = await fetch("/api/transactions", {
      method: "POST",
      body: JSON.stringify({
        transaction_amount,
        transaction_date,
        vendor_name,
        category,
        transaction_description,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Missing required field");
    }
  }
};

document
  .querySelector(".transaction-form")
  .addEventListener("submit", transactionFormHandler);
