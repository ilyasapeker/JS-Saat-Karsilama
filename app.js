const startBtn = document.getElementById("start-btn");
const usernameInput = document.getElementById("username");
const loginScreen = document.getElementById("login-screen");
const mainScreen = document.getElementById("main-screen");
const welcomeText = document.getElementById("welcome");
const clockText = document.getElementById("clock");
const dayText = document.getElementById("day");

startBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();

  if (name === "") {
    alert("Lütfen adını gir 📝");
    return;
  }

  loginScreen.classList.add("hidden");
  mainScreen.classList.remove("hidden");

  welcomeText.textContent = `Merhaba, ${name}! 👋`;
  updateClock();
  setInterval(updateClock, 1000);
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  clockText.textContent = `${hours}:${minutes}:${seconds}`;

  const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
  dayText.textContent = days[now.getDay()];
}
