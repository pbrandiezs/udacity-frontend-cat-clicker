$(function() {
    var model = {
        cats: [],
        targetCat: 0,
        admin: false
    };

    var octopus = {
        init: function() {
            model.cats=[
                {name: "Xuxa", image: "images/xuxa_cat.png", click_count: 0},
                {name: "Chewie", image: "images/chewie_cat.jpg", click_count: 0},
                {name: "Snowball", image: "images/snowball.jpg", click_count: 0},
                {name: "Sneaky", image: "images/sneaky.jpg", click_count: 0},
                {name: "Angry", image: "images/angry.jpg", click_count: 0}
            ];
            model.targetCat = 0;
            model.admin = false;
            view.init();
        },
        pickCat: function(theCat) {
            model.targetCat = theCat;
        },
        incrementCat: function(theCat) {
            model.cats[theCat].click_count++;
        },
        getCats: function() {
            return model.cats;
        },
        getCatName: function(theCat) {
            return model.cats[theCat].name;
        },
        getTargetCat: function() {
            return model.targetCat;
        },
        getCatImage: function(theCat) {
            return model.cats[theCat].image;
        },
        getClickCount: function(theCat) {
            return model.cats[theCat].click_count;
        },
        enableAdmin: function() {
            model.admin = true;
        },
        disableAdmin: function() {
            model.admin = false;
        },
        saveAdminEntries: function(name, ImgURL, Clicks) {
            console.log("In saveAdminEntries");
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
                var catNameNode = document.createTextNode(octopus.getCatName(cat));

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
            catDisplayAreaElement.innerHTML = "<h1>" + octopus.getCatName(octopus.getTargetCat()) + "</h1>";
            catDisplayAreaElement.innerHTML += "<img id='catimg' src='" + octopus.getCatImage(octopus.getTargetCat()) + "'>";
            catDisplayAreaElement.innerHTML += "<h1 id='score'>Score: " + octopus.getClickCount(octopus.getTargetCat()) + "</h1>";
            var catImageElement = document.getElementById("catimg");
            var catScoreElement = document.getElementById("score");
            catImageElement.addEventListener('click', (function(catCopy2){
                return function() {
                    octopus.incrementCat(catCopy2);
                    catScoreElement.textContent = "Score: " + octopus.getClickCount(catCopy2);
                };
            })(octopus.getTargetCat()));
            //Fill Admin form
            document.getElementById("form-name").value = octopus.getCatName(octopus.getTargetCat());
            document.getElementById("form-imgUrl").value = octopus.getCatImage(octopus.getTargetCat());
            document.getElementById("form-clicks").value = octopus.getClickCount(octopus.getTargetCat());
            //Display Admin button
            adminButtonElement = document.getElementById("cat-admin-button-area");
            adminAreaElement = document.getElementById("cat-admin-area");
            adminButtonElement.style.display = "inline";
            adminButtonElement.addEventListener('click', (function(){
                return function() {
                    octopus.enableAdmin();
                    console.log("Admin enabled!")
                    adminAreaElement.style.display = "inline";

                };
            })());
            //Cancel button
            cancelButtonElement = document.getElementById("form-cancel");
            cancelButtonElement.addEventListener('click', (function(){
                return function() {
                    octopus.disableAdmin();
                    console.log("Admin disabled!");
                    adminAreaElement.style.display = "none";
                };
            })());
            //Save button
            saveButtonElement = document.getElementById("form-save");
            saveButtonElement.addEventListener('click', (function(){
                return function() {
                    octopus.saveAdminEntries("name", "img", "clicks");
                    console.log("Save Admin Entries!");
                    adminAreaElement.style.display = "none";
                };
            })());
        }
    };
    octopus.init();

}());