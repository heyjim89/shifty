var ball=document.getElementById('ball');
var style=ball.style;
var myTweenable = new Tweenable();;
        
var updater = function(){
    myPos = myTweenable.get()
    style.left= myPos.x + 'px';
    style.top= myPos.y + 'px';
}
function loopAction(){
    style.left=0;
    style.top=0;
    myTweenable.tween({
        from: { x: 0, y: 0 },
        to: { x: 500, y: 500 },
        duration: 2000,
        easing: 'easeOutQuad',
        start:    function(){update = setInterval(function(){updater()},0)},
        callback: function () {clearInterval(update);loopAction();}
    });
}
loopAction();

var ball2=document.getElementById('ball2');
var style2=ball2.style;
var myTweenable2 = new Tweenable();

var updater2 = function(){
    myPos2 = myTweenable2.get()
    style2.left= myPos2.x + 'px';
    style2.top= myPos2.y + 'px';
}
function loopAction2(){
    style2.left=0;
    style2.top=0;
    myTweenable2.tween({
        from: { x: 0, y: 0, rgb: 255 }, 
        to: { x: 400, y: 300, rgb: 0 },
        duration: 500,
        easing: 'easeOutQuad',
        start:    function(){update2 = setInterval(function(){updater2()},0)},
        callback: function () {clearInterval(update2);loopAction2();}
    });
    console.log(ball2)
}
loopAction2();

var square=document.getElementById('square');
var style3=square.style;
var myTweenable3 = new Tweenable();

var updater3 = function(){
    myPos3 = myTweenable3.get()
    style3.left= myPos3.x + 'px';
    style3.top= myPos3.y + 'px';
}
function loopAction3(){
    style3.left=0;
    style3.top=0;
    myTweenable3.tween({
        from: { x: 100, y: 0 },
        to: { x: 600, y: 400 },
        duration: 1000,
        easing: 'easeOutSine',
        start:    function(){update3 = setInterval(function(){updater3()},0)},
        callback: function () {clearInterval(update3);loopAction3();}
    });
}
loopAction3();
