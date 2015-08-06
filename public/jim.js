var ball=document.getElementById('ball'), style=ball.style, myTweenable = new Tweenable(), update
        
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

var ball2=document.getElementById('ball2'), style2=ball2.style, myTweenable2 = new Tweenable(), update

var updater2 = function(){
    myPos2 = myTweenable2.get()
    style2.left= myPos2.x + 'px';
    style2.top= myPos2.y + 'px';
}
function loopAction2(){
    style2.left=0;
    style2.top=0;
    myTweenable2.tween({
        from: { x: 0, y: 0 },
        to: { x: 400, y: 300 },
        duration: 2000,
        easing: 'easeOutQuad',
        start:    function(){update2 = setInterval(function(){updater2()},0)},
        callback: function () {clearInterval(update2);loopAction2();}
    });
}
loopAction2();
