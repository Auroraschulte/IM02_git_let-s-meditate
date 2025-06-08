 /*fetch('https://buddha-api.com/api/today')*/
   fetch('http://localhost:3000/api/quote')
      .then(res => res.json())
      .then(data => document.getElementById('quote').innerText = data.quote)
      .catch(() => document.getElementById('quote').innerText = 'Quote could not be loaded.');

    let time = 299;
    const timerEl = document.getElementById('timer');
    const interval = setInterval(() => {
      const min = Math.floor(time / 60);
      const sec = time % 60;
      timerEl.textContent = `${min}:${sec.toString().padStart(2, '0')}`;
      if (--time < 0) clearInterval(interval);
    }, 1000);


   /* https://buddha-api.com/api/random? 
   p id="quote">Loading...</p>
<h4 id="timer">4:59</h4> 

*/