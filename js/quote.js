let time = 300; 
const timerEl = document.getElementById('timer'); 

const interval = setInterval(() => {
  const min = Math.floor(time / 60);
  const sec = time % 60;

  timerEl.textContent = `${min}:${sec.toString().padStart(2, '0')}`;

  if (--time < 0) {
    clearInterval(interval); 
  }
}, 1000);

let currentLanguage = 'de'; 

async function fetchFact(language) {
  currentLanguage = language; 
  try {
    // Fetch random fact from the API
    const response = await fetch(`https://uselessfacts.jsph.pl/api/v2/facts/random?language=${language}`);
    if (!response.ok) throw new Error('Failed to fetch fact');
    
    const factData = await response.json();
    document.getElementById('quote').innerText = factData.text; 
    document.getElementById('reload-button').style.display = 'block'; 
  } catch (error) {
    console.error('Error fetching fact:', error);
    document.getElementById('quote').innerText = 'Konnte den Fakt nicht laden.';
  }
}

function reloadFact() {
  fetchFact(currentLanguage); // Neuen Fakt in der aktuellen Sprache laden
}