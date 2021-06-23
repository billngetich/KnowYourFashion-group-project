function createDoll(userChoice) {
    var output = document.getElementById("display");
    output.innerHTML="";

    var choices= ["Classic", "Sporty", "Old school", "Free spirit", "Creative", "Hipster"];
    var sentence = "<p> Your New Style is " +choices[userChoice] + " doll.</p>";
    if ( choices[userChoice] == choices[0]) {
        img = '<img src="Assets/ivana-cajina-_7LbC5J-jw4-unsplash.jpg">';
    }
    else if (choices[1]) {
        img = '<img src="Assets/elyas-pasban-TKD0nf8nfIM-unsplash.jpg">';
    }
    else if (choices[2]) {
        img = '<img src=" Assets/freespiritmale.jpg">';
    }
    else if (choices[3]) {
        img = '<img src=" Assets/hipsterfemalee.jpg">';
    }
    else if (choice[4]) {
        img = '<img src="Assets/laura-chouette-Q2gAtAu34Pw-unsplash.jpg">';
    }
    else {
        img = '<img src="Assets/hipstermale1.png">';
    }
    output.innerHTML = sentence + img;
}