


function styleFunction(){

const male=document.getElementById('male').value;
const female=document.getElementById('female').value;
const occupation=document.getElementById('occupation').value;
const age=document.getElementById('age').value;
const bright=document.getElementById('bright').value;
const dark=document.getElementById('dark').value;
const sports=document.getElementById('sports').value;
const word=document.getElementById('word').value;

    if( occupation=="Formal" && bright=="Bright" && sports=="Yes" && word=="Classic"){
        document.getElementById("output").innerHTML=("Your style is official bright with a touch of sporty")
        
    } else if(occupation=="Formal" && dark=="Dark" && sports=="No" && word=="Classic"){
        document.getElementById("output").innerHTML=('Your style is official and preference is dull colored clothing')


    }else if( occupation=="Student" && bright=="Bright" && sports=="Yes" && word=="Classic"){
        document.getElementById("output").innerHTML=("Bright and official clothing is a great choice for a student. Also good choice on the sporty side")
    }
    else if( occupation=="Student" && dark=="Dark" && sports=="Yes" && word=="Classic"){
        document.getElementById("output").innerHTML=("Dark and official clothing is a great choice for a student. Also good choice on the sporty side")
    }
    else if( occupation=="Student" && bright=="Bright" && sports=="Yes" && word=="Classic"){
        document.getElementById("output").innerHTML=("Bright and official clothing is a great choice for a student. Also good choice on the sporty side")
    }
    else if( occupation=="Formal" && dark=="Dark" && sports=="Yes" && word=="Old-School"){
        document.getElementById("output").innerHTML=("Your style revolves around an official sporty and vintage with dark colors")
    }
    else if( occupation=="Student" && bright=="Bright" && sports=="Yes" && word=="Old-School"){
        document.getElementById("output").innerHTML=("As a student Bright sporty and oldschool is a great choice of style")
    }
}

   
    

