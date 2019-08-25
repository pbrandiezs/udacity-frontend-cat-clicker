var click_count=0;
var elem = document.getElementById('cat');

elem.addEventListener('click', function(){
    //the element has been clicked... do stuff here
    click_count++;
    // console.log("Clicks " + click_count);
    document.getElementById("clicks").innerHTML = click_count;
}, false);
