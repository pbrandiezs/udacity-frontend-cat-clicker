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
            var catDisplayNameNode = document.createElement("h1");
            var catDisplayImageNode = document.createElement("img");
            var catDisplayScoreNode = document.createElement("h1");
            selectCat = catCopy;
            console.log(cats[selectCat].name);
            // Display cat name
            catNameNode = document.createTextNode(cats[selectCat].name)
            catDisplayNameNode.appendChild(catNameNode);
            catDisplayAreaElement.appendChild(catDisplayNameNode);
            // Display cat image
            catDisplayImageNode.setAttribute("src", cats[selectCat].image);
            catDisplayAreaElement.appendChild(catDisplayImageNode);
            // Display cat score
            catDisplayScoreNodeText = document.createTextNode("Score: " + cats[selectCat].click_count);
            catDisplayScoreNode.appendChild(catDisplayScoreNodeText);
            catDisplayAreaElement.appendChild(catDisplayScoreNode);
        };
    })(cat));

    catLINode.appendChild(catNameNode);
    document.getElementById("cat-list").appendChild(catLINode);
};


/*
elem0.addEventListener('click', function(){
    click_count0++;
    document.getElementById("clicks0").innerHTML = click_count0;
}, false);

elem1.addEventListener('click', function(){
    click_count1++;
    document.getElementById("clicks1").innerHTML = click_count1;
}, false);
*/
