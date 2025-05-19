// IEX Cloud API key
const apiKey = 'pk_93314f7380f94e4dadf04de408b3ed77';

// Stock symbols for different companies
const stockSymbols = [
  'AAPL', 'ASML', 'NVDA', 'TSLA', 'STC', 'ALMARAI', 'AQUA', '005930', '6758'
];

// Initialize an empty array to hold chart instances
const charts = [];

// Fetch and update data for all stocks
async function fetchAndUpdateData() {
  for (const symbol of stockSymbols) {
    await fetchData(symbol);
  }
}

// Calculate earnings percentage
function calculateEarningsPercentage(data) {
  const initialPrice = data[0];
  const currentPrice = data[data.length - 1];
  const earnings = currentPrice - initialPrice;
  const percentage = (earnings / initialPrice) * 100;
  return percentage.toFixed(2);
}

// Function to fetch and update data for a stock
async function fetchData(symbol) {
  const apiUrl = `https://cloud.iexapis.com/stable/stock/${symbol}/chart/6m?token=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const timestamps = data.map(entry => entry.date);
    const stockData = data.map(entry => entry.open);

    updateChart(symbol, timestamps, stockData);
  } catch (error) {
    console.error(`Error fetching data for ${symbol}:`, error);
  }
}

// Function to update the chart and earnings box
function updateChart(symbol, labels, data) {
  const ctx = document.getElementById('stockChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: symbol,
        data: data,
        borderColor: getRandomColor(),
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        title: {
          display: true,
          text: 'Real-Time Stock Market Chart'
        }
      }
    }
  });

  charts.push(chart);

  // Update earnings box
  const earningsBox = document.getElementById('earningsBox');
  const earningsPercentage = calculateEarningsPercentage(data);
  earningsBox.innerHTML = `${symbol}: ${earningsPercentage}% Earnings`;
}

// Generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to create buttons for each stock symbol
function createStockButtons() {
  const buttonsContainer = document.getElementById('stockButtons');

  for (const symbol of stockSymbols) {
    const button = document.createElement('button');
    button.textContent = symbol;
    button.addEventListener('click', () => handleStockButtonClick(symbol));
    buttonsContainer.appendChild(button);
  }
}

// Function to handle stock button clicks
function handleStockButtonClick(symbol) {
  fetchData(symbol);
}
// Function to update the chart and earnings box
function updateChart(symbol, labels, data) {
	const ctx = document.getElementById('stockChart').getContext('2d');
        
	// Clear the previous chart instance
	if (charts.length > 0) {
	  charts[0].destroy();
	  charts.shift();
	}
        
	const chart = new Chart(ctx, {
	  type: 'line',
	  data: {
	    labels: labels,
	    datasets: [{
	      label: symbol,
	      data: data,
	      borderColor: getRandomColor(),
	      borderWidth: 2,
	      fill: false
	    }]
	  },
	  options: {
	    responsive: true,
	    interaction: {
	      mode: 'index',
	      intersect: false
	    },
	    plugins: {
	      title: {
	        display: true,
	        text: 'Real-Time Stock Market Chart'
	      }
	    }
	  }
	});
        
	charts.push(chart);
        
	// Update earnings box
	const earningsBox = document.getElementById('earningsBox');
	const earningsPercentage = calculateEarningsPercentage(data);
	earningsBox.innerHTML = `${symbol}: ${earningsPercentage}% Earnings`;
        }
        

// Call the function to create stock buttons on page load
createStockButtons();

// Fetch and update data for all stocks on page load
fetchAndUpdateData();
// this is the end of the stcok chart js!!!!

// start of  websocket chatter
let socket = new WebSocket("ws://javascript.info");

// Initialize DatePicker
const datePicker = new Datepicker(document.getElementById('datepicker'), {
  format: 'dd/mm/yyyy HH:ii',
  autoclose: true,
  todayHighlight: true,
});

// Handle scheduling when the "Schedule" button is clicked
document.getElementById('schedule-appointment').addEventListener('click', function () {
  const selectedDate = datePicker.getDate();
  
  // You can send this selectedDate to your backend for further processing
  // For now, we'll just display an alert with the selected date and time
  alert('Appointment Scheduled\nDate and Time: ' + selectedDate);
});




function sendMessage() {
  // Get the user's message from the input field
  const messageInput = document.querySelector('.message-input');
  const userMessage = messageInput.value;

  if (userMessage.trim() === '') {
    return; // Prevent sending empty messages
  }

  // Create a new list item to display the user's message
  const messageList = document.getElementById('message-list');
  const listItem = document.createElement('li');
  listItem.textContent = userMessage;
  listItem.classList.add('user-message'); // You can style user messages differently

  // Append the new message to the message list
  messageList.appendChild(listItem);

  // Clear the input field after sending the message
  messageInput.value = '';
}
