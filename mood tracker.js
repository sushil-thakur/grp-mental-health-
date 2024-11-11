// Function to submit the form and show video
function submitForm() {
    const date = document.getElementById('date').value;
    const mood = document.querySelector('input[name="mood"]:checked').value;
    const entry = document.getElementById('entry').value;

    if (!date || !mood || !entry) {
        alert('Please fill all the fields before submitting.');
        return;
    }

    saveData(date, mood, entry);
    displayTips(mood);
    displayVideo(mood);

    document.getElementById('journalForm').reset();
    alert('Entry submitted successfully!');
}

// Display mood-specific video based on mood
function displayVideo(mood) {
    const player = document.getElementById('player');
    const videoLinks = {
        happy: 'https://www.youtube.com/embed/ljnGl5nvUJY',
        sad: 'https://www.youtube.com/embed/xZek-biCFlU',
        calm: 'https://www.youtube.com/embed/RzVvThhjAKw',
        anxious: 'https://www.youtube.com/embed/Jf6CIruHdP4',
        energetic: 'https://www.youtube.com/embed/ApXoWvfEYVU',
        stressed: 'https://www.youtube.com/embed/VgdAcENXy84',
        confident: 'https://www.youtube.com/embed/7XCHS2Tx_z0',
        frustrated: 'https://www.youtube.com/embed/tV2Ecd7m6Tc',
        motivated: 'https://www.youtube.com/embed/tV2Ecd7m6Tc'
    };

    player.innerHTML = `<iframe width="100%" height="100%" src="${videoLinks[mood]}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
}

// Function to display mood-based tips
function displayTips(mood) {
    const tipsElement = document.getElementById('moodTips');
    let tips = '';

    switch (mood) {
        case 'happy':
            tips = '<li>Do something that makes you smile!</li><li>Engage in activities you enjoy.</li><li>Spend time with your loved ones.</li><li>Express gratitude for positive moments in your life.</li>';
            break;
        case 'sad':
            tips = '<li>Reach out to friends or family for support.</li><li>Consider activities that bring comfort.</li><li>Allow yourself to feel and express your emotions.</li>';
            break;
        case 'calm':
            tips = '<li>Maintain your calm with deep breathing exercises.</li><li>Practice mindfulness or meditation.</li><li>Enjoy a quiet walk in nature.</li>';
            break;
        case 'anxious':
            tips = '<li>Try relaxation techniques like yoga or deep breathing.</li><li>Talk to someone about your feelings.</li><li>Limit caffeine and sugar intake.</li>';
            break;
        case 'energetic':
            tips = '<li>Channel your energy into physical activity.</li><li>Set new goals and challenges for yourself.</li><li>Try something new and exciting.</li>';
            break;
        case 'stressed':
            tips = '<li>Take breaks and give yourself time to relax.</li><li>Prioritize tasks and tackle them one at a time.</li><li>Engage in hobbies that help you unwind.</li>';
            break;
        case 'confident':
            tips = '<li>Set goals and take actionable steps toward them.</li><li>Share your achievements with others.</li><li>Continue to challenge yourself and grow.</li>';
            break;
        case 'frustrated':
            tips = '<li>Identify the source of your frustration and address it.</li><li>Take a break and step away from the situation.</li><li>Practice stress relief techniques.</li>';
            break;
        case 'motivated':
            tips = '<li>Use your motivation to inspire others.</li><li>Break down your goals into manageable steps.</li><li>Reflect on what drives your motivation.</li>';
            break;
        default:
            tips = 'No specific tips for this mood.';
    }

    tipsElement.innerHTML = tips;
}

// Save the data to local storage
function saveData(date, mood, entry) {
    const data = { date, mood, entry };
    const historyData = JSON.parse(localStorage.getItem('journalHistory')) || [];

    historyData.push(data);
    localStorage.setItem('journalHistory', JSON.stringify(historyData));
}

// Display saved data
function displaySavedData() {
    const displayContainer = document.getElementById("display-container");
    const historyData = JSON.parse(localStorage.getItem("journalHistory")) || [];

    displayContainer.innerHTML = "<h2>Saved Journal Entries</h2>";

    if (historyData.length > 0) {
        historyData.forEach((entry, index) => {
            displayContainer.innerHTML += `<p>${index + 1}. Date: ${entry.date}, Mood: ${entry.mood}, Entry: ${entry.entry}</p>`;
        });
    } else {
        displayContainer.innerHTML = "<p>No journal entries found.</p>";
    }
}

// Load saved data when page loads
window.onload = function () {
    loadData();
};

// Function to load last saved data
function loadData() {
    const storedData = JSON.parse(localStorage.getItem('journalHistory'));
    if (storedData && storedData.length > 0) {
        const lastEntry = storedData[storedData.length - 1];
        document.getElementById('date').value = lastEntry.date;
        document.querySelector(`input[name="mood"][value="${lastEntry.mood}"]`).checked = true;
        document.getElementById('entry').value = lastEntry.entry;
    }
}
