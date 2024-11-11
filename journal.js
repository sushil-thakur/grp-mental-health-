 // Function to save data
 document.getElementById('journaling-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    const date = document.getElementById('journal-date').value;
    const entry = document.getElementById('journal-entry').value;
  
    if (date && entry) {
      saveJournalEntry(date, entry);
      alert("Journal entry saved.");
      document.getElementById('journaling-form').reset(); // Clear the form
    } else {
      alert("Please fill in both the date and the entry.");
    }
  });
  
  // Function to save journal entry to local storage
  function saveJournalEntry(date, entry) {
    const journalData = JSON.parse(localStorage.getItem('journalEntries')) || [];
  
    journalData.push({ date, entry });
    localStorage.setItem('journalEntries', JSON.stringify(journalData));
  }
  
  // Function to display saved data
  function displaySavedData() {
    const displayContainer = document.getElementById("display-container");
    const journalEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
  
    displayContainer.innerHTML = "<h2>Saved Journal Entries</h2>";
  
    if (journalEntries.length > 0) {
      journalEntries.forEach((entry, index) => {
        displayContainer.innerHTML += `<p>${index + 1}. Date: ${entry.date}, Entry: ${entry.entry}</p>`;
      });
    } else {
      displayContainer.innerHTML += "<p>No journal entries found.</p>";
    }
  }
  fetch('navbar.html')
          .then(response => response.text())
          .then(data => {
              document.getElementById('navbar').innerHTML = data;
          });