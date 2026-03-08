  gsap.registerPlugin(ScrollTrigger);

  const newsColors = {
    red: "#8b0000",
    dark: "#1a1a1a",
    white: "#ffffff",
    grey: "#444444",
    glow: "rgba(139, 0, 0, 0.2)",
  };

  Chart.defaults.color = "#888";
  Chart.defaults.font.family = "'Inter', sans-serif";

  const initNewsDashboard = () => {
    // 1. Line: Active Readers
    new Chart(document.getElementById("chart1"), {
      type: "line",
      data: {
        labels: ["12pm", "2pm", "4pm", "6pm", "8pm", "10pm"],
        datasets: [
          {
            label: "Users (K)",
            data: [45, 52, 48, 70, 85, 62],
            borderColor: newsColors.red,
            backgroundColor: newsColors.glow,
            fill: true,
            tension: 0.4,
          },
        ],
      },
    });

    // 2. Bar: Article Engagement %
    new Chart(document.getElementById("chart2"), {
      type: "bar",
      data: {
        labels: ["Tech", "Med", "AI", "Global"],
        datasets: [
          {
            label: "Engagement %",
            data: [78, 85, 92, 64],
            backgroundColor: newsColors.red,
          },
        ],
      },
    });

    // 3. Doughnut: CDN Reliability
    new Chart(document.getElementById("chart3"), {
      type: "doughnut",
      data: {
        labels: ["Online", "Rerouted", "Down"],
        datasets: [
          {
            data: [98, 1.5, 0.5],
            backgroundColor: [newsColors.red, "#444", "#111"],
            borderWidth: 0,
          },
        ],
      },
    });

    // 4. Polar: Traffic Sources
    new Chart(document.getElementById("chart4"), {
      type: "polarArea",
      data: {
        labels: ["Search", "Social", "Direct", "Email"],
        datasets: [
          {
            data: [40, 25, 20, 15],
            backgroundColor: [newsColors.red, "#333", "#555", "#777"],
          },
        ],
      },
    });

    // 5. Line: Latency
    new Chart(document.getElementById("chart5"), {
      type: "line",
      data: {
        labels: ["USA", "EU", "ASIA", "LATAM"],
        datasets: [
          {
            label: "ms",
            data: [12, 18, 45, 38],
            borderColor: "#fff",
            borderDash: [5, 5],
          },
        ],
      },
    });

    // 6. Bar: Global Reach
    new Chart(document.getElementById("chart6"), {
      type: "bar",
      data: {
        labels: ["2023", "2024", "2025", "2026"],
        datasets: [
          {
            label: "Readers (M)",
            data: [4.5, 6.8, 9.2, 12.5],
            backgroundColor: newsColors.red,
          },
        ],
      },
    });

    // 7. Pie: Trend Portfolio
    new Chart(document.getElementById("chart7"), {
      type: "pie",
      data: {
        labels: ["Hardware", "Biotech", "Software"],
        datasets: [
          {
            data: [40, 35, 25],
            backgroundColor: [newsColors.red, "#222", "#444"],
          },
        ],
      },
    });

    // 8. Radar: Firewall Integrity
    new Chart(document.getElementById("chart8"), {
      type: "radar",
      data: {
        labels: ["DDoS", "SQLi", "XSS", "Phishing", "Brute"],
        datasets: [
          {
            label: "Defense Level",
            data: [95, 99, 90, 85, 98],
            borderColor: newsColors.red,
            backgroundColor: newsColors.glow,
          },
        ],
      },
    });
  };

  const animateDashboard = () => {
    gsap.from(".header-box", { duration: 1, y: -50, opacity: 1 });
    gsap.from(".chart-card", {
      duration: 0.8,
      scale: 0.8,
      opacity: 1,
      stagger: 0.1,
      scrollTrigger: { trigger: ".news-tech-grid", start: "top 80%" },
    });
  };

  window.addEventListener("DOMContentLoaded", () => {
    initNewsDashboard();
    animateDashboard();
  });