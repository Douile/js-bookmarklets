window.addEventListener('keyup',function(e) {
  if (e.target.tagName === 'TEXTAREA') {
    var wordCount = Array.from(e.target.value.matchAll(/[\w]+[ \.]*/g)).length;
    var boundingRect = e.target.getBoundingClientRect();
    if (e.target.wordCount === undefined) {
      var el = document.createElement('span');
      el.style.position = 'absolute';
      el.style.opacity = 0.6;
      document.body.appendChild(el);
      e.target.wordCount = el;
    }
    var el = e.target.wordCount;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
    el.style.top = (boundingRect.bottom + scrollTop)+'px';
    el.style.left = (boundingRect.left + scrollLeft)+'px';
    el.innerText = wordCount+' words';
  }
})
