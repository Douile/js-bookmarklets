Adds a span to all \<textarea\>s typed in

[Bookmarklet][bookmarklet] (created with [Bookmarklet maker](http://bookmarklets.org/maker/))


[bookmarklet]: javascript:void%20function(){window.addEventListener(%22keyup%22,function(t){if(%22TEXTAREA%22===t.target.tagName){var%20e=Array.from(t.target.value.matchAll(/[\w]+[%20\.]*/g)).length,o=t.target.getBoundingClientRect();if(void%200===t.target.wordCount){var%20n=document.createElement(%22span%22);n.style.position=%22absolute%22,n.style.opacity=.6,document.body.appendChild(n),t.target.wordCount=n}var%20n=t.target.wordCount,l=document.documentElement.scrollTop||document.body.scrollTop,d=document.documentElement.scrollLeft||document.body.scrollLeft;n.style.top=o.bottom+l+%22px%22,n.style.left=o.left+d+%22px%22,n.innerText=e+%22%20words%22}})}();