document.addEventListener('DOMContentLoaded', function () {
    const fishes = document.querySelectorAll('.fish');
    let isCursorMoving = false;

    document.addEventListener('mousemove', function (e) {
        isCursorMoving = true;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        fishes.forEach(fish => {
            const fishRect = fish.getBoundingClientRect();
            const fishX = fishRect.left + fishRect.width / 2;
            const fishY = fishRect.top + fishRect.height / 2;

            const angle = Math.atan2(mouseY - fishY, mouseX - fishX);
            const angleDeg = angle * (180 / Math.PI);

            fish.style.transform = `rotate(${angleDeg}deg)`;
        });
    });

    setInterval(function () {
        if (!isCursorMoving) {
            fishes.forEach(fish => {
                const randomX = Math.random() * (window.innerWidth - fish.offsetWidth);
                const randomY = Math.random() * (window.innerHeight - fish.offsetHeight);

                fish.style.transform = `translate(${randomX}px, ${randomY}px) rotate(0deg)`;
            });
        }
        isCursorMoving = false;
    }, 3000); // Adjust the interval time (in milliseconds) for random movement
});

// new............

const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', function() {
  const searchText = searchInput.value;
  console.log('Search Text:', searchText);

  // Send search text to server
  sendSearchText(searchText);
});
function sendSearchText(text) {
    const xhr = new XMLHttpRequest();
    const url = 'process_search.php';
    const params = 'searchText=' + encodeURIComponent(text);

    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log('Search text sent successfully.');
        // Handle response from server if needed
      }
    }

    xhr.send(params);
  }
