function toggleMenu() {
  let toggle = document.querySelector(".toggle");
  let nav = document.querySelector(".nav");
  let main = document.querySelector(".main");
  toggle.classList.toggle("active");
  nav.classList.toggle("active");
  main.classList.toggle("active");
}

function clickMenu() {
  let btnContainer = document.getElementById("menuContainer");
  let btns = btnContainer.getElementsByClassName("link");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("clicked");
      current[0].className = current[0].className.replace(" clicked", "");
      this.className += " clicked";
    });
  }
}

const ctx1 = document.getElementById("myChart1").getContext("2d");
const myChart1 = new Chart(ctx1, {
  type: "polarArea",
  data: {
    labels: ["One", "Two", "Three", "Four"],
    datasets: [
      {
        label: "Title",
        data: [120, 190, 300, 500],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
      },
    ],
  },
  options: {
    reponsive: true,
  },
});
const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: ["One", "Two", "Three", "Four"],
    datasets: [
      {
        label: "Title",
        data: [120, 190, 300, 500],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)"
        ],
      },
    ],
  },
  options: {
    reponsive: true,
  },
});

