// Video modal functionality
const videoData = {
  "week1-video": {
    title: "Week 1 Pitch Video",
    type: "youtube",
    youtubeId: "O-rfPrNxwM8",
    content: `
            <div class="bg-gradient-to-br from-emerald-50 to-amber-50 p-8 rounded-xl mb-6">
                <div class="text-4xl mb-4"><i class="fa-solid fa-display"></i></div>
                <h4 class="text-xl font-bold mb-4">Week 1 Pitch Video</h4>
                <p class="text-slate-600 mb-6">Our initial pitch presentation covering problem identification, user research findings, and proposed solution approach.</p>
                
                <!-- YouTube Video Player -->
                <div class="mb-6 bg-white p-4 rounded-lg shadow-sm">
                    <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
                        <iframe 
                            class="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/O-rfPrNxwM8?rel=0&modestbranding=1"
                            title="Week 1 Pitch Video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        `,
  },
  "week2-video": {
    title: "Week 2 Pitch Video",
    content: `
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl mb-6">
                <div class="text-6xl mb-4"><i class="fa-solid fa-display"></i></div>
                <h4 class="text-xl font-bold mb-4">Video Coming Soon</h4>
                <p class="text-slate-600 mb-4">Our Week 2 pitch video showcasing our refined prototypes and new findings will be available here once completed.</p>
                <div class="bg-white p-4 rounded-lg">
                    <p class="text-sm text-slate-500 mb-2"><strong>Expected Content:</strong></p>
                    <ul class="text-sm text-slate-600 space-y-1">
                        <li>• Prototype iterations</li>
                        <li>• User feedback integration</li>
                        <li>• Solution refinements</li>
                        <li>• Implementation planning</li>
                    </ul>
                </div>
            </div>
        `,
  },
  "lofi-prototype": {
    title: "Lo-Fi Sketch Prototype",
    content: `
            <div class="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-xl mb-6">
                <div class="text-6xl mb-4"><i class="fa-solid fa-pencil"></i></div>
                <h4 class="text-xl font-bold mb-4">Week 1 Initial Sketch</h4>
                <p class="text-slate-600 mb-6">Our early hand-drawn prototype exploring accessible tour experiences for both deaf and blind visitors.</p>
                
                <!-- Lo-Fi Prototype Image -->
                <div class="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <div class="text-center">
                        <img src="week1-lofi-prototype.jpg" alt="Week 1 Lo-Fi Prototype Sketch" class="w-full max-w-4xl mx-auto rounded-lg shadow-md border-2 border-amber-200">
                        <p class="text-sm text-slate-600 mt-3 italic">Initial hand-drawn sketch exploring accessible tour interface concepts</p>
                    </div>
                </div>
                
                <!-- Key Features Explored -->
                <div class="bg-white p-6 rounded-lg border-2 border-dashed border-amber-200 mb-6">
                    <h5 class="font-bold text-amber-800 mb-4">🎯 Key Features Explored in This Sketch</h5>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="space-y-2 text-sm text-slate-600">
                            <h6 class="font-semibold text-amber-700"><i class="fa-solid fa-ear-deaf"></i> For Deaf Visitors:</h6>
                            <p>• QR code placement and scanning</p>
                            <p>• BSL video interface design</p>
                            <p>• Visual navigation elements</p>
                        </div>
                        <div class="space-y-2 text-sm text-slate-600">
                            <h6 class="font-semibold text-amber-700"><i class="fa-solid fa-person-walking-with-cane"></i> For Blind Visitors:</h6>
                            <p>• Audio interface concepts</p>
                            <p>• Voice navigation flow</p>
                            <p>• Tactile interaction ideas</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-amber-100 p-4 rounded-lg">
                    <p class="text-sm text-amber-800">
                        <strong>Design Process:</strong> This initial sketch helped us visualize the core user journeys and identify key interaction points for creating an inclusive tour experience at Glasgow Botanic Gardens.
                    </p>
                </div>
            </div>
        `,
  },
  "hifi-prototype": {
    title: "Hi-Fi Figma Prototypes",
    content: `
            <div class="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl mb-6">
                <div class="text-6xl mb-4">🎨</div>
                <h4 class="text-xl font-bold mb-4">Interactive Digital Mockups</h4>
                <p class="text-slate-600 mb-6">Refined Figma prototypes with detailed interactions, accessibility features, and realistic content.</p>
                
                <div class="grid md:grid-cols-2 gap-6 mb-6">
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <h5 class="font-bold text-emerald-800 mb-3">📱 Mobile Interface</h5>
                        <div class="space-y-2 text-sm text-slate-600 mb-4">
                            <p>• Responsive QR code scanner</p>
                            <p>• BSL video player interface</p>
                            <p>• Audio controls and settings</p>
                            <p>• Accessibility-first navigation</p>
                        </div>
                        <div class="bg-emerald-100 p-3 rounded">
                            <p class="text-xs text-emerald-800 font-medium">Interactive Figma prototype available</p>
                        </div>
                    </div>
                    
                    <div class="bg-white p-6 rounded-lg shadow-sm">
                        <h5 class="font-bold text-emerald-800 mb-3">🌐 Web Portal</h5>
                        <div class="space-y-2 text-sm text-slate-600 mb-4">
                            <p>• Volunteer guide dashboard</p>
                            <p>• Content management system</p>
                            <p>• Tour customization tools</p>
                            <p>• Analytics and feedback</p>
                        </div>
                        <div class="bg-emerald-100 p-3 rounded">
                            <p class="text-xs text-emerald-800 font-medium">Clickable prototype coming soon</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-emerald-100 to-teal-100 p-4 rounded-lg">
                    <p class="text-sm text-emerald-800">
                        <strong>View Full Prototype:</strong> The complete interactive Figma prototype will be embedded here, showcasing the full user journey from QR code scanning to content consumption.
                    </p>
                </div>
            </div>
        `,
  },
};

// Modal functions
function openVideoModal(videoId) {
  const modal = document.getElementById("videoModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");

  if (videoData[videoId]) {
    modalTitle.textContent = videoData[videoId].title;
    modalContent.innerHTML = videoData[videoId].content;
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  }
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  modal.classList.add("hidden");
  document.body.style.overflow = "auto"; // Restore scrolling
}

// Initialize event listeners when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  // Close modal when clicking outside of it
  const videoModal = document.getElementById("videoModal");
  if (videoModal) {
    videoModal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeVideoModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeVideoModal();
    }
  });

  // Fade-in animation
  const sections = document.querySelectorAll(".section-fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      rootMargin: "0px",
      threshold: 0.1,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Scroll progress
  window.addEventListener("scroll", () => {
    const scrollProgress = document.getElementById("scrollProgress");
    if (scrollProgress) {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      scrollProgress.style.width = scrollPercent * 100 + "%";
    }
  });

  // Smooth scrolling
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
});
