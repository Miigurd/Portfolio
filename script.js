/**
 * Kirt Asia S. Mag-usara - Personal Portfolio Script
 * Refined, zero-dependency vanilla JS for:
 * 1. Deep-link handling (#qa, #dev, #about, #skills, #resumes, #contact) with accessible focus.
 * 2. Sticky navigation active section highlight via IntersectionObserver.
 * 3. Session-only manual theme toggle (persisted in sessionStorage only, zero tracking, no localStorage).
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Deep-Link Handling & Accessible Keyboard Focus
     -------------------------------------------------------------------------- */
  function handleDeepLink(hash) {
    if (!hash || hash === '#') return;

    try {
      var target = document.querySelector(hash);
      if (!target) return;

      setTimeout(function () {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });

        if (!target.hasAttribute('tabindex')) {
          target.setAttribute('tabindex', '-1');
        }
        target.focus({ preventScroll: true });
      }, 60);
    } catch (e) {
      // In case of invalid selector, fail gracefully
    }
  }

  // Handle direct URL landings with hash on initial load (e.g. domain/#qa or domain/#dev)
  window.addEventListener('DOMContentLoaded', function () {
    if (window.location.hash) {
      handleDeepLink(window.location.hash);
    }
  });

  // Handle hash changes when user clicks navigation links or browser back/forward
  window.addEventListener('hashchange', function () {
    if (window.location.hash) {
      handleDeepLink(window.location.hash);
    }
  });

  /* --------------------------------------------------------------------------
     2. Sticky Header Active Section Spy
     -------------------------------------------------------------------------- */
  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.site-nav .nav-link');
    if (!sections.length || !navLinks.length) return;

    if ('IntersectionObserver' in window) {
      var observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      };

      var activeId = '';

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            activeId = entry.target.getAttribute('id');
            updateActiveLink(activeId);
          }
        });
      }, observerOptions);

      sections.forEach(function (section) {
        observer.observe(section);
      });
    }

    function updateActiveLink(id) {
      if (!id) return;
      navLinks.forEach(function (link) {
        var href = link.getAttribute('href');
        if (href === '#' + id) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     3. Session-Only Manual Theme Toggle
     Kept strictly for the browser session in sessionStorage (no localStorage).
     -------------------------------------------------------------------------- */
  function initThemeToggle() {
    var toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    var SESSION_KEY = 'kirt_portfolio_theme_session';

    // Check existing session preference
    var savedTheme = null;
    try {
      savedTheme = window.sessionStorage ? window.sessionStorage.getItem(SESSION_KEY) : null;
    } catch (e) {
      // Handle private browsing mode quota exceptions
    }

    if (savedTheme === 'light' || savedTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', savedTheme);
      updateToggleText(savedTheme);
    }

    toggleBtn.addEventListener('click', function () {
      var currentTheme = document.documentElement.getAttribute('data-theme');
      var isDarkPreferred = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      var nextTheme = 'light';
      if (!currentTheme) {
        nextTheme = isDarkPreferred ? 'light' : 'dark';
      } else if (currentTheme === 'dark') {
        nextTheme = 'light';
      } else {
        nextTheme = 'dark';
      }

      document.documentElement.setAttribute('data-theme', nextTheme);
      updateToggleText(nextTheme);

      try {
        if (window.sessionStorage) {
          window.sessionStorage.setItem(SESSION_KEY, nextTheme);
        }
      } catch (e) {}
    });

    function updateToggleText(theme) {
      var icon = toggleBtn.querySelector('.theme-icon');
      var label = toggleBtn.querySelector('.theme-label');
      if (theme === 'dark') {
        if (icon) icon.textContent = '☀️';
        if (label) label.textContent = 'Light';
        toggleBtn.setAttribute('aria-label', 'Switch to light color scheme');
      } else {
        if (icon) icon.textContent = '🌙';
        if (label) label.textContent = 'Dark';
        toggleBtn.setAttribute('aria-label', 'Switch to dark color scheme');
      }
    }
  }

  // Initialize scripts on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initScrollSpy();
      initThemeToggle();
    });
  } else {
    initScrollSpy();
    initThemeToggle();
  }
})();