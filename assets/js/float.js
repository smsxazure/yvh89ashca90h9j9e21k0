function insertFloatingButtons() {
  const container = document.getElementById("floating-container");
  container.innerHTML = `
    <div class="floating-buttons">
      <button class="button-menu"
        onclick="window.open('https://forms.gle/ipjie6BjfmPcP55h9', '_blank')"
        title="[Form] Report Housekeeping Service">
        ✎
      </button>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", insertFloatingButtons);