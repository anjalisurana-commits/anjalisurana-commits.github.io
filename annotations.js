(function () {
  'use strict';
  var dataEl = document.getElementById('essay-annotations');
  var essay = document.getElementById('essay-content');
  if (!dataEl || !essay) return;
  var annotations;
  try { annotations = JSON.parse(dataEl.textContent || '[]'); }
  catch (e) { return; }
  if (!Array.isArray(annotations)) return;

  var targets = Array.prototype.slice.call(
    essay.querySelectorAll('p, li, blockquote, h2, h3, h4')
  );
  var lastOpen = null;

  function closeCurrent() {
    if (!lastOpen) return;
    lastOpen.button.setAttribute('aria-expanded', 'false');
    lastOpen.popover.hidden = true;
    lastOpen = null;
  }

  annotations.forEach(function (entry, index) {
    if (!entry || !entry.quote || !entry.note) return;
    var quote = String(entry.quote).trim();
    var note = String(entry.note).trim();
    if (!quote || !note) return;

    var target = targets.find(function (el) {
      return (el.textContent || '').indexOf(quote) !== -1;
    });
    if (!target) return;

    var wrapper = document.createElement('span');
    wrapper.className = 'author-annotation';

    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'author-annotation-trigger';
    button.textContent = '✎';
    button.setAttribute('aria-label', 'Read an author note');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-controls', 'author-note-' + index);
    button.title = 'Author note';

    var popover = document.createElement('span');
    popover.className = 'author-annotation-popover';
    popover.id = 'author-note-' + index;
    popover.setAttribute('role', 'note');
    popover.hidden = true;

    var heading = document.createElement('strong');
    heading.textContent = 'Author note';
    var body = document.createElement('span');
    body.textContent = note;
    popover.appendChild(heading);
    popover.appendChild(body);
    wrapper.appendChild(button);
    wrapper.appendChild(popover);
    target.appendChild(wrapper);

    button.addEventListener('click', function (event) {
      event.stopPropagation();
      var wasOpen = button.getAttribute('aria-expanded') === 'true';
      closeCurrent();
      if (!wasOpen) {
        button.setAttribute('aria-expanded', 'true');
        popover.hidden = false;
        lastOpen = { button: button, popover: popover };
      }
    });
  });

  document.addEventListener('click', function (event) {
    if (lastOpen && !lastOpen.button.parentNode.contains(event.target)) closeCurrent();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeCurrent();
  });
})();
