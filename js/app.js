$(function() {
    var data = {
        cats: [],
        targetCat: 0
    };

    var octopus = {
        init: function() {
            view.init();
        },
        pickCat: function(theCat) {
            data.targetCat = theCat;
            view.render;
        },
        incrementCat: function(theCat) {
            data.cats[theCat].click_count++;
        }
    };

    var view = {
        init: function() {
            data.cats=[
                {name: "Xuxa", image: "images/xuxa_cat.png", click_count: 0},
                {name: "Chewie", image: "images/chewie_cat.jpg", click_count: 0},
                {name: "Snowball", image: "images/snowball.jpg", click_count: 0},
                {name: "Sneaky", image: "images/sneaky.jpg", click_count: 0},
                {name: "Angry", image: "images/angry.jpg", click_count: 0}
            ];
            data.targetCat = 0;
            this.render();
        },

        render: function() {
            console.log("In view.render");
            console.log(data.cats);
            var cats = data.cats;
            for (cat in cats) {
                var catLINode = document.createElement("LI");
                var catNameNode = document.createTextNode(cats[cat].name);

                catLINode.addEventListener('click', (function(catCopy){
                    return function() {
                        var catDisplayAreaElement = document.getElementById("cat-display-area");
                        octopus.pickCat(catCopy);
                        catDisplayAreaElement.innerHTML = "<h1>" + cats[data.targetCat].name + "</h1>";
                        catDisplayAreaElement.innerHTML += "<img id='catimg' src='" + cats[data.targetCat].image + "'>";
                        catDisplayAreaElement.innerHTML += "<h1 id='score'>Score: " + cats[data.targetCat].click_count + "</h1>";

                        var catImageElement = document.getElementById("catimg");
                        var catScoreElement = document.getElementById("score");
                        catImageElement.addEventListener('click', (function(catCopy2){
                            return function() {
                                octopus.incrementCat(catCopy2);
                                catScoreElement.textContent = "Score: " + cats[catCopy2].click_count;
                            };
                        })(data.targetCat));
                    };
                })(cat));

                catLINode.appendChild(catNameNode);
                document.getElementById("cat-list").appendChild(catLINode);
            }
        }
    };
    octopus.init();

}());