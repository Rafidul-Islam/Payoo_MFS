const formContainer = document.querySelectorAll("#form-container > div");
const tabs = document.querySelectorAll("#tabs > button");
const accNumber = document.getElementById("");
const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const transactions = [];

class HistoryTemplate {
  constructor(transactionName) {
    this.transactionName = transactionName;
    this.time = new Date().toLocaleTimeString();
  }
}

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    const tabId = tab.id.replaceAll("-tab", "-form");
    formContainer.forEach((form) => {
      if (form.id === tabId) {
        document.getElementById(form.id).classList.remove("hidden");
      } else {
        document.getElementById(form.id).classList.add("hidden");
      }
    });
  });
});

const addMoney = () => {
  const transactionName = document.getElementById("add-money-tab").innerText;
  let currentBalance = document.getElementById("balance").innerText;
  const givenBalance = document.getElementById("adding-amount").value;

  if (givenBalance && givenBalance > 0) {
    const updatedBalance = parseInt(currentBalance) + parseInt(givenBalance);
    if (updatedBalance > 0) {
      document.getElementById("balance").innerText = updatedBalance;
      document.getElementById("adding-amount").value = "";
      const currentTransaction = new HistoryTemplate(transactionName);
      transactions.push(currentTransaction);
      sessionStorage.setItem("transactions", JSON.stringify(transactions));
    } else {
      alert("Insufficient funds");
    }

    console.log(updatedBalance);
  } else {
    alert("invalid input");
  }
};

const withdrawMoney = () => {
  const transactionName = document.getElementById("cash-out-tab").innerText;
  let currentBalance = document.getElementById("balance").innerText;
  const givenBalance = document.getElementById("cash-out-amount").value;

  if (givenBalance && givenBalance > 0) {
    let updatedBalance = parseInt(currentBalance) - parseInt(givenBalance);
    if (updatedBalance > 0) {
      document.getElementById("balance").innerText = updatedBalance;
      document.getElementById("cash-out-amount").value = "";
      const currentTransaction = new HistoryTemplate(transactionName);
      transactions.push(currentTransaction);
      console.log(transactions);
      sessionStorage.setItem("transactions", JSON.stringify(transactions));
    } else {
      alert("Insufficient funds");
      updatedBalance = parseInt(currentBalance);
    }

    console.log(updatedBalance);
  } else {
    alert("invalid input");
  }
};

const transferMoney = () => {
  const transactionName =
    document.getElementById("transfer-money-tab").innerText;
  let currentBalance = document.getElementById("balance").innerText;
  const givenBalance = document.getElementById("transfer-amount").value;

  if (givenBalance && givenBalance > 0) {
    let updatedBalance = parseInt(currentBalance) - parseInt(givenBalance);
    if (updatedBalance > 0) {
      document.getElementById("balance").innerText = updatedBalance;
      document.getElementById("transfer-amount").value = "";
      const currentTransaction = new HistoryTemplate(transactionName);
      transactions.push(currentTransaction);
      console.log(transactions);
      sessionStorage.setItem("transactions", JSON.stringify(transactions));
    } else {
      alert("Insufficient funds");
      updatedBalance = parseInt(currentBalance);
    }

    console.log(updatedBalance);
  } else {
    alert("invalid input");
  }
};

const getBonus = () => {
  const transactionName = document.getElementById("get-bonus-tab").innerText;
  let currentBalance = document.getElementById("balance").innerText;
  const coupon = document.getElementById("coupon").value;

  if (coupon === "EID26") {
    let updatedBalance =
      parseInt(currentBalance) + parseInt(currentBalance) * 0.5;
    if (updatedBalance >= 0) {
      document.getElementById("balance").innerText = updatedBalance;
      document.getElementById("coupon").value = "";
      const currentTransaction = new HistoryTemplate(transactionName);
      transactions.push(currentTransaction);
      console.log(transactions);
      sessionStorage.setItem("transactions", JSON.stringify(transactions));
    } else {
      alert("Insufficient funds");
      updatedBalance = parseInt(currentBalance);
    }

    console.log(updatedBalance);
  } else {
    alert("invalid input");
  }
};

const createhistoryCard = (transactionName) => {
  const card = document.createElement("div");
  card.innerHTML = `
              <div
                class="history-card bg-white py-4 px-2 rounded-xl flex items-center justify-start gap-2"
              >
                <div class="img-div p-2 bg-[#080808] rounded-[50%]">
                  <img src="../assets//opt-1.png" alt="" />
                </div>
                <div class="history-card-title">${transactionName}</h2>
                  <p class="time text-xs">${days[new Date().getDay()] + " at " + new Date().toLocaleTimeString()}</p>
                </div>
              </div>
  
  `;
  document.getElementById("transaction-form").appendChild(card);
};

const renderHistory = () => {
  let transactions = sessionStorage.getItem("transactions");
  if (transactions) {
    let parsedTransactions = JSON.parse(transactions);
    parsedTransactions.forEach((transaction) => {
      createhistoryCard(transaction.transactionName);
    });
  }
};

document.getElementById("add-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  addMoney();
});
document.getElementById("cash-out-btn").addEventListener("click", (e) => {
  e.preventDefault();
  withdrawMoney();
});

document.getElementById("transfer-money-btn").addEventListener("click", (e) => {
  e.preventDefault();
  transferMoney();
});

document.getElementById("get-bonus-btn").addEventListener("click", (e) => {
  e.preventDefault();
  getBonus();
});

document.getElementById("transaction-tab").addEventListener("click", (e) => {
  e.preventDefault();
  renderHistory();
  console.log("Hello");
});
