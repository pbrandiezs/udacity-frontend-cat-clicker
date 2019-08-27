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
            catDisplayAreaElement.innerHTML += "<img id='cat" + selectCat + "' src='" + cats[selectCat].image + "'>";
            catDisplayAreaElement.innerHTML += "<h1>Score: " + cats[selectCat].click_count + "</h1>";

            var catImageElement = document.getElementById("cat" + selectCat);
            catImageElement.addEventListener('click', function(){
                console.log("Click!");
                cats[selectCat].click_count++;
                catDisplayAreaElement.innerHTML = "<h1>" + cats[selectCat].name + "</h1>";
                catDisplayAreaElement.innerHTML += "<img id='cat" + selectCat + "' src='" + cats[selectCat].image + "'>";
                catDisplayAreaElement.innerHTML += "<h1>Score: " + cats[selectCat].click_count + "</h1>";
            }, false);
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
