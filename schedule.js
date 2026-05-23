const appointmentForm = document.querySelector("#appointment-form");
const concerns = document.querySelector("#schedule-concerns");
const concernsInput = document.querySelector("#schedule-concerns-input");
const statusLine = document.querySelector("#schedule-status");

function field(id) {
  return document.querySelector(`#${id}`).value.trim();
}

function selectedConcerns() {
  return [...concerns.querySelectorAll(".checked")].map((button) => button.dataset.value);
}

function updateConcernsInput() {
  concernsInput.value = selectedConcerns().join(", ");
}

function scheduleMessage() {
  const items = [
    `Name: ${field("schedule-name") || "Not provided"}`,
    `Email: ${field("schedule-email") || "Not provided"}`,
    `Phone: ${field("schedule-phone") || "Not provided"}`,
    `ZIP code: ${field("schedule-zip") || "Not provided"}`,
    `Preferred date: ${field("schedule-date") || "First available"}`,
    `Preferred time: ${field("schedule-time") || "First available"}`,
    `Concerns: ${selectedConcerns().join(", ") || "Not specified"}`,
    "",
    "Notes:",
    field("schedule-notes") || "No notes provided"
  ];

  return items.join("\n");
}

concerns.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  button.classList.toggle("checked");
  updateConcernsInput();
});

appointmentForm.addEventListener("submit", () => {
  updateConcernsInput();
  statusLine.textContent = "Sending your scheduling request.";
});

document.querySelector("#copy-schedule").addEventListener("click", async () => {
  const text = scheduleMessage();
  try {
    await navigator.clipboard.writeText(text);
    statusLine.textContent = "Scheduling request copied.";
  } catch {
    statusLine.textContent = text;
  }
});

updateConcernsInput();
