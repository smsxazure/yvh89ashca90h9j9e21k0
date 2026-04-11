function insertFloatingButtons() {
  const container = document.getElementById("floating-container");
  container.innerHTML = `
    <div class="floating-buttons">
      <button class="button-menu1"
        onclick="window.open('https://forms.gle/iLNNfNffPCqRCurn7', '_blank')"
        title="[Form] Report Housekeeping Service">
        ✎
      </button>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", insertFloatingButtons);