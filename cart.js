function createDoll(userChoice) {
    var output = document.getElementById("display");
    output.innerHTML="";

    var choices= ["Classic", "Sporty", "Old school", "Free spirit", "Creative", "Hipster"];
    var sentence = "<p> Your New Style is " +choices[userChoice] + " doll.</p>";
    if ( choices[userChoice] == choices[0]) {
        img = '<img src="fashion/Assets/spencer-davis-0ShTs8iPY28-unsplash.jpg">';
    }
    else if (choices[1]) {
        img = '<img src="fashion/Assets/PSX_20210624_081046.jpg">';
    }
    else if (choices[2]) {
        img = '<img src="fashion/Assets/PSX_20210624_081046.jpg">';
    }
    else if (choices[3]) {
        img = '<img src="fashion/Assets/karsten-winegeart-w6BHqa8ukc0-unsplash.jpg">';
    }
    else if (choice[4]) {
        img = '<img src="fashion/Assets/freespiritpagancloth.png">';
    }
    else {
        img = '<img src="fashion/Assets/hipstergirl.jpeg">';
    }
    output.innerHTML = sentence + img;
}