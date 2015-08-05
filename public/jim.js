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
            start:function(){update = setInterval(function(){updater()},0)},
            callback: function () {clearInterval(update);loopAction();}
        });
    }
    loopAction();
        