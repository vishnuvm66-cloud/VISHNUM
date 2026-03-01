// Smooth nav highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach((a) => {
    a.style.color = a.getAttribute("href") === "#" + current ? "#92D050" : "";
  });

  // Nav shadow on scroll
  const nav = document.querySelector("nav");
  nav.style.boxShadow =
    window.scrollY > 20 ? "0 8px 32px rgba(0,0,0,0.4)" : "none";
});
// --------------------------------------------------------------------------------------------------

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e?.preventDefault(); // stop normal form submit

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const program = document.getElementById("program").value;
  const message = document.getElementById("message").value;
  if (firstName && lastName && email && phone) {
    const fullMessage = `
           New Enquiry

  Name: ${firstName} ${lastName}

  Email: ${email}

  Phone: ${phone}

  Program: ${program}

  Message:
    ${message}
  `;
    const whatsappNumber = "918129340018";
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, "_blank");
  }
});
// -----------------------------------------------------------------------------------------------
const modal = document.getElementById("successModal");

window.addEventListener("load", function () {
  modal.classList.add("active");
});
function openModal() {
  modal.classList.add("active");
}

function closeModal() {
  modal.classList.remove("active");
}
// --------------------------------------------------------------------------------
fetch("assets/files/Investor Grievance Complaint Status.xlsx")
  .then((res) => res.arrayBuffer())
  .then((data) => {
    const workbook = XLSX.read(data);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const html = XLSX.utils.sheet_to_html(sheet);
    document.querySelector(".modal-content").innerHTML = html;
  });
