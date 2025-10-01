// Hardcoded Data for Demo - Complete Tourist Safety Monitoring System
const touristData = [
  {
    id: "SIH25002A",
    name: "Aarav Sharma",
    passport: "P1234567",
    itinerary: "Delhi-Agra-Jaipur",
    emergencyContact: {
      name: "Anjali Sharma",
      phone: "+919876543210",
      email: "anjali.s@example.com",
    },
    location: { lat: 26.9124, lng: 75.7873 }, // Jaipur coordinates
    safetyScore: 88,
    status: "safe",
    travelHistory: [
      { destination: "Delhi", from: "2024-10-20", to: "2024-10-22" },
      { destination: "Agra", from: "2024-10-23", to: "2024-10-25" },
      { destination: "Jaipur", from: "2024-10-26", to: "2024-10-28" },
    ],
    news: [
      "Heavy rain expected in Jaipur today. Travel with caution.",
      "Historical sites in Agra now open from 9 AM to 6 PM.",
    ],
    alerts: [],
    mapPosition: { x: 30, y: 40 }, // Position on the simulated map (percentage)
  },
  {
    id: "SIH25002B",
    name: "Priya Singh",
    passport: "P8765432",
    itinerary: "Mumbai-Goa",
    emergencyContact: {
      name: "Rohit Singh",
      phone: "+919988776655",
      email: "rohit.s@example.com",
    },
    location: { lat: 15.2993, lng: 74.124 }, // Goa coordinates
    safetyScore: 95,
    status: "safe",
    travelHistory: [
      { destination: "Mumbai", from: "2024-10-25", to: "2024-10-27" },
      { destination: "Goa", from: "2024-10-28", to: "2024-11-02" },
    ],
    news: [
      "Upcoming music festival in Goa from November 1st to 3rd.",
      "Road closures in parts of Panjim for public works.",
    ],
    alerts: [],
    mapPosition: { x: 70, y: 70 },
  },
  {
    id: "SIH25002C",
    name: "John Doe (Foreign Tourist)",
    passport: "F1122334",
    itinerary: "Assam-Meghalaya",
    emergencyContact: {
      name: "Jane Doe",
      phone: "+12025550143",
      email: "jane.d@example.com",
    },
    location: { lat: 25.5788, lng: 91.8933 }, // Shillong, Meghalaya coordinates
    safetyScore: 65,
    status: "alert",
    travelHistory: [
      { destination: "Assam", from: "2024-10-20", to: "2024-10-25" },
      { destination: "Meghalaya", from: "2024-10-26", to: "2024-10-30" },
    ],
    news: [],
    alerts: ["Restricted Zone Entry", "Prolonged Inactivity (Simulated)"],
    mapPosition: { x: 20, y: 25 },
  },
];

// Active Alerts Queue
let activeAlerts = [
  {
    id: "A25002-001",
    touristId: "SIH25002C",
    touristName: "John Doe",
    type: "Restricted Zone Entry",
    location: "Shillong, Meghalaya (25.62°N, 91.92°E)",
    timestamp: new Date(Date.now() - 2700000).toLocaleString("en-IN"), // 45 minutes ago
    severity: "high",
    description: "Tourist entered restricted military area",
  },
  {
    id: "A25002-002",
    touristId: "SIH25002C",
    touristName: "John Doe",
    type: "Prolonged Inactivity",
    location: "Shillong, Meghalaya (25.57°N, 91.88°E)",
    timestamp: new Date(Date.now() - 1800000).toLocaleString("en-IN"), // 30 minutes ago
    severity: "medium",
    description: "No movement detected for over 4 hours",
  },
];

// High-risk zones data
const highRiskZones = [
  {
    name: "Remote Forest Area",
    coordinates: [
      { lat: 25.6, lng: 91.9 },
      { lat: 25.65, lng: 91.95 },
      { lat: 25.7, lng: 91.9 },
    ],
  },
  {
    name: "Military Restricted Zone",
    coordinates: [
      { lat: 26.8, lng: 75.8 },
      { lat: 26.85, lng: 75.85 },
      { lat: 26.9, lng: 75.8 },
    ],
  },
];

// Admin Authentication
const adminCredentials = {
  username: "admin",
  password: "admin123",
};

// State Management
let isLoggedIn = false;
let liveUpdateInterval;
let timeInterval;
let currentUser = null;

// Login Form Handler
document
  .getElementById("admin-login-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      isLoggedIn = true;
      showDashboard();
      showNotification(
        "Login successful! Welcome to the monitoring dashboard.",
        "success"
      );
    } else {
      showNotification(
        "Invalid credentials. Use admin/admin123 for demo.",
        "error"
      );
      // Shake the form for visual feedback
      const form = document.getElementById("admin-login-form");
      form.style.animation = "shake 0.5s";
      setTimeout(() => (form.style.animation = ""), 500);
    }
  });

// Navigation Functions
function showDashboard() {
  document.getElementById("login-page").classList.add("hidden");
  document.getElementById("dashboard-page").classList.remove("hidden");

  initializeDashboard();
  startLiveUpdates();
}

function logout() {
  isLoggedIn = false;
  clearInterval(liveUpdateInterval);
  clearInterval(timeInterval);

  document.getElementById("login-page").classList.remove("hidden");
  document.getElementById("dashboard-page").classList.add("hidden");

  // Clear form
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  showNotification("Logged out successfully.", "info");
}

// Dashboard Initialization
function initializeDashboard() {
  updateStatistics();
  renderTouristMap();
  renderAlertsQueue();
  updateCurrentTime();

  // Update time every second
  timeInterval = setInterval(updateCurrentTime, 1000);
}

// Statistics Update
function updateStatistics() {
  const totalTourists = touristData.length;
  const safeCount = touristData.filter((t) => t.status === "safe").length;
  const alertCount = activeAlerts.length;

  document.getElementById("total-tourists").textContent = totalTourists;
  document.getElementById("safe-count").textContent = safeCount;
  document.getElementById("alert-count").textContent = alertCount;
}

// Current Time Display
function updateCurrentTime() {
  const now = new Date();
  const timeString = now.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  document.getElementById("current-time").textContent = `IST: ${timeString}`;
}

// Tourist Map Rendering
function renderTouristMap() {
  const mapContainer = document.getElementById("tourist-map");

  // Clear existing markers (keep risk zones)
  const existingMarkers = mapContainer.querySelectorAll(".tourist-marker");
  existingMarkers.forEach((marker) => marker.remove());

  touristData.forEach((tourist) => {
    const marker = document.createElement("div");
    marker.className = `tourist-marker ${tourist.status}`;
    marker.style.left = `${tourist.mapPosition.x}%`;
    marker.style.top = `${tourist.mapPosition.y}%`;
    marker.title = `${tourist.name} (${
      tourist.id
    })\nStatus: ${tourist.status.toUpperCase()}\nSafety Score: ${
      tourist.safetyScore
    }`;

    // Add click event to show tourist details
    marker.addEventListener("click", () => {
      showTouristDetails(tourist);
      showNotification(`Viewing details for ${tourist.name}`, "info");
    });

    mapContainer.appendChild(marker);
  });
}

// Refresh Map Function
function refreshMap() {
  renderTouristMap();
  showNotification("Map refreshed successfully", "success");
}

// Show Tourist Details in Search Section
function showTouristDetails(tourist) {
  document.getElementById("search-input").value = tourist.id;
  searchTourist();
}

// Alerts Queue Rendering
function renderAlertsQueue() {
  const alertsContainer = document.getElementById("alerts-feed");
  alertsContainer.innerHTML = "";

  if (activeAlerts.length === 0) {
    alertsContainer.innerHTML = `
                    <div class="text-center text-gray-400 py-8">
                        <div class="text-4xl mb-2">✅</div>
                        <p class="text-lg font-medium">No Active Alerts</p>
                        <p class="text-sm">All tourists are safe</p>
                    </div>
                `;
    return;
  }

  // Sort alerts by severity and timestamp
  const sortedAlerts = activeAlerts.sort((a, b) => {
    const severityOrder = { high: 3, medium: 2, low: 1 };
    return severityOrder[b.severity] - severityOrder[a.severity];
  });

  sortedAlerts.forEach((alert, index) => {
    const alertElement = document.createElement("div");
    alertElement.className = `p-4 mb-3 rounded-lg border-l-4 transition-all duration-300 hover:shadow-lg ${
      alert.severity === "high"
        ? "bg-red-900 border-red-500"
        : alert.severity === "medium"
        ? "bg-yellow-900 border-yellow-500"
        : "bg-gray-900 border-gray-500"
    }`;

    alertElement.innerHTML = `
                    <div class="flex items-start justify-between">
                        <div class="flex-1">
                            <div class="flex items-center space-x-2 mb-2">
                                <span class="text-white font-semibold text-lg">${
                                  alert.type
                                }</span>
                                <span class="px-3 py-1 text-xs font-bold rounded-full ${
                                  alert.severity === "high"
                                    ? "bg-red-600 text-white"
                                    : alert.severity === "medium"
                                    ? "bg-yellow-600 text-white"
                                    : "bg-gray-600 text-white"
                                }">${alert.severity.toUpperCase()}</span>
                                ${
                                  index === 0
                                    ? '<span class="bg-blue-600 text-white px-2 py-1 text-xs rounded-full">NEW</span>'
                                    : ""
                                }
                            </div>
                            <p class="text-gray-300 text-sm mb-2">
                                <strong>Tourist:</strong> ${
                                  alert.touristName
                                } (<span class="font-mono">${
      alert.touristId
    }</span>)
                            </p>
                            <p class="text-gray-300 text-sm mb-1">
                                <strong>Location:</strong> ${alert.location}
                            </p>
                            <p class="text-gray-400 text-xs mb-2">${
                              alert.description
                            }</p>
                            <p class="text-gray-500 text-xs">
                                <span class="inline-block mr-4">🕐 ${
                                  alert.timestamp
                                }</span>
                                <span class="inline-block">📍 Alert ID: ${
                                  alert.id
                                }</span>
                            </p>
                        </div>
                        <div class="flex flex-col space-y-2 ml-4">
                            <button onclick="resolveAlert('${alert.id}')" 
                                    class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                ✅ Resolve
                            </button>
                            <button onclick="escalateAlert('${alert.id}')" 
                                    class="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                ⚠️ Escalate
                            </button>
                            <button onclick="assignAlert('${alert.id}')" 
                                    class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                                👮 Assign
                            </button>
                        </div>
                    </div>
                `;

    if (index === 0) {
      alertElement.classList.add("slide-in");
    }

    alertsContainer.appendChild(alertElement);
  });
}

// Alert Management Functions
function resolveAlert(alertId) {
  const alertIndex = activeAlerts.findIndex((alert) => alert.id === alertId);
  if (alertIndex !== -1) {
    const resolvedAlert = activeAlerts[alertIndex];
    activeAlerts.splice(alertIndex, 1);
    renderAlertsQueue();
    updateStatistics();

    // Update tourist status if all alerts for that tourist are resolved
    const touristAlerts = activeAlerts.filter(
      (alert) => alert.touristId === resolvedAlert.touristId
    );
    if (touristAlerts.length === 0) {
      const tourist = touristData.find((t) => t.id === resolvedAlert.touristId);
      if (tourist) {
        tourist.status = "safe";
        renderTouristMap();
      }
    }

    showNotification(`Alert ${alertId} resolved successfully`, "success");
  }
}

function escalateAlert(alertId) {
  const alert = activeAlerts.find((alert) => alert.id === alertId);
  if (alert && alert.severity !== "high") {
    alert.severity = "high";
    alert.timestamp = new Date().toLocaleString("en-IN");
    renderAlertsQueue();

    showNotification(`Alert ${alertId} escalated to HIGH priority`, "warning");
  }
}

function assignAlert(alertId) {
  const alert = activeAlerts.find((alert) => alert.id === alertId);
  if (alert) {
    showNotification(
      `Alert ${alertId} assigned to Officer Singh (Badge: 12345)`,
      "info"
    );
  }
}

function clearAllAlerts() {
  if (activeAlerts.length > 0) {
    if (
      confirm(
        "Are you sure you want to clear all alerts? This action cannot be undone."
      )
    ) {
      activeAlerts.length = 0;

      // Reset all tourist statuses to safe
      touristData.forEach((tourist) => {
        tourist.status = "safe";
      });

      renderAlertsQueue();
      renderTouristMap();
      updateStatistics();
      showNotification("All alerts cleared successfully", "success");
    }
  } else {
    showNotification("No alerts to clear", "info");
  }
}

// Tourist Search Function
function searchTourist() {
  const searchId = document.getElementById("search-input").value.trim();
  const tourist = touristData.find(
    (t) => t.id.toLowerCase() === searchId.toLowerCase()
  );

  const profileDiv = document.getElementById("tourist-profile");

  if (tourist) {
    // Populate tourist profile
    document.getElementById("profile-name").textContent = tourist.name;
    document.getElementById("profile-id").textContent = `ID: ${tourist.id}`;
    document.getElementById(
      "profile-itinerary"
    ).textContent = `Itinerary: ${tourist.itinerary}`;
    document.getElementById("profile-score").textContent = tourist.safetyScore;

    // Update safety score bar
    const scoreBar = document.getElementById("profile-score-bar");
    scoreBar.style.width = `${tourist.safetyScore}%`;
    if (tourist.safetyScore >= 80) {
      scoreBar.className =
        "h-2 rounded-full transition-all duration-500 bg-green-500";
    } else if (tourist.safetyScore >= 60) {
      scoreBar.className =
        "h-2 rounded-full transition-all duration-500 bg-yellow-500";
    } else {
      scoreBar.className =
        "h-2 rounded-full transition-all duration-500 bg-red-500";
    }

    // Determine location name
    let locationName = "Unknown Location";
    if (tourist.location.lat === 26.9124) {
      locationName = "Jaipur, Rajasthan";
    } else if (tourist.location.lat === 15.2993) {
      locationName = "Goa";
    } else if (tourist.location.lat === 25.5788) {
      locationName = "Shillong, Meghalaya";
    }

    document.getElementById(
      "profile-location"
    ).textContent = `${locationName} (${tourist.location.lat}°N, ${tourist.location.lng}°E)`;

    document.getElementById(
      "profile-emergency"
    ).textContent = `${tourist.emergencyContact.name} - ${tourist.emergencyContact.phone}`;

    // Update status badge
    const statusBadge = document.getElementById("profile-status");
    if (tourist.status === "safe") {
      statusBadge.className =
        "inline-block px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800";
      statusBadge.textContent = "✅ Safe";
    } else if (tourist.status === "alert") {
      statusBadge.className =
        "inline-block px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800";
      statusBadge.textContent = "🚨 Alert";
    } else if (tourist.status === "warning") {
      statusBadge.className =
        "inline-block px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800";
      statusBadge.textContent = "⚠️ Warning";
    }

    profileDiv.classList.remove("hidden");
    profileDiv.classList.add("fade-in");
    currentUser = tourist;

    showNotification(`Tourist ${tourist.name} found successfully`, "success");
  } else {
    profileDiv.classList.add("hidden");
    showNotification("Tourist not found.", "error");
  }
}

// Clear Search Function
function clearSearch() {
  document.getElementById("search-input").value = "";
  document.getElementById("tourist-profile").classList.add("hidden");
  currentUser = null;
  showNotification("Search cleared", "info");
}

// Tourist Contact and Tracking Functions
function contactTourist() {
  if (currentUser) {
    showNotification(
      `Calling ${currentUser.emergencyContact.name} at ${currentUser.emergencyContact.phone}...`,
      "info"
    );
    // Simulate call delay
    setTimeout(() => {
      showNotification("Call connected successfully", "success");
    }, 2000);
  }
}

function trackTourist() {
  if (currentUser) {
    showNotification(
      `Initiating GPS tracking for ${currentUser.name}...`,
      "info"
    );
    // Highlight tourist on map
    const markers = document.querySelectorAll(".tourist-marker");
    markers.forEach((marker) => {
      const title = marker.title;
      if (title.includes(currentUser.id)) {
        marker.style.animation = "pulse-red 1s infinite";
        setTimeout(() => {
          marker.style.animation = "";
        }, 5000);
      }
    });
  }
}

// Live Updates Simulation
function startLiveUpdates() {
  liveUpdateInterval = setInterval(() => {
    simulateLiveUpdates();
  }, 15000); // Update every 15 seconds
}

function simulateLiveUpdates() {
  // Randomly update tourist positions slightly
  touristData.forEach((tourist) => {
    if (Math.random() < 0.4) {
      // 40% chance to update position
      // Small random movement (±3%)
      tourist.mapPosition.x = Math.max(
        5,
        Math.min(95, tourist.mapPosition.x + (Math.random() - 0.5) * 6)
      );
      tourist.mapPosition.y = Math.max(
        5,
        Math.min(95, tourist.mapPosition.y + (Math.random() - 0.5) * 6)
      );
    }
  });

  // Occasionally add new alerts (simulation)
  if (Math.random() < 0.3 && activeAlerts.length < 5) {
    // 30% chance, max 5 alerts
    const alertTypes = [
      "Geo-fence Boundary Alert",
      "Low Battery Warning",
      "Unusual Movement Pattern",
      "Network Connection Lost",
      "Emergency Contact Attempt",
    ];

    const randomTourist =
      touristData[Math.floor(Math.random() * touristData.length)];
    const randomType =
      alertTypes[Math.floor(Math.random() * alertTypes.length)];

    const newAlert = {
      id: `A25002-${Date.now()}`,
      touristId: randomTourist.id,
      touristName: randomTourist.name,
      type: randomType,
      location: `Simulated location (${randomTourist.location.lat}°N, ${randomTourist.location.lng}°E)`,
      timestamp: new Date().toLocaleString("en-IN"),
      severity: Math.random() < 0.3 ? "high" : "medium",
      description: `Automated system alert for ${randomType.toLowerCase()}`,
    };

    activeAlerts.unshift(newAlert); // Add to beginning

    // Update tourist status
    if (newAlert.severity === "high") {
      randomTourist.status = "alert";
    }

    // Show new alert notification
    showNotification(
      `🚨 NEW ALERT: ${newAlert.type} - ${randomTourist.name}`,
      "warning"
    );
  }

  // Simulate safety score changes
  touristData.forEach((tourist) => {
    if (Math.random() < 0.2) {
      // 20% chance
      const change = (Math.random() - 0.5) * 10; // ±5 points
      tourist.safetyScore = Math.max(
        0,
        Math.min(100, tourist.safetyScore + change)
      );
    }
  });

  // Update displays
  renderTouristMap();
  renderAlertsQueue();
  updateStatistics();

  // If search results are showing, update them
  if (
    currentUser &&
    !document.getElementById("tourist-profile").classList.contains("hidden")
  ) {
    searchTourist();
  }
}

// Notification System
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification");
  existingNotifications.forEach((notif) => notif.remove());

  const notification = document.createElement("div");
  notification.className = `notification ${
    type === "success"
      ? "bg-green-600 text-white"
      : type === "error"
      ? "bg-red-600 text-white"
      : type === "warning"
      ? "bg-yellow-600 text-white"
      : "bg-blue-600 text-white"
  }`;

  const icon =
    type === "success"
      ? "✅"
      : type === "error"
      ? "❌"
      : type === "warning"
      ? "⚠️"
      : "ℹ️";

  notification.innerHTML = `
                <div class="flex items-start justify-between">
                    <div class="flex items-start space-x-3">
                        <span class="text-xl">${icon}</span>
                        <div>
                            <p class="font-medium">${message}</p>
                        </div>
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" 
                            class="text-white hover:text-gray-200 text-xl font-bold">
                        ×
                    </button>
                </div>
            `;

  document.body.appendChild(notification);

  // Show notification
  setTimeout(() => notification.classList.add("show"), 100);

  // Auto-remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.classList.remove("show");
      setTimeout(() => notification.remove(), 300);
    }
  }, 5000);
}

// Keyboard Shortcuts and Event Handlers
document.addEventListener("keydown", function (e) {
  if (isLoggedIn) {
    // Enter key in search box
    if (
      e.key === "Enter" &&
      document.activeElement === document.getElementById("search-input")
    ) {
      searchTourist();
    }

    // Escape key to clear search
    if (e.key === "Escape") {
      clearSearch();
    }

    // F5 to refresh map
    if (e.key === "F5") {
      e.preventDefault();
      refreshMap();
    }

    // Ctrl+L to logout
    if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      logout();
    }
  }
});

// Handle Enter key in login form
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && !isLoggedIn) {
    const activeElement = document.activeElement;
    if (
      activeElement === document.getElementById("username") ||
      activeElement === document.getElementById("password")
    ) {
      e.preventDefault();
      document
        .getElementById("admin-login-form")
        .dispatchEvent(new Event("submit"));
    }
  }
});

// Responsive map adjustment
window.addEventListener("resize", function () {
  if (isLoggedIn) {
    renderTouristMap();
  }
});

// Auto-focus and shake animation for login
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("username").focus();

  // Add shake animation for form validation
  const style = document.createElement("style");
  style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-10px); }
                    75% { transform: translateX(10px); }
                }
            `;
  document.head.appendChild(style);
});

// Prevent context menu on map for better UX
document
  .getElementById("tourist-map")
  ?.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });

// Initialize tooltips
function initializeTooltips() {
  const elements = document.querySelectorAll("[title]");
  elements.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      this.style.cursor = "pointer";
    });
  });
}

// Emergency backup functions
window.addEventListener("beforeunload", function () {
  if (liveUpdateInterval) clearInterval(liveUpdateInterval);
  if (timeInterval) clearInterval(timeInterval);
});

// Console logging for development
console.log("🛡️ Smart Tourist Safety Monitoring Dashboard Initialized");
console.log("Demo credentials: admin / admin123");
console.log(
  "Available tourist IDs for search: SIH25002A, SIH25002B, SIH25002C"
);

