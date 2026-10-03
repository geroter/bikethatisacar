(function () {
  var root = document.documentElement;
  root.classList.add('js');

  // A new page always starts at the top, unless the link points at a section.
  if (!location.hash) {
    window.scrollTo(0, 0);
    var top = document.getElementById('top');
    if (top && top.scrollIntoView) {
      try { top.scrollIntoView({ block: 'start' }); } catch (e) { top.scrollIntoView(true); }
    }
  }

  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      nav.classList.toggle('open', !open);
    });
  }

  // Back to top button, shown once the header has scrolled out of view
  var btn = document.createElement('a');
  btn.href = '#top';
  btn.className = 'to-top';
  btn.innerHTML = '<span aria-hidden="true">&#8593;</span> Top';
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    var t = document.getElementById('top');
    var smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (t) t.scrollIntoView({ block: 'start', behavior: smooth ? 'smooth' : 'auto' });
    var first = document.querySelector('.brand');
    if (first) first.focus({ preventScroll: true });
  });
  document.body.appendChild(btn);
  var header = document.getElementById('top');
  if (header && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      btn.classList.toggle('show', !entries[0].isIntersecting);
    }, { rootMargin: '200px 0px 0px 0px' }).observe(header);
  }

  // Activity filters on the home page
  var buttons = document.querySelectorAll('.filter button');
  var items = document.querySelectorAll('.activity-item');
  var status = document.querySelector('.filter-status');
  buttons.forEach(function (b) {
    b.addEventListener('click', function () {
      var key = b.dataset.filter;
      var label = b.textContent.replace(/^(P|J|I|fr)/, '').trim();
      var shown = 0;
      items.forEach(function (li) {
        var match = key === 'all' || li.dataset.grades.split(' ').indexOf(key) !== -1;
        li.hidden = !match;
        if (match) shown++;
      });
      buttons.forEach(function (o) { o.setAttribute('aria-pressed', o === b ? 'true' : 'false'); });
      if (status) status.textContent = key === 'all' ? '' : shown + ' of ' + items.length + ' activities for ' + label + '.';
    });
  });
})();
