function boji(){
    let sveBoje = document.getElementsByName("boja");
    for(mojaBoja of sveBoje){
        if(mojaBoja.checked){
            document.getElementById("drugi").style.background = mojaBoja.value;
        }
    }
}
function poljeUFokusu(){
    document.getElementById("komentar").style.background="lightgreen";
}
function resetuj(){
    document.getElementById("komentar").style.background="white";

    let mojKomentar=document.getElementById("komentar").value;
    let izraz=/[A-Z][a-z]/;

    if(mojKomentar.match(izraz)==null){
        document.getElementById("greskaKomentar").style.color="red";
        document.getElementById("greskaKomentar").innerHTML="Niste dobro uneli"
    } 
    else{
        document.getElementById("greskaKomentar").style.color="green";
        document.getElementById("greskaKomentar").innerHTML="Sve je OK" 
    }
}
function checkIme(){
    let mojeIme=document.getElementById("ime").value;
    let izraz=/^[A-Z][a-z]{1,}\s[A-Z][a-z]{1,}$/;

    if(mojeIme.match(izraz)==null){
        document.getElementById("imePoruka").style.color="red";
        document.getElementById("imePoruka").innerHTML="Niste dobro uneli, primer: Marko Markovic"
    } else{
        document.getElementById("imePoruka").style.color="green";
        document.getElementById("imePoruka").innerHTML="Sve je OK" 
    }
}
function checkTel(){
    let mojTel=document.getElementById("telefon").value;
    let izraz=/^06[0-9]{1}-[0-9]{3,4}-[0-9]{3}$/;

    if(mojTel.match(izraz)==null){
        document.getElementById("telPoruka").style.color="red";
        document.getElementById("telPoruka").innerHTML="Niste dobro uneli, primer: 06x-xxx-xxx"
    } else{
        document.getElementById("telPoruka").style.color="green";
        document.getElementById("telPoruka").innerHTML="Sve je OK" 
    }
}
function checkEmail(){
    let mojEmail=document.getElementById("email").value;
    let izraz=/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/;

    if(mojEmail.match(izraz)==null){
        document.getElementById("emailPoruka").style.color="red";
        document.getElementById("emailPoruka").innerHTML="Niste dobro uneli, primer: user@gmail.com"
    } else{
        document.getElementById("emailPoruka").style.color="green";
        document.getElementById("emailPoruka").innerHTML="Sve je OK" 
    }
}
function proveraCheckBoxova1(){
    let ispis="";
    let sveKnjige = document.getElementsByName("knjige1");
    for(mojaKnjiga of sveKnjige){
        if(mojaKnjiga.checked){
          ispis+=mojaKnjiga.value + " ";
        }
    }
    return ispis;
}
function valueFromId(id){
    return document.getElementById(id).value;
}
function formatParagraph(){
    let f=document.getElementById("formatirano");
    let greska=document.getElementById("greska");

    let ime =valueFromId("ime");
    let tel =valueFromId("telefon");
    let email =valueFromId("email");
    let knjige=proveraCheckBoxova1("knjige1");

    if(ime == "" || tel == "" || email == ""|| knjige == ""){
      greska.textContent="Nisu sva polja uneta";
      f.textContent="";
      return;
    }else {
       f.textContent=`${ime} (tel. ${tel}),(email: ${email}) je od knjiga izabrao/la: ${knjige}`;
       greska.textContent="";
    }
}
function ispisjson(){
    let imePrezime = document.getElementById("name").value;
    let tel = document.getElementById("telefon").value;
    let email = document.getElementById("email").value;
    let knjige = document.getElementsByName("knjige1");
    let izabraneknjige = "";

    for (let i = 0; i < knjige.length; i++){
        if(knjige[i].checked){
            izabraneknjige+=knjige[i].value;
        }
    }

    let objekat = {ime: imePrezime, mail: email, tel: telefon, knjige: izabraneknjige};
    let myJSON = JSON.stringify(objekat);
    document.getElementById("JSONispis").textContent = myJSON;
}