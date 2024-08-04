document.addEventListener('DOMContentLoaded', function() {
  var knapp = document.getElementById('merknapp');
  var tekster = document.querySelectorAll('.tekst');
  var showText = false; // Boolean flagg

  // Skjul tekstene som standard
  tekster.forEach(function(tekst) {
      tekst.style.display = 'none';
  });

  if (knapp && tekster.length > 0) {
      knapp.addEventListener('click', function() {
          tekster.forEach(function(tekst) {
              if (showText) {
                  tekst.style.display = 'none'; // Skjul tekst
              } else {
                  tekst.style.display = 'block'; // Vis tekst
              }
          });
          knapp.textContent = showText ? 'Mer' : 'Skjul'; // Endre knappetekst
          showText = !showText; // Bytt flagg
      });
  } else {
      console.error('Element med id "merknapp" eller klasse "tekst" ble ikke funnet.');
  }
});