const options = ['Opción 1', 'Opción 2', 'Opción 3'];
    let votes = [0, 0, 0];

    function vote(optionIndex) {
      votes[optionIndex]++;
      displayResults();
    }

    function displayResults() {
      const votesDiv = document.getElementById('votes');
      votesDiv.innerHTML = '';
      
      votes.forEach((count, index) => {
        const optionResult = document.createElement('p');
        optionResult.textContent = `${options[index]}: ${count} voto${count !== 1 ? 's' : ''}`;
        votesDiv.appendChild(optionResult);
      });
    }