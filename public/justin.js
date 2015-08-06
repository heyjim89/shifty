// (function (global) {
//   var CYCLE_SPEED = 1000
//       ,HELIX_WIDTH = 600
//       ,SEGMENT_BUFFER = 0.2
//       ,btnHelixStart
//       ,helixIsInitted
//       ,helixIsRunning
//       ,startTime
//       ,pausedAtTime
//       ,segmentContainer
//       ,segments
//       ,stepStateLists
//       ,updateHandle
//       ,isPlaying
//       ,shiftyDemo
//       ,i;

//   function now () {
//     return +(new Date());
//   }

//   function getPosition (loopPosition, startBuffer) {
//     var moddedLoopPosition
//       ,interpolator
//       ,interpolatedValue;

//     if ((loopPosition - startBuffer) < 0) {
//       return 0;
//     }

//     interpolator = moddedLoopPosition = ((loopPosition - startBuffer));

//     if (moddedLoopPosition > 1) {
//       interpolator = moddedLoopPosition - 1;
//     }

//     interpolatedValue = global.Tweenable.interpolate(
//         {'left': 0}, {'left': HELIX_WIDTH }, interpolator, 'easeInOutSine');

//     if (moddedLoopPosition > 1) {
//       return {
//         'left': HELIX_WIDTH - interpolatedValue.left
//       };
//     } else {
//       return interpolatedValue;
//     }
//   }

//   function updateSegment (index, loopPosition) {
//     var segment
//       ,calculated;

//     segment = segments[index];
//     calculated = getPosition(loopPosition, index * SEGMENT_BUFFER);

//     var style = segment.style;
//     style.MozTransform = style.webkitTransform =
//       'translateX(' + parseFloat(calculated.left) + 'px)';
//   }

//   function updateSegments (startTime, callback) {
//     var i
//       ,timeDelta
//       ,normalizedTime;

//     timeDelta = now() - startTime;
//     normalizedTime = timeDelta / CYCLE_SPEED;

//     for (i = 0; i < segments.length; i++) {
//       updateSegment(i, normalizedTime);
//     }

//     callback();
//   }

//   function loop () {
//     updateHandle = setTimeout(function () {
//       updateSegments(startTime, loop);
//     }, 1 / 60);
//   }

//   function pause () {
//     if (isPlaying === false) {
//       return;
//     }

//     isPlaying = false;
//     pausedAtTime = Tweenable.now();
//     clearTimeout(updateHandle);
//   }

//   function play () {
//     if (isPlaying === true) {
//       return;
//     }

//     isPlaying = true;
//     startTime = Tweenable.now() - (pausedAtTime - startTime);
//     loop();


//   }

//   function init (containerId) {
//     pausedAtTime = startTime = Tweenable.now();
//     segmentContainer = document.getElementById(containerId);
//     segments = segmentContainer.children;
//     stepStateLists = [];

//     for (i = 0; i < segments.length; i++) {
//       stepStateLists.push([])
//     }

//     window.pause = pause;
//     window.play = play;
//   }

//   function toggleHelix () {

//     if (!helixIsInitted) {
//       helixIsInitted = true;
//       shiftyDemo.helixInit('helix-container');
//     }

//     if (helixIsRunning) {
//       shiftyDemo.helixPause();
//       btnHelixStart.innerHTML = 'Restart Game!';
//     } else {
//       shiftyDemo.helixPlay();
//       btnHelixStart.innerHTML = 'Stop Game!';
//     }

//     helixIsRunning = !helixIsRunning;
//   }

//   shiftyDemo = {
//     'helixInit': init
//     ,'helixPlay': play
//     ,'helixPause': pause
//   };

//   btnHelixStart = document.getElementById('btnHelixStart');
//   btnHelixStart.addEventListener('click', toggleHelix, true);
//   helixIsRunning = false;
//   helixIsInitted = false;
// } (this));







// 	$(document).on('ready', function(){

// 		$('.segment').on('click', function(event){
//       event.preventDefault()
// 			$(this).hide()
//       alert('You Won!')
// 		});
// 	});







var textOne = function(){

var text=document.getElementById('text1')

        , style=text.style
        , myTweenable = new Tweenable()
        , update
        var updater = function(){
            myPos = myTweenable.get()
            style.left= myPos.x + 'px';
            style.top= myPos.y + 'px';
        }
        function loop(){
            style.left=0;
            style.top=0;
            myTweenable.tween({
                from: { x: 25, y: 0 },
                to: { x: 25, y: 400 },
                duration: 1500,
                easing: 'bounce',
                start:function(){update = setInterval(function(){updater()},0)},
                callback: function () {clearInterval(update);loop();}
            });
        }
        loop();
}

var textTwo = function(){

        var text=document.getElementById('text2')
        , style=text.style
        , myTweenable = new Tweenable()
        , update
        var updater = function(){
            myPos = myTweenable.get()
            style.left= myPos.x + 'px';
            style.top= myPos.y + 'px';
        }
        function loop(){
            style.left=0;
            style.top=0;
            myTweenable.tween({
                from: { x: 500, y: 800 },
                to: { x: 200, y: 400 },
                duration: 2000,
                easing: 'bouncePast',
                start:function(){update = setInterval(function(){updater()},0)},
                callback: function () {clearInterval(update);loop();}
            });
        }
        loop();
}

var textThree = function(){

var text=document.getElementById('text3')
        , style=text.style
        , myTweenable = new Tweenable()
        , update
        var updater = function(){
            myPos = myTweenable.get()
            style.left= myPos.x + 'px';
            style.top= myPos.y + 'px';
        }
        function loop(){
            style.left=0;
            style.top=0;
            myTweenable.tween({
                from: { x: 300, y: 0 },
                to: { x: 300, y: 400 },
                duration: 2500,
                easing: 'easeInCirc',
                start:function(){update = setInterval(function(){updater()},0)},
                callback: function () {clearInterval(update);loop();}
            });
        }
        loop();
}

var textFour = function(){
        var text=document.getElementById('text4')
        , style=text.style
        , myTweenable = new Tweenable()
        , update
        var updater = function(){
            myPos = myTweenable.get()
            style.left= myPos.x + 'px';
            style.top= myPos.y + 'px';
        }
        function loop(){
            style.left=0;
            style.top=0;
            myTweenable.tween({
                from: { x: 500, y: 800 },
                to: { x: 500, y: 400 },
                duration: 3000,
                easing: 'easeInOutQuad',
                start:function(){update = setInterval(function(){updater()},0)},
                callback: function () {clearInterval(update);loop();}
            });
        }
        loop();
}

textOne()
textTwo()
textThree()
textFour()



