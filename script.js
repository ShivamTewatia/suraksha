//  =================================================================================
// HARDCODED DATA FOR DEMO PRESENTATION
// This section contains all the sample data used throughout the application
// =================================================================================

// Data for the demo presentation - Tourist profiles with complete information
// ...existing code...

// Data for the demo presentation - Tourist profiles with complete information
const touristData = [
  {
    id: "SIH25001A",
    name: "Aarav Sharma",
    passport: "P1234567",
    itinerary: "Delhi-Agra-Jaipur",
    emergencyContacts: [
      { name: "Anjali Sharma", phone: "+919876543210", relation: "Spouse" },
      { name: "Rohan Sharma", phone: "+919876543211", relation: "Brother" },
      {
        name: "Local Embassy",
        phone: "+911124197200",
        relation: "Official Support",
      },
    ],
    location: { lat: 26.9124, lng: 75.7873 }, // Jaipur
    safetyScore: 88,
    status: "safe",
    travelHistory: [
      { destination: "Delhi", from: "2024-10-20", to: "2024-10-22" },
      { destination: "Agra", from: "2024-10-23", to: "2024-10-25" },
      { destination: "Jaipur", from: "2024-10-26", to: "2024-10-28" },
    ],
    upcomingTrips: [
      { destination: "Varanasi", from: "2024-11-10", to: "2024-11-15" },
    ],
    news: [
      "Heavy rain expected in Jaipur today. Travel with caution.",
      "Historical sites in Agra now open from 9 AM to 6 PM.",
    ],
    alerts: [],
    email: "aarav.sharma@example.com",
    dob: "1992-05-14",
    mobile: "9876543210",
    password: "1",
  },
  {
    id: "SIH25001B",
    name: "Priya Singh",
    passport: "P8765432",
    itinerary: "Mumbai-Goa",
    emergencyContacts: [
      { name: "Rohit Singh", phone: "+919988776655", relation: "Father" },
      { name: "Sonia Singh", phone: "+919988776656", relation: "Mother" },
      {
        name: "Tour Operator",
        phone: "+918877665544",
        relation: "Travel Agent",
      },
    ],
    location: { lat: 15.2993, lng: 74.124 }, // Goa
    safetyScore: 95,
    status: "safe",
    travelHistory: [
      { destination: "Mumbai", from: "2024-10-25", to: "2024-10-27" },
      { destination: "Goa", from: "2024-10-28", to: "2024-11-02" },
    ],
    upcomingTrips: [],
    news: [
      "Upcoming music festival in Goa from November 1st to 3rd.",
      "Road closures in parts of Panjim for public works.",
    ],
    alerts: [],
    email: "priya.singh@example.com",
    dob: "1995-08-22",
    mobile: "9988776655",
    password: "2",
  },
  {
    id: "SIH25001C",
    name: "John Doe",
    passport: "F1122334",
    itinerary: "Assam-Meghalaya",
    emergencyContacts: [
      { name: "Jane Doe", phone: "+12025550143", relation: "Wife" },
      { name: "US Embassy", phone: "+911124198000", relation: "Consulate" },
      {
        name: "Insurance Provider",
        phone: "+18005550199",
        relation: "Travel Insurance",
      },
    ],

    location: { lat: 25.5788, lng: 91.8933 }, // Shillong
    safetyScore: 65,
    status: "alert",
    travelHistory: [
      { destination: "Assam", from: "2024-10-20", to: "2024-10-25" },
      { destination: "Meghalaya", from: "2024-10-26", to: "2024-10-30" },
    ],
    upcomingTrips: [],
    news: [],
    alerts: ["Restricted Zone Entry", "Prolonged Inactivity"],
    email: "john.doe@example.com",
    dob: "1988-03-10",
    mobile: "9123456789",
    password: "john@123",
  },
  {
    id: "SIH25001D",
    name: "Meghna Das",
    passport: "P2345678",
    itinerary: "Darjeeling-Gangtok",
    emergencyContacts: [
      { name: "Rakesh Das", phone: "+919812345678", relation: "Husband" },
      { name: "Priya Das", phone: "+919812345679", relation: "Sister" },
    ],

    location: { lat: 27.036, lng: 88.2627 }, // Darjeeling
    safetyScore: 92,
    status: "safe",
    travelHistory: [
      { destination: "Darjeeling", from: "2024-11-01", to: "2024-11-04" },
      { destination: "Gangtok", from: "2024-11-05", to: "2024-11-08" },
    ],
    upcomingTrips: [],
    news: [
      "Tea garden tours available in Darjeeling.",
      "Gangtok ropeway maintenance scheduled for next week.",
    ],
    alerts: [],
    email: "meghna.das@example.com",
    dob: "1997-12-05",
    mobile: "9812345678",
    password: "meghna@123",
  },
  {
    id: "SIH25001E",
    name: "Ravi Kumar",
    passport: "P3456789",
    itinerary: "Shimla-Spiti",
    emergencyContacts: [
      { name: "Neha Kumar", phone: "+919876543219", relation: "Wife" },
    ],

    location: { lat: 31.1048, lng: 77.1734 }, // Shimla
    safetyScore: 85,
    status: "safe",
    travelHistory: [
      { destination: "Shimla", from: "2024-09-15", to: "2024-09-18" },
      { destination: "Spiti", from: "2024-09-19", to: "2024-09-23" },
    ],
    upcomingTrips: [],
    news: [
      "Snowfall expected in Spiti Valley.",
      "Shimla toy train running on schedule.",
    ],
    alerts: [],
    email: "ravi.kumar@example.com",
    dob: "1990-07-21",
    mobile: "9876543219",
    password: "ravi@123",
  },
  {
    id: "SIH25001F",
    name: "Lakshmi Nair",
    passport: "P4567890",
    itinerary: "Kerala-Kanyakumari",
    emergencyContacts: [
      { name: "Arun Nair", phone: "+919812345679", relation: "Brother" },
    ],

    location: { lat: 8.0883, lng: 77.5385 }, // Kanyakumari
    safetyScore: 93,
    status: "safe",
    travelHistory: [
      { destination: "Kochi", from: "2024-10-10", to: "2024-10-13" },
      { destination: "Kanyakumari", from: "2024-10-14", to: "2024-10-16" },
    ],
    upcomingTrips: [],
    news: [
      "Backwater cruises available in Kochi.",
      "Kanyakumari sunrise tours popular among tourists.",
    ],
    alerts: [],
    email: "lakshmi.nair@example.com",
    dob: "1994-11-30",
    mobile: "9812345679",
    password: "lakshmi@123",
  },
  {
    id: "SIH25001G",
    name: "Tenzin Norbu",
    passport: "P5678901",
    itinerary: "Arunachal Pradesh",
    emergencyContacts: [
      { name: "Sonam Norbu", phone: "+919876543220", relation: "Father" },
    ],

    location: { lat: 27.1, lng: 93.6167 }, // Arunachal Pradesh
    safetyScore: 80,
    status: "safe",
    travelHistory: [
      { destination: "Tawang", from: "2024-09-20", to: "2024-09-25" },
      { destination: "Itanagar", from: "2024-09-26", to: "2024-09-28" },
    ],
    upcomingTrips: [],
    news: [
      "Tawang festival starts September 21.",
      "Road conditions in Itanagar improved.",
    ],
    alerts: [],
    email: "tenzin.norbu@example.com",
    dob: "1996-04-18",
    mobile: "9876543220",
    password: "tenzin@123",
  },
];

// High risk zones for geo-fencing alerts
const highRiskZones = [
  {
    name: "Remote Forest",
    coordinates: [
      { lat: 25.6, lng: 91.9 },
      { lat: 25.65, lng: 91.95 },
      { lat: 25.7, lng: 91.9 },
    ],
  },
];

// Active system alerts for demonstration
const activeAlerts = [
  {
    id: "A25002-001",
    touristId: "SIH25002C",
    type: "Restricted Zone Entry",
    location: "Simulated at lat: 25.62, lng: 91.92",
    timestamp: "2024-10-27 10:30 AM",
  },
  {
    id: "A25002-002",
    touristId: "SIH25002C",
    type: "Prolonged Inactivity",
    location: "Simulated at lat: 25.57, lng: 91.88",
    timestamp: "2024-10-27 11:15 AM",
  },
];

// Demo data for real-time alerts with severity
const realTimeAlertsData = [
  {
    message:
      "Weather Alert: Heavy monsoon rains expected in Mumbai. Avoid coastal areas.",
    severity: "critical", // red
  },
  {
    message:
      "Event Notice: Major cultural festival in Jaipur today. Expect traffic delays.",
    severity: "caution", // yellow
  },
  {
    message:
      "Safety Tip: Always keep your digital ID accessible and share your itinerary with family.",
    severity: "safe", // green
  },
  {
    message:
      "Health Advisory: High pollution levels reported in Delhi. Consider wearing a mask.",
    severity: "caution", // yellow
  },
  {
    message:
      "Security Alert: A protest is planned near India Gate. Please avoid the area.",
    severity: "critical", // red
  },
];

// User reviews for the landing page testimonials
const userReviews = [
  {
    name: "Sunita Reddy",
    review:
      "This app made me feel so safe exploring new cities. The real-time updates were incredibly helpful!",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    review:
      "A fantastic initiative for tourists. The digital ID is so convenient and the panic button is a great security feature.",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    review:
      "As a foreign tourist, I felt much more confident traveling in India with this system. Highly recommended!",
    rating: 5,
  },
  {
    name: "Vikram Gupta",
    review:
      "The geo-fencing alerts saved me from entering a restricted area. Amazing technology!",
    rating: 4,
  },
];

// News feed for live updates section
const newsFeed = [
  "New heritage walk launched in Jaipur's Pink City.",
  "Guidelines issued for trekking in the Northeast.",
  "Upcoming cultural festival in Goa on November 5th.",
  "Traffic advisory for tourists in Delhi NCR.",
  "Weather alert: Monsoon approaching Kerala coast.",
  "New safety protocols implemented at major tourist sites.",
];

// Travel destination safety data for search feature
const safeTravelZones = [
  "Jaipur",
  "Delhi",
  "Agra",
  "Goa",
  "Mumbai",
  "Bangalore",
  "Chennai",
  "Hyderabad",
  "Pune",
  "Kochi",
];
const unsafeTravelZones = [
  "Remote Forest",
  "Naxal-prone area",
  "Restricted Zone 4B",
  "Border Area Alpha",
  "High Risk Valley",
];

// =================================================================================
// GLOBAL APPLICATION STATE
// Variables to track current user session and application state
// =================================================================================

let currentUser = null; // Stores currently logged in user data
let isLoggedIn = false; // Tracks authentication state

// =================================================================================
// PAGE INITIALIZATION AND SETUP
// Functions that run when the page loads to set up the interface
// =================================================================================

// Initialize the application when page loads
document.addEventListener("DOMContentLoaded", function () {
  populateReviews();
  setupSmoothScrolling();
});

// Populate user reviews on the landing page
function populateReviews() {
  const reviewsContainer = document.getElementById("reviewsContainer");
  userReviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "card-royal rounded-xl p-6 shadow-royal";
    reviewCard.innerHTML = `
                    <div class="flex items-center mb-4">
                        <div class="w-12 h-12 gradient-saffron rounded-full flex items-center justify-center mr-4">
                            <span class="text-white font-bold">${review.name.charAt(
                              0
                            )}</span>
                        </div>
                        <div>
                            <h4 class="font-semibold text-royalblue">${
                              review.name
                            }</h4>
                            <div class="flex">
                                ${Array(review.rating).fill("⭐").join("")}
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600">"${review.review}"</p>
                `;
    reviewsContainer.appendChild(reviewCard);
  });
}

// Set up smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// =================================================================================
// USER INTERFACE NAVIGATION FUNCTIONS
// Functions to show/hide different sections of the application
// =================================================================================

// Show signup form modal
function showSignup() {
  document.getElementById("signupForm").classList.remove("hidden");
}

// Hide signup form modal
function hideSignup() {
  document.getElementById("signupForm").classList.add("hidden");
}

// Show login form modal
function showLogin() {
  document.getElementById("loginForm").classList.remove("hidden");
}

// Hide login form modal
function hideLogin() {
  document.getElementById("loginForm").classList.add("hidden");
}

// Show SOS emergency modal
function showSOSModal() {
  const modal = document.getElementById("sosModal");
  const emergencyContactsDiv = document.getElementById("sosEmergencyContacts");

  if (currentUser) {
    emergencyContactsDiv.innerHTML = currentUser.emergencyContacts
      .map(
        (contact) => `
      <div class="flex items-center space-x-2 mb-1">
          <span>📞</span>
          <span>${contact.name} (${contact.relation}): ${contact.phone}</span>
      </div>`
      )
      .join("");
  }

  modal.classList.remove("hidden");
}

// Hide SOS emergency modal
function hideSOSModal() {
  document.getElementById("sosModal").classList.add("hidden");
}

// Show success notification modal
function showSuccessModal(message) {
  document.getElementById("successMessage").textContent = message;
  document.getElementById("successModal").classList.remove("hidden");
}

// Hide success notification modal
function hideSuccessModal() {
  document.getElementById("successModal").classList.add("hidden");
}

// Show error notification modal
function showErrorModal(message) {
  document.getElementById("errorMessage").textContent = message;
  document.getElementById("errorModal").classList.remove("hidden");
}

// Hide error notification modal
function hideErrorModal() {
  document.getElementById("errorModal").classList.add("hidden");
}

// =================================================================================
// USER AUTHENTICATION FUNCTIONS
// Handle signup, login, and logout functionality
// =================================================================================

// Process user signup form submission
function processSignup(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("signupName").value;
  const passport = document.getElementById("signupPassport").value;
  const dob = document.getElementById("signupDOB").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  const mobile = document.getElementById("signupMobile").value;
  const location = document.getElementById("signupLocation").value;
  const emergencyName = document.getElementById("signupEmergencyName").value;
  const emergencyPhone = document.getElementById("signupEmergencyPhone").value;
  const emergencyEmail = document.getElementById("signupEmergencyEmail").value;

  // Prevent duplicate email registration
  if (touristData.some((u) => u.email === email)) {
    showErrorModal(
      "This email is already registered. Please login or use a different email."
    );
    return; // Do NOT close the signup modal
  }

  // Generate digital ID
  const digitalId =
    "SIH25" +
    Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0");

  // Add new user to touristData (for demo only, not persistent)
  touristData.push({
    id: digitalId,
    name: name,
    passport: passport,
    itinerary: location,
    emergencyContacts: [
      { name: emergencyName, phone: emergencyPhone, relation: "Primary" },
    ],
    location: { lat: 28.6139, lng: 77.209 }, // Default to Delhi
    safetyScore: 90,
    status: "safe",
    travelHistory: [],
    news: [],
    alerts: [],
    email: email,
    dob: dob,
    mobile: mobile,
    password: password,
  });

  hideSignup();
  showSuccessModal(
    `Welcome to Surakshā! Your Digital ID is ${digitalId}. Please login with your email to access your dashboard.`
  );
}

// Process user login form submission
function processLogin(event) {
  event.preventDefault();

  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  // Find user by email and password
  const user = touristData.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    currentUser = user;
    isLoggedIn = true;
    hideLogin();
    showDashboard();
    startRealTimeUpdates(); // Start real-time updates on successful login
  } else {
    showErrorModal("Invalid email or password.");
  }
}

// Log out current user
function logout() {
  currentUser = null;
  isLoggedIn = false;
  document.getElementById("touristDashboard").classList.add("hidden");
  document.getElementById("mainContent").classList.remove("hidden");
  document.getElementById("landingPage").classList.remove("hidden");

  // Show navigation bar and tourist login button again
  document.querySelector("nav").classList.remove("hidden");
  const loginBtn = document.getElementById("touristLoginBtn");
  if (loginBtn) loginBtn.classList.remove("hidden");
}

// =================================================================================
// DASHBOARD RENDERING FUNCTIONS
// Functions to populate and display the user dashboard
// =================================================================================

// Show main dashboard interface
function showDashboard() {
  document.getElementById("landingPage").classList.add("hidden");
  document.getElementById("touristDashboard").classList.remove("hidden");

  // Hide navigation bar and tourist login button
  document.querySelector("nav").classList.add("hidden");
  const loginBtn = document.getElementById("touristLoginBtn");
  if (loginBtn) loginBtn.classList.add("hidden");

  populateDashboard();

  // Attach dropdown event listeners only when dashboard is visible
  const btn = document.getElementById("userDropdownBtn");
  const dropdown = document.getElementById("userDropdown");
  if (btn && dropdown) {
    btn.onclick = function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
    };
    document.addEventListener("click", function (e) {
      if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add("hidden");
      }
    });
  }
}

// Populate dashboard with user data
function populateDashboard() {
  if (!currentUser) return;

  // User dropdown info
  document.getElementById("userName").textContent = currentUser.name;
  document.getElementById("dropdownFullName").textContent = currentUser.name;
  document.getElementById("dropdownDigitalId").textContent = currentUser.id;
  document.getElementById("dropdownDOB").textContent = currentUser.dob;
  document.getElementById("dropdownEmail").textContent = currentUser.email;
  document.getElementById("dropdownMobile").textContent = currentUser.mobile;
  document.getElementById("dropdownLocation").textContent = currentUser.location
    ? `Lat: ${currentUser.location.lat}, Lng: ${currentUser.location.lng}`
    : "";

  // Update user information in header
  document.getElementById("userDigitalId").textContent = currentUser.id;

  // Get current city from itinerary
  const itineraryCities = currentUser.itinerary.split("-");
  let currentCity = itineraryCities[itineraryCities.length - 1];

  if (itineraryCities.length > 1) {
    currentCity = `${
      itineraryCities[itineraryCities.length - 2]
    }, ${currentCity}`;
  }

  // Update location information
  document.getElementById("currentLocation").textContent = currentCity;
  document.getElementById("coordinates").textContent = currentCity;

  // Update safety score
  updateSafetyScore(currentUser.safetyScore);

  // Populate travel history
  populateTravelHistory();

  // Populate emergency contact
  populateEmergencyContact();

  // Populate live updates
  populateUpcomingTrips();

  // Populate live updates
  populateLiveUpdates();

  // Populate active alerts
  populateActiveAlerts();
}

// Update the circular safety score indicator
function updateSafetyScore(score) {
  document.getElementById("safetyScore").textContent = score;

  const circle = document.getElementById("safetyCircle");
  const circumference = 2 * Math.PI * 56; // radius = 56
  const offset = circumference - (score / 100) * circumference;
  circle.style.strokeDashoffset = offset;

  // Update color based on score
  let color, status;
  if (score >= 80) {
    color = "#10B981"; // green
    status = "You're in a safe zone";
  } else if (score >= 60) {
    color = "#F59E0B"; // yellow
    status = "Moderate risk area";
  } else {
    color = "#EF4444"; // red
    status = "High risk area - Stay alert";
  }

  circle.setAttribute("stroke", color);
  document.getElementById("safetyStatus").textContent = status;
  document.getElementById("safetyStatus").className = `text-sm font-medium ${
    score >= 80
      ? "text-green-600"
      : score >= 60
      ? "text-yellow-600"
      : "text-red-600"
  }`;
}

// Populate travel history section
function populateTravelHistory() {
  const container = document.getElementById("travelHistory");
  container.innerHTML = "";

  if (!currentUser.travelHistory.length) {
    container.innerHTML =
      '<div class="text-gray-500 py-4">No travel history yet.</div>';
    return;
  }

  currentUser.travelHistory.forEach((trip) => {
    const tripElement = document.createElement("div");
    tripElement.className =
      "flex justify-between items-center p-3 bg-gray-50 rounded-lg";
    tripElement.innerHTML = `
                    <div>
                        <div class="font-medium text-royalblue">${trip.destination}</div>
                        <div class="text-sm text-gray-600">${trip.from} to ${trip.to}</div>
                    </div>
                    <div class="text-green-500">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </div>
                `;
    container.appendChild(tripElement);
  });
}

// Populate emergency contact information
function populateEmergencyContact() {
  const container = document.getElementById("emergencyContact");
  if (!currentUser.emergencyContacts || !currentUser.emergencyContacts.length) {
    container.innerHTML =
      '<div class="text-gray-500 py-4">No emergency contact set.</div>';
    return;
  }

  container.innerHTML = currentUser.emergencyContacts
    .map(
      (contact) => `
    <div class="p-3 bg-gray-50 rounded-lg">
        <div class="font-medium text-gray-800">${contact.name}</div>
        <div class="text-sm text-gray-600">${contact.relation}</div>
        <div class="text-sm text-royalblue font-semibold mt-1">${contact.phone}</div>
    </div>
  `
    )
    .join("");
}

// Populate upcoming trips section
function populateUpcomingTrips() {
  const container = document.getElementById("upcomingTrips");
  container.innerHTML = "";

  if (!currentUser.upcomingTrips || !currentUser.upcomingTrips.length) {
    container.innerHTML =
      '<p class="text-gray-500">No upcoming trips planned.</p>';
    return;
  }

  currentUser.upcomingTrips.forEach((trip) => {
    const tripElement = document.createElement("div");
    tripElement.className =
      "flex justify-between items-center p-3 bg-blue-50 rounded-lg";
    tripElement.innerHTML = `
              <div>
                  <div class="font-medium text-royalblue">${
                    trip.destination
                  }</div>
                  <div class="text-sm text-gray-600">${formatDate(
                    trip.from
                  )} to ${formatDate(trip.to)}</div>
              </div>
              <div class="text-blue-500">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                  </svg>
              </div>
          `;
    container.appendChild(tripElement);
  });
}

// Populate live updates section
function populateLiveUpdates() {
  const container = document.getElementById("liveUpdates");
  container.innerHTML = "";

  // Combine user-specific news and general news feed
  const allUpdates = [...currentUser.news, ...newsFeed.slice(0, 3)];

  allUpdates.forEach((update, index) => {
    const updateElement = document.createElement("div");
    updateElement.className =
      "p-3 bg-blue-50 rounded-lg border-l-4 border-blue-400";
    updateElement.innerHTML = `
                    <div class="flex items-start space-x-2">
                        <div class="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <div class="text-sm text-gray-700">${update}</div>
                    </div>
                `;
    container.appendChild(updateElement);
  });
}

// Populate active alerts section
function populateActiveAlerts() {
  const container = document.getElementById("activeAlerts");
  container.innerHTML = "";

  const userAlerts = activeAlerts.filter(
    (alert) => alert.touristId === currentUser.id
  );

  if (userAlerts.length === 0) {
    container.innerHTML =
      '<div class="text-center text-gray-500 py-4">No active alerts</div>';
    return;
  }

  userAlerts.forEach((alert) => {
    const alertElement = document.createElement("div");
    alertElement.className =
      "p-3 bg-red-50 rounded-lg border-l-4 border-red-400 mb-3";
    alertElement.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div>
                            <div class="font-medium text-red-700">${alert.type}</div>
                            <div class="text-sm text-gray-600 mt-1">${alert.location}</div>
                            <div class="text-xs text-gray-500 mt-1">${alert.timestamp}</div>
                        </div>
                        <div class="text-red-500">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                    </div>
                `;
    container.appendChild(alertElement);
  });
}

// =================================================================================
// INTERACTIVE FEATURES
// Functions for interactive dashboard features like travel search and SOS
// =================================================================================

// Check travel destination safety
function checkTravelSafety() {
  const destination = document.getElementById("travelSearch").value.trim();
  const resultDiv = document.getElementById("safetyResult");

  if (!destination) {
    resultDiv.innerHTML =
      '<div class="text-red-500 text-sm">Please enter a destination</div>';
    resultDiv.classList.remove("hidden");
    return;
  }

  let message, colorClass;

  if (
    safeTravelZones.some((zone) =>
      zone.toLowerCase().includes(destination.toLowerCase())
    )
  ) {
    message = `✅ "${destination}" is currently safe to travel to. Enjoy your journey!`;
    colorClass = "text-green-600 bg-green-50 border-green-200";
  } else if (
    unsafeTravelZones.some((zone) =>
      zone.toLowerCase().includes(destination.toLowerCase())
    )
  ) {
    message = `⚠️ High-risk zone detected for "${destination}". Travel with extreme caution and inform authorities.`;
    colorClass = "text-red-600 bg-red-50 border-red-200";
  } else {
    message = `ℹ️ No specific safety data available for "${destination}". Please check with local authorities before traveling.`;
    colorClass = "text-yellow-600 bg-yellow-50 border-yellow-200";
  }

  resultDiv.innerHTML = `<div class="text-sm p-3 rounded-lg border ${colorClass}">${message}</div>`;
  resultDiv.classList.remove("hidden");
}

// Handle adding a new trip
function processAddTrip(event) {
  event.preventDefault();
  const destination = document.getElementById("tripDestination").value;
  const startDate = document.getElementById("tripStartDate").value;
  const endDate = document.getElementById("tripEndDate").value;

  if (destination && startDate && endDate) {
    const newTrip = {
      destination: destination,
      from: startDate,
      to: endDate,
    };
    currentUser.upcomingTrips.push(newTrip);
    populateUpcomingTrips();
    hideAddTripModal();
    showSuccessModal(`Successfully added your trip to ${destination}!`);

    // Generate a related safety alert for the new destination
    const matchingAlert = realTimeAlertsData.find((alert) =>
      alert.message.toLowerCase().includes(destination.toLowerCase())
    );
    if (matchingAlert) {
      displayRealTimeAlert(matchingAlert);
    }
  }
}

// Handle SOS emergency alerts
function triggerSOS(type) {
  let message, alertType;

  switch (type) {
    case "panic":
      message =
        "🚨 PANIC ALERT sent! Emergency services and your contacts have been notified immediately. Help is on the way!";
      alertType = "CRITICAL";
      break;
    case "battery":
      message =
        "🔋 Low battery alert sent. Authorities have been notified of your potential communication loss.";
      alertType = "WARNING";
      break;
    case "signal":
      message =
        "📶 No signal alert sent. Your last known location has been logged and shared with emergency contacts.";
      alertType = "INFO";
      break;
    case "safe":
      message =
        "✅ All clear signal sent! Previous alerts have been cancelled. Stay safe!";
      alertType = "RESOLVED";
      break;
    case "lowrisk":
      message =
        "ℹ️ Low risk report submitted. Non-emergency assistance will be provided as needed.";
      alertType = "LOW_RISK";
      break;
    default:
      message = "Alert sent successfully.";
      alertType = "GENERAL";
  }

  hideSOSModal();
  showSuccessModal(message);

  // Simulate adding the alert to the system (in a real app, this would send to backend)
  console.log(
    `SOS Alert: ${alertType} from ${currentUser.name} (${
      currentUser.id
    }) at ${new Date().toISOString()}`
  );
}

// Handle contact form submission
function submitContactForm(event) {
  event.preventDefault();
  showSuccessModal(
    "Thank you for your message! Our support team will get back to you within 24 hours."
  );
  document.getElementById("contactForm").reset();
}

// =================================================================================
// UTILITY FUNCTIONS
// Helper functions for various application features
// =================================================================================

// Format date for display
function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-IN", options);
}

// Generate random coordinates for simulation
function generateRandomCoordinates(baseLatitude, baseLongitude, radiusKm = 10) {
  const radiusInDegrees = radiusKm / 111; // Approximate conversion
  const lat = baseLatitude + (Math.random() - 0.5) * 2 * radiusInDegrees;
  const lng = baseLongitude + (Math.random() - 0.5) * 2 * radiusInDegrees;
  return { lat: parseFloat(lat.toFixed(6)), lng: parseFloat(lng.toFixed(6)) };
}

// Display a real-time alert pop-up
function displayRealTimeAlert(alert) {
  const popup = document.getElementById("realTimeAlertPopup");
  popup.innerHTML = `<strong>${
    alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)
  }:</strong> ${alert.message}`;

  // Set color based on severity
  if (alert.severity === "critical") {
    popup.className =
      "fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl p-4 rounded-lg shadow-lg text-white z-50 text-center transition-all duration-300 bg-red-500 animate-pulse";
  } else if (alert.severity === "caution") {
    popup.className =
      "fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl p-4 rounded-lg shadow-lg text-white z-50 text-center transition-all duration-300 bg-yellow-500";
  } else {
    popup.className =
      "fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl p-4 rounded-lg shadow-lg text-white z-50 text-center transition-all duration-300 bg-green-500";
  }

  popup.classList.remove("hidden");

  // Hide after 8 seconds
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 8000);
}

// Simulate real-time updates (for demonstration purposes)
function startRealTimeUpdates() {
  if (!currentUser) return;

  setInterval(() => {
    // Simulate minor location changes
    const newCoords = generateRandomCoordinates(
      currentUser.location.lat,
      currentUser.location.lng,
      1
    );
    currentUser.location = newCoords;

    const itineraryCities = currentUser.itinerary.split("-");
    let currentCity = itineraryCities[itineraryCities.length - 1];

    if (itineraryCities.length > 1) {
      currentCity = `${
        itineraryCities[itineraryCities.length - 2]
      }, ${currentCity}`;
    }
    // Update display
    document.getElementById("currentLocation").textContent = currentCity;
    document.getElementById("coordinates").textContent = currentCity;

    // Occasionally add new updates
    if (Math.random() < 0.1) {
      // 10% chance every interval
      const randomUpdate =
        newsFeed[Math.floor(Math.random() * newsFeed.length)];
      currentUser.news.unshift(randomUpdate);
      if (currentUser.news.length > 5) currentUser.news.pop();
      populateLiveUpdates();
    }

    // 20% chance to show a random real-time alert pop-up
    if (Math.random() < 0.2) {
      const randomAlert =
        realTimeAlertsData[
          Math.floor(Math.random() * realTimeAlertsData.length)
        ];
      displayRealTimeAlert(randomAlert);
    }
  }, 15000); // Update every 15 seconds
}

// Initialize real-time updates when user logs in
document.addEventListener("DOMContentLoaded", function () {
  // Start real-time updates if user is logged in
  if (isLoggedIn) {
    startRealTimeUpdates();
  }
});

// =================================================================================
// RESPONSIVE DESIGN HELPERS
// Functions to handle responsive behavior and mobile optimizations
// =================================================================================

// Handle mobile menu toggle (if needed for future expansion)
function toggleMobileMenu() {
  // Implementation for mobile menu toggle
  console.log("Mobile menu toggle - for future implementation");
}

// Optimize dashboard for mobile view
function optimizeForMobile() {
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    // Add mobile-specific optimizations
    document.body.classList.add("mobile-view");
  } else {
    document.body.classList.remove("mobile-view");
  }
}

// Listen for window resize to handle responsive changes
window.addEventListener("resize", optimizeForMobile);

// Initialize responsive optimizations
document.addEventListener("DOMContentLoaded", optimizeForMobile);

// =================================================================================
// DEMO AND PRESENTATION HELPERS
// Functions specifically for demonstration and presentation purposes
// =================================================================================

// Auto-login for demo purposes (can be called from browser console)
function demoLogin(email = "aarav.sharma@example.com") {
  const user = touristData.find((u) => u.email === email);
  if (user) {
    currentUser = user;
    isLoggedIn = true;
    showDashboard();
    startRealTimeUpdates();
    console.log(`Demo login successful for ${user.name}`);
  }
}

// Show demo data in console for presentation
function showDemoData() {
  console.log("=== SURAKSHĀ DEMO DATA ===");
  console.log(
    "Available users for login:",
    touristData.map((u) => ({ name: u.name, passport: u.passport }))
  );
  console.log("High risk zones:", highRiskZones);
  console.log("Active alerts:", activeAlerts);
  console.log("Safe travel zones:", safeTravelZones);
  console.log("Unsafe travel zones:", unsafeTravelZones);
  console.log("=========================");
}

// Initialize demo helpers
document.addEventListener("DOMContentLoaded", function () {
  // Log demo instructions
  console.log("🇮🇳 SURAKSHĀ - Tourist Safety System");
  console.log("For demo login, try: P1234567, P8765432, or F1122334");
  console.log('Type "showDemoData()" in console to see all demo data');
  console.log('Type "demoLogin()" for quick demo login');
});

// User dropdown toggle
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("userDropdownBtn");
  const dropdown = document.getElementById("userDropdown");
  if (btn && dropdown) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdown.classList.toggle("hidden");
    });
    // Hide dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.add("hidden");
      }
    });
  }
});
