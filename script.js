document.addEventListener('DOMContentLoaded', function() {
    var knapp = document.getElementById('merknapp');
    var tekst = document.getElementById('tekst');
    var showText = false; // Boolean flagg
  
    if (knapp && tekst) {
      knapp.addEventListener('click', function() {
        if (showText) {
          tekst.style.display = 'none'; // Skjul tekst
          knapp.textContent = 'Mer'; // Endre knappetekst
          showText = false;
        } else {
          tekst.style.display = 'block'; // Vis tekst
          knapp.textContent = 'Skjul'; // Endre knappetekst
          showText = true;
        }
      });
    } else {
      console.error('Element med id "merknapp" eller "tekst" ble ikke funnet.');
    }
  });