var engine = {
    finish:false,
    maxPosition:0,
    tick:100,
    zombies:[],
    $lines: null,
    $gameOver:null,
    zombie:null,

    bind: function () {
        engine.maxPosition = $("#field").width();
        engine.$lines = $(".field-line");
        engine.$gameOver = $(".game-over");
        $(".button#btnGenerate").on("click", engine.generate);
        $(".button#btnExplode").on("click", engine.shot);
    },

    start: function () {
        setTimeout(engine.gameTick, engine.tick);
    },

    generate: function () {
        if (!engine.finish) {
            engine.zombies = [];
            $(".zombie").remove();
            zombie = new Default();
            $(engine.$lines[0]).append(zombie.$);
            engine.zombies.push(zombie);
        }       
    },

    shot: function(){
        for (var i = 0; i < engine.zombies.length; i++) {
            engine.zombies[i].damage(15);
            var $expl = $("<div>").addClass("explosion");
            engine.zombies[i].$.append($expl);
            helper($expl);
        }
    },

    gameTick: function () {
        for (var i = 0; i < engine.zombies.length; i++) {
            if (!engine.zombies[i].dead) {
                engine.zombies[i].move();
                if (engine.zombies[i].position + engine.zombies[i].getWidth() >= engine.maxPosition) {
                    engine.gameOver();
                }
            }
        }
        if (!engine.finish) {
            setTimeout(engine.gameTick, engine.tick);
        }      
    },

    gameOver: function () {
        engine.finish = true;
        engine.$gameOver.show();
    },
}

function helper(expl) {
    setTimeout(function () { expl.remove(); }, 500);
}