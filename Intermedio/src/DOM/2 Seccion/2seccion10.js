function showSeats() {
    const table = document.getElementById('seats');
    const selectedSeatsDiv = document.getElementById('selectedSeats');
    const movies = document.getElementById('movies');
    const selectedMovie = movies.options[movies.selectedIndex].text;
    const datePicker = document.getElementById('datePicker').value;

    const availableSeats = [
      ['A1', 'A2', 'A3', '', ''],
      ['', 'B2', 'B3', 'B4', ''],
      ['C1', 'C2', '', 'C4', 'C5'],
      ['D1', '', 'D3', 'D4', 'D5'],
      ['', 'E2', 'E3', '', 'E5']
    ];

    table.innerHTML = ''; 
    availableSeats.forEach(row => {
      const tr = document.createElement('tr');
      row.forEach(seat => {
        const td = document.createElement('td');
        td.textContent = seat || '-';
        td.addEventListener('click', function() {
          if (seat) {
            if (!td.classList.contains('selected')) {
              td.classList.add('selected');
              selectedSeatsDiv.textContent += `Asiento ${seat} para ${selectedMovie} el ${datePicker}\n`;
            } else {
              td.classList.remove('selected');
              selectedSeatsDiv.textContent = selectedSeatsDiv.textContent.replace(`Asiento ${seat} para ${selectedMovie} el ${datePicker}\n`, '');
            }
          }
        });
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });
  }