function insertFloatingButtons() {
  const container = document.getElementById("floating-container");
  container.innerHTML = `
    <div class="floating-buttons">
      <button class="button-menu"
        onclick="window.open('https://forms.gle/mn8GkxnWjK3g7Hyf9', '_blank')"
        title="[Form] Report Housekeeping Service">
        ✎
      </button>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", insertFloatingButtons);