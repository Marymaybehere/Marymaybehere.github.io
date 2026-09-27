// Studio gallery filter
document.querySelectorAll('.filters button').forEach(function (b, _, all) {
  b.addEventListener('click', function () {
    all.forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
    var f = b.dataset.f;
    document.querySelectorAll('#gallery figure').forEach(function (fig) {
      fig.hidden = !(f === 'all' || fig.dataset.k === f);
    });
  });
});

// Copy email button
var copy = document.getElementById('copy');
if (copy) {
  copy.addEventListener('click', function () {
    var el = document.getElementById('addr');
    var select = function () {
      var r = document.createRange(); r.selectNodeContents(el);
      var s = getSelection(); s.removeAllRanges(); s.addRange(r);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(el.textContent).then(function () {
        copy.textContent = 'Copied';
        setTimeout(function () { copy.textContent = 'Copy email'; }, 1600);
      }).catch(select);
    } else { select(); }
  });
}
