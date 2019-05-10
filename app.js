const userInput = document.querySelector(".userInput");
const book = document.querySelector(".book");
const pagesPerDay = document.querySelector(".pagesPerDay");
const daysOfReading = document.querySelector(".daysOfReading");

const today = new Date();
const end = new Date(today.getFullYear(), 11, 31);
const oneDay = 1000 * 60 * 60 * 24;
const daysLeft = Math.ceil((end.getTime() - today.getTime()) / oneDay) + 1;

// Number of pages for each book
const oT = 1184;
const nT = 1590;
const bM = 531;
const dC = 294;
const pP = 61;

function handleChange() {
  let totalPages = "";
  switch (book.value) {
    case "oT":
      totalPages = oT + nT + bM + dC + pP;
      break;
    case "nT":
      totalPages = nT + bM + dC + pP;
      break;
    case "bM":
      totalPages = bM + dC + pP;
      break;
    case "dC":
      totalPages = dC + pP;
      break;
    case "pP":
      totalPages = pP;
      break;
    default:
      "";
  }

  const currentPage = userInput.value;
  const pagesLeft = totalPages - currentPage;
  const pagesToRead = userInput.value
    ? (totalPages - currentPage) / daysLeft
    : 0;
  pagesPerDay.textContent = pagesToRead.toPrecision(2);
  daysOfReading.textContent = Math.round(pagesLeft / 7);
}

userInput.addEventListener("keyup", handleChange);
