/* ==========================================================================
   Deck engine — navigation, hash routing, progress, fullscreen, overview,
   speaker notes overlay. Framework-free.
   ========================================================================== */
(function () {
  "use strict";

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var total = slides.length;
  var current = 0;

  var stage = document.getElementById("stage");
  var progressBar = document.getElementById("progress-bar");
  var counter = document.getElementById("slide-counter");
  var notesOverlay = document.getElementById("notes-overlay");
  var overview = document.getElementById("overview");

  function clamp(n) {
    return Math.max(0, Math.min(total - 1, n));
  }

  function slideFromHash() {
    var m = /^#\/?(\d+)$/.exec(window.location.hash);
    if (m) {
      var n = parseInt(m[1], 10) - 1;
      if (!isNaN(n)) return clamp(n);
    }
    return 0;
  }

  function updateChrome() {
    slides.forEach(function (s, i) {
      s.classList.toggle("active", i === current);
    });
    if (progressBar) {
      progressBar.style.width = ((current + 1) / total) * 100 + "%";
    }
    if (counter) {
      counter.textContent = (current + 1) + " / " + total;
    }
    updateNotes();
  }

  function goTo(index, opts) {
    current = clamp(index);
    updateChrome();
    var hash = "#/" + (current + 1);
    if (window.location.hash !== hash) {
      if (opts && opts.replace) {
        history.replaceState(null, "", hash);
      } else {
        history.pushState(null, "", hash);
      }
    }
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function updateNotes() {
    if (!notesOverlay || !notesOverlay.classList.contains("visible")) return;
    renderNotes();
  }

  function renderNotes() {
    var slide = slides[current];
    var notes = slide.querySelector(".notes");
    notesOverlay.innerHTML =
      "<h2>Speaker Notes — Slide " + (current + 1) + " / " + total + "</h2>" +
      (notes ? notes.innerHTML : "<em>(no notes for this slide)</em>");
  }

  function toggleNotes() {
    notesOverlay.classList.toggle("visible");
    if (notesOverlay.classList.contains("visible")) renderNotes();
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen && document.exitFullscreen();
    }
  }

  function buildOverview() {
    overview.innerHTML = "";
    slides.forEach(function (s, i) {
      var thumb = document.createElement("div");
      thumb.className = "overview-thumb" + (i === current ? " current" : "");
      var h1 = s.querySelector("h1, h2, h3");
      var num = document.createElement("div");
      num.className = "thumb-number";
      num.textContent = String(i + 1).padStart(2, "0");
      var title = document.createElement("div");
      title.className = "thumb-title";
      title.textContent = h1 ? h1.textContent : "Slide " + (i + 1);
      thumb.appendChild(num);
      thumb.appendChild(title);
      thumb.addEventListener("click", function () {
        goTo(i);
        toggleOverview(false);
      });
      overview.appendChild(thumb);
    });
  }

  function toggleOverview(force) {
    var show = typeof force === "boolean" ? force : !overview.classList.contains("visible");
    if (show) buildOverview();
    overview.classList.toggle("visible", show);
  }

  function scaleStage() {
    var scale = Math.min(
      window.innerWidth / 1280,
      window.innerHeight / 720
    );
    stage.style.transform = "translate(-50%, -50%) scale(" + scale + ")";
  }

  // Keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (notesOverlay.classList.contains("visible") && e.key !== "s" && e.key !== "S" && e.key !== "Escape") {
      return;
    }
    switch (e.key) {
      case "ArrowRight":
      case "ArrowDown":
      case " ":
      case "PageDown":
        e.preventDefault();
        next();
        break;
      case "ArrowLeft":
      case "ArrowUp":
      case "PageUp":
        e.preventDefault();
        prev();
        break;
      case "Home":
        e.preventDefault();
        goTo(0);
        break;
      case "End":
        e.preventDefault();
        goTo(total - 1);
        break;
      case "f":
      case "F":
        toggleFullscreen();
        break;
      case "o":
      case "O":
        toggleOverview();
        break;
      case "s":
      case "S":
        toggleNotes();
        break;
      case "Escape":
        if (overview.classList.contains("visible")) toggleOverview(false);
        if (notesOverlay.classList.contains("visible")) toggleNotes();
        break;
    }
  });

  // Touch / swipe navigation
  var touchStartX = null;
  document.addEventListener("touchstart", function (e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  document.addEventListener("touchend", function (e) {
    if (touchStartX === null) return;
    var dx = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next(); else prev();
    }
    touchStartX = null;
  }, { passive: true });

  window.addEventListener("hashchange", function () {
    current = slideFromHash();
    updateChrome();
  });

  window.addEventListener("resize", scaleStage);

  // Init
  current = slideFromHash();
  scaleStage();
  updateChrome();
  goTo(current, { replace: true });
})();
