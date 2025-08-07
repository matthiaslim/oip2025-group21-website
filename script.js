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
    type: "youtube",
    youtubeId: "Nt4m2N8jkig",
    content: `
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl mb-6">
                <div class="text-6xl mb-4"><i class="fa-solid fa-display"></i></div>
                <p class="text-slate-600 mb-4">Our Week 2 pitch video showcasing our refined prototypes and new findings</p>
                <div class="mb-6 bg-white p-4 rounded-lg shadow-sm">
                    <div class="relative w-full" style="padding-bottom: 56.25%; /* 16:9 aspect ratio */">
                        <iframe 
                            class="absolute top-0 left-0 w-full h-full rounded-lg"
                            src="https://www.youtube.com/embed/Nt4m2N8jkig?rel=0&modestbranding=1"
                            title="Week 2 Pitch Video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen>
                        </iframe>
                    </div>
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
