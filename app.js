function countdown() {
      let startTime = localStorage.getItem('startTime');
      if (!startTime) {
          startTime = new Date().getTime();
          localStorage.setItem('startTime', startTime);
      }
  
      setInterval(() => {
          const currentTime = new Date().getTime();
          const diff = currentTime - startTime;
  
          const days = Math.floor(diff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
          document.getElementById('days').innerHTML = formatTime(days);
          document.getElementById('hours').innerHTML = formatTime(hours);
          document.getElementById('minutes').innerHTML = formatTime(minutes);
          document.getElementById('seconds').innerHTML = formatTime(seconds);
      }, 1000); // Lặp lại mỗi giây
  }
  
  function formatTime(time) {
      return time < 10 ? `0${time}` : time;
  }
  
  countdown();
  