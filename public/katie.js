var output = document.querySelector('.magic-box');

var tweenable = new Tweenable();
tweenable.tween({
  from: { color: '#41ff88' },
  to:   { color: '#f0f' },
  duration: 5000,
  easing: 'easeOutQuart',
  step: function (state) {
    output.innerHTML = state.color;
    output.style.color = state.color;
  }
});