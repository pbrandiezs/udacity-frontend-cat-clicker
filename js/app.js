var click_count0 = 0;
var click_count1 = 0;
var elem0 = document.getElementById('cat0');
var elem1 = document.getElementById('cat1');

elem0.addEventListener('click', function(){
    click_count0++;
    document.getElementById("clicks0").innerHTML = click_count0;
}, false);

elem1.addEventListener('click', function(){
    click_count1++;
    document.getElementById("clicks1").innerHTML = click_count1;
}, false);
