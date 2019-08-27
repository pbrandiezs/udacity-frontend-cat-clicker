var cats=[
    {name: "Xuxa", image: "images/xuxa_cat.png", click_count: 0},
    {name: "Chewie", image: "images/chewie_cat.jpg", click_count: 0}
];
var selectCat = 0;
var catListElement = document.getElementById("cat-list");
var catDisplayAreaElement = document.getElementById("cat-display-area");

for (cat in cats) {
    var catLINode = document.createElement("LI");
    var catNameNode = document.createTextNode(cats[cat].name);

    catLINode.addEventListener('click', (function(catCopy){
        return function() {
            selectCat = catCopy;
            catDisplayAreaElement.innerHTML = "<h1>" + cats[selectCat].name + "</h1>";
            catDisplayAreaElement.innerHTML += "<img id='catimg' src='" + cats[selectCat].image + "'>";
            catDisplayAreaElement.innerHTML += "<h1 id='score'>Score: " + cats[selectCat].click_count + "</h1>";

            var catImageElement = document.getElementById("catimg");
            var catScoreElement = document.getElementById("score");
            catImageElement.addEventListener('click', (function(catCopy2){
                return function() {
                    selectCat2 = catCopy2;
                    cats[selectCat2].click_count++;
                    catScoreElement.textContent = "Score: " + cats[selectCat2].click_count;
                };
            })(selectCat));
        };
    })(cat));

    catLINode.appendChild(catNameNode);
    document.getElementById("cat-list").appendChild(catLINode);
};
