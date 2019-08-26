var cats=[
    {name: "Xuxa", image: "images/xuxa_cat.png", click_count: 0},
    {name: "Chewie", image: "images/chewie_cat.png", click_count: 0}
];

var catListElement = document.getElementById("cat-list");

for (cat in cats) {
    var catLINode = document.createElement("LI");
    var catNameNode = document.createTextNode(cats[cat].name)
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
