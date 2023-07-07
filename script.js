// Sample data to populate the table initially
const records = [
  { playerName: 'Player1', recordDistance: 120 },
];

// Function to add a new record to the table
function addRecord(event) {
  event.preventDefault();

  const playerNameInput = document.getElementById('player-name');
  const recordDistanceInput = document.getElementById('record-distance');

  const playerName = playerNameInput.value;
  const recordDistance = recordDistanceInput.value;

  // Create a new row for the record
  const newRow = document.createElement('tr');

  // Create cells for player name and record distance
  const playerNameCell = document.createElement('td');
  playerNameCell.textContent = playerName;

  const recordDistanceCell = document.createElement('td');
  recordDistanceCell.textContent = recordDistance;

  // Append cells to the new row
  newRow.appendChild(playerNameCell);
  newRow.appendChild(recordDistanceCell);

  // Append the new row to the table body
  const recordList = document.getElementById('record-list');
  recordList.appendChild(newRow);

  // Clear input fields
  playerNameInput.value = '';
  recordDistanceInput.value = '';
}

// Attach the addRecord function to the form submit event
const recordForm = document.getElementById('record-form');
recordForm.addEventListener('submit', addRecord);

// Populate the table initially with the sample data
const recordList = document.getElementById('record-list');
records.forEach(record => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${record.playerName}</td>
    <td>${record.recordDistance}</td>
  `;
  recordList.appendChild(newRow);
});
