 // Timer code (runs immediately when page loads)
    let time = 300; 
    const timerEl = document.getElementById('timer'); 

    // Update timer every second (1000ms)
    const interval = setInterval(() => {
      // Calculate minutes and seconds
      const min = Math.floor(time / 60);
      const sec = time % 60;
      
      // Format time as "m:ss" with leading zero for seconds
      timerEl.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
      
      // Decrement time and stop if we reach 0
      if (--time < 0) {
        clearInterval(interval); // Stop the timer
      }
    }, 1000);

    // Fetch fact from Useless Facts API
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random', {
      mode: 'cors' // Handle Cross-Origin requests properly
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); 
      })
      .then(data => {
        console.log('API Response:', data); // Debugging: log the full response
        
        // Verify we got valid data with a text property
        if (data && data.text) {
          document.getElementById('quote').textContent = data.text; // Set the fact text
        } else {
          throw new Error('Fact text not found in response');
        }
      })
      .catch(error => {
        console.error('Error fetching fact:', error);
        // Fallback - show a default fact if API fails
        document.getElementById('quote').textContent = 
          "Ein Standard-Fakt, wenn die API nicht geladen werden kann.";
      });