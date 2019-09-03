$(function() {
    var data = {
        cats: [],
        targetCat: 0
    };

    var octopus = {
        init: function() {
            data.cats=[
                {name: "Xuxa", image: "images/xuxa_cat.png", click_count: 0},
                {name: "Chewie", image: "images/chewie_cat.jpg", click_count: 0},
                {name: "Snowball", image: "images/snowball.jpg", click_count: 0},
                {name: "Sneaky", image: "images/sneaky.jpg", click_count: 0},
                {name: "Angry", image: "images/angry.jpg", click_count: 0}
            ];
            data.targetCat = 0;
            view.init();
        },
        pickCat: function(theCat) {
            data.targetCat = theCat;
            view.render;
        },
        incrementCat: function(theCat) {
            data.cats[theCat].click_count++;
        },
        getCats: function() {
            return data.cats;
        }
    };

    var view = {
        init: function() {
            octopus.pickCat(0);
            this.render();
        },

        render: function() {
            for (cat in octopus.getCats()) {
                var catLINode = document.createElement("LI");
                var catNameNode = document.createTextNode(data.cats[cat].name);

                catLINode.addEventListener('click', (function(catCopy){
                    return function() {
                        octopus.pickCat(catCopy);
                        view.renderCatImage();
                    };
                })(cat));
                catLINode.appendChild(catNameNode);
                document.getElementById("cat-list").appendChild(catLINode);
            }
        },

        renderCatImage: function() {
            var catDisplayAreaElement = document.getElementById("cat-display-area");
            catDisplayAreaElement.innerHTML = "<h1>" + data.cats[data.targetCat].name + "</h1>";
            catDisplayAreaElement.innerHTML += "<img id='catimg' src='" + data.cats[data.targetCat].image + "'>";
            catDisplayAreaElement.innerHTML += "<h1 id='score'>Score: " + data.cats[data.targetCat].click_count + "</h1>";
            var catImageElement = document.getElementById("catimg");
            var catScoreElement = document.getElementById("score");
            catImageElement.addEventListener('click', (function(catCopy2){
                return function() {
                    octopus.incrementCat(catCopy2);
                    catScoreElement.textContent = "Score: " + data.cats[catCopy2].click_count;
                };
            })(data.targetCat));
        }
    };
    octopus.init();

}());