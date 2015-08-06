var output1 = document.querySelector('.magic1');

var tweenable = new Tweenable();
tweenable.tween({
  from: { color: 'rgb(70, 192, 49)' },
  to:   { color: 'rgb(232, 75, 79)' },
  duration: 30000,
  easing: 'easeOutQuart',
  step: function (state) {
    output1.innerHTML = state.color;
    output1.style.background = state.color;
  }
});

var output2 = document.querySelector('.magic2');

var tweenable = new Tweenable();
tweenable.tween({
  from: { color: 'rgb(237, 184, 53)' },
  to:   { color: 'rgb(105, 96, 209)' },
  duration: 30000,
  easing: 'easeOutQuart',
  step: function (state) {
    output2.innerHTML = state.color;
    output2.style.background = state.color;
  }
});

var output3 = document.querySelector('.magic3');

var tweenable = new Tweenable();
tweenable.tween({
  from: { color: 'rgb(232, 75, 79)' },
  to:   { color: 'rgb(70, 192, 49)' },
  duration: 30000,
  easing: 'easeOutQuart',
  step: function (state) {
    output3.innerHTML = state.color;
    output3.style.background = state.color;
  }
});


var output4 = document.querySelector('.magic4');

var tweenable = new Tweenable();
tweenable.tween({
  from: { color: 'rgb(105, 96, 209)' },
  to:   { color: 'rgb(237, 184, 53)' },
  duration: 30000,
  easing: 'easeOutQuart',
  step: function (state) {
    output4.innerHTML = state.color;
    output4.style.background = state.color;
  }
});

