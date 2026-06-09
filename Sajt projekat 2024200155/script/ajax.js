function jsonupis(){

    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", "komentari.json", true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let objekat = JSON.parse(this.responseText);

            let info = "";
            for(let i = 0; i < objekat.komentari.length; i++){
                info+=objekat.komentari[i].ime + " " + objekat.komentari[i].tel + " " + objekat.komentari[i].email + " " + objekat.komentari[i].knjige + "<br>";
            }

            document.getElementById("JSONupis").innerHTML = info
        }
    }
 
}