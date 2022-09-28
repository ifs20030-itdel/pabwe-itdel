// Nama  : Vistar Tiop Raja Gukguk
// NIM   : 11S20030

function Submit(){
    var myName = document.getElementById("myName").value;
    var myPlace = document.getElementById("myPlace").value;
    var myDate = document.getElementById("myDate").value;
    var myGender = document.getElementById("myGender").value;
    var mySchool = document.getElementById("mySchool").value;

    if(myName.length == 0){
        document.getElementById("invalid").innerText = "Nama harus diisi";
        return false;
    }
    else if (myName.length < 7){
        document.getElementById("invalid").innerText = "Nama harus memiliki panjang minimal 7 karakter";
        return false;
    }
    else{
        document.getElementById("invalid").style.display = "none";
        document.getElementById("infoPerson").style.display = "block";
        document.getElementById("displayName").innerText = myName;
        document.getElementById("displayBornPlace").innerText = myPlace;
        document.getElementById("displayBornDate").innerText = myDate;
        document.getElementById("displayGender").innerText = myGender;
        document.getElementById("displayEducation").innerText = mySchool;
    }
}