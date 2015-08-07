var tweenable = new Tweenable();

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


        var output = document.getElementById('text1')
        tweenable.tween({
          from: { color: '#41ff88' },
          to:   { color: '#f0f' },
          duration: 10000,
          easing: 'easeOutQuart',
          step: function (mystate) {
                output.style.color = mystate.color;
          }
        });




textOne()
textTwo()
textThree()
textFour()




