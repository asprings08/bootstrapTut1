
function startFunction() {
  let p = document.getElementById("scrollStart");
  p.scrollIntoView({
    block: 'start',
    behavior: 'smooth',
    inline: 'start'
  });
}

function endFunction() {
  let p = document.getElementById("scrollEnd");
  // This ends the block to the window
  // bottom and also aligns the view to the center
  p.scrollIntoView({
    block: 'end',
    behavior: 'smooth',
    inline: 'center'
  });
}
