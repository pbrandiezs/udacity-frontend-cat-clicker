var cats=[
    {name: "Xuxa", image: "images/xuxa_cat.png", click_count: 0},
    {name: "Chewie", image: "images/chewie_cat.jpg", click_count: 0},
    {name: "Snowball", image: "images/snowball.jpg", click_count: 0},
    {name: "Sneaky", image: "images/sneaky.jpg", click_count: 0},
    {name: "Angry", image: "images/angry.jpg", click_count: 0}
];

for (cat in cats) {
    var catLINode = document.createElement("LI");
    var catNameNode = document.createTextNode(cats[cat].name);

    catLINode.addEventListener('click', (function(catCopy){
        return function() {
            var catDisplayAreaElement = document.getElementById("cat-display-area");
            var selectCat = catCopy;
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
