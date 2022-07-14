var Words = [
  "Ajan",
  "Badem",
  "Demir",
  "Tekerlek",
  "Piramit",
  "Mardin",
  "Avrupa",
  "Papatya",
  "Ejderha",
  "Thor",
  "Örümcek",
  "Doktor",
  "Aşı",
  "Kavga",
  "Hitler",
  "Okyanus",
  "Gemi",
  "Dümen",
  "Dürdane",
  "Almanya",
  "Türkiye",
  "Başarı",
  "Gerçek",
  "Üniversite",
  "Yılan",
  "Monitör",
  "Cihaz",
  "Fışkiye",
  "Milyoner",
  "Elma",
  "Bebek",
  "Paten",
  "Kaykay",
  "Bremen",
  "Hız",
  "Dondurma",
  "Karamel",
  "Monitör",
  "Pisagor",
  "Dahi",
  "Ekonomi",
  "Tabanca",
  "Ateş",
  "Toprak",
  "Yağmur",
  "Pastane",
  "Hastane",
  "Para",
  "Pürmüz",
  "Hürmüz",
  "Şapka",
  " Ok",
  "Mor",
  "Fransa",
  "Ayakkabı",
  "Televizyon",
  "Salata",
  "Oksijen",
  "Denizkızı",
  "Pasta",
  "Masaj",
  "İntegral",
  "Küpe ",
];
let gamearea = document.getElementById("ingame");
let redTeamRemaining = document.getElementById("redteam-remaining-cards");
let blueTeamRemaining = document.getElementById("blueteam-remaining-cards");
let ContainerLeft = document.getElementById("container-left");
let ContainerMid = document.getElementById("container-mid");
let ContainerRight = document.getElementById("container-right");

var WordCount = Words.length;
var WordPool = [];
var cardColors = [];

function GetRandomWord() {
  var WordCount = Words.length;
  var randomNumber = Math.floor(Math.random() * (WordCount + 1));

  if (WordCount >= 1) {
    if (randomNumber < WordCount) {
      randomNumber = randomNumber--;
      WordPool.push(Words[randomNumber]);
    } else if (randomNumber == WordCount) {
      randomNumber = randomNumber - 1;
      WordPool.push(Words[randomNumber]);
    }
  }
  Words.splice(randomNumber, 1);
}
function EnterNewWord() {
  const newWord = prompt("Kelime havuzuna yeni bir kelime ekleyin:");
  if (newWord != "") {
    const newWordFirst = newWord;
    const newWordLower = newWordFirst.toLowerCase();
    const newWordLast =
      newWordLower.charAt(0).toUpperCase() + newWordLower.slice(1);
    if (Words.includes(newWordLast)) {
      alert("Bu kelime zaten havuzda bulunuyor.");
    } else {
      Words.push(newWordLast);
      alert("Kelime başarıyla eklendi. (Yalnızca sonraki oyun için)");
    }
  } else {
    if (newWord === "") {
      alert("Yazı alanı boş bırakılamaz.");
    }
  }
}

function TeamOneSubmit() {
  let NameButton = document.getElementById("TeamButton");
  let NameInput = document.getElementById("team1-name");
  if (NameInput.value == "") {
    alert("Lütfen kırmızı takım için bir isim girin.");
  } else {
    NameInput.disabled = true;
    NameButton.disabled = true;
    NameButton.innerHTML = "Takım Adı Onaylandı";
  }
}
function TeamTwoSubmit() {
  let NameButton2 = document.getElementById("NameButton2");
  let NameInput2 = document.getElementById("team2-name");
  if (NameInput2.value == "") {
    alert("Lütfen mavi takım için bir isim girin.");
  } else {
    NameInput2.disabled = true;
    NameButton2.disabled = true;
    NameButton2.innerHTML = "Takım Adı Onaylandı";
  }
}

function StartGame() {
  let TeamOneName = document.getElementById("team1-name").value;
  let TeamTwoName = document.getElementById("team2-name").value;
  let ContainerLeft = document.getElementById("container-left");
  let ContainerMid = document.getElementById("container-mid");
  let ContainerRight = document.getElementById("container-right");
  let InGameRedTeam = document.getElementById("ingame-red-team");
  let InGameBlueTeam = document.getElementById("ingame-blue-team");
  let InGame = document.getElementById("ingame");
  let qrRed = document.getElementById("qr-red");
  let qrBlue = document.getElementById("qr-blue");

  if (TeamOneName == "" || TeamTwoName == "") {
    alert("Lütfen takım isimlerini giriniz.");
  } else {
    ContainerLeft.style.display = "none";
    ContainerMid.style.display = "none";
    ContainerRight.style.display = "none";
    InGame.style.display = "flex";
    InGameRedTeam.innerHTML = TeamOneName;
    InGameBlueTeam.innerHTML = TeamTwoName;

    let i = 1;
    var WordForBox = "";
    var box = "";

    while (i <= 25) {
      GetRandomWord();
      WordForBox = WordPool[0];
      box = document.getElementById("box" + i);
      box.innerHTML = WordForBox;
      WordPool.splice(0, 1);
      i += 1;
    }
    var cardId = Math.floor(Math.random() * 4);

    if (cardId == "0") {
      cardColors.push(
        "1beyaz",
        "2kırmızı",
        "3mavi",
        "4mavi",
        "5mavi",
        "6mavi",
        "7kırmızı",
        "8beyaz",
        "9mavi",
        "10mavi",
        "11kırmızı",
        "12siyah",
        "13kırmızı",
        "14mavi",
        "15beyaz",
        "16beyaz",
        "17mavi",
        "18beyaz",
        "19beyaz",
        "20kırmızı",
        "21kırmızı",
        "22kırmızı",
        "23beyaz",
        "24kırmızı",
        "25kırmızı"
      );
      qrBlue.src = "img/0.png";
      qrRed.src = "img/0.png";
    } else if (cardId == "1") {
      cardColors.push(
        "1kırmızı",
        "2mavi",
        "3kırmızı",
        "4mavi",
        "5kırmızı",
        "6mavi",
        "7kırmızı",
        "8siyah",
        "9beyaz",
        "10kırmızı",
        "11beyaz",
        "12beyaz",
        "13kırmızı",
        "14kırmızı",
        "15beyaz",
        "16kırmızı",
        "17beyaz",
        "18beyaz",
        "19beyaz",
        "20mavi",
        "21mavi",
        "22kırmızı",
        "23mavi",
        "24mavi",
        "25mavi"
      );
      qrBlue.src = "img/1.png";
      qrRed.src = "img/1.png";
    } else if (cardId == "2") {
      cardColors.push(
        "1mavi",
        "2beyaz",
        "3mavi",
        "4kırmızı",
        "5kırmızı",
        "6kırmızı",
        "7kırmızı",
        "8mavi",
        "9beyaz",
        "10kırmızı",
        "11beyaz",
        "12mavi",
        "13beyaz",
        "14beyaz",
        "15kırmızı",
        "16kırmızı",
        "17siyah",
        "18mavi",
        "19kırmızı",
        "20beyaz",
        "21mavi",
        "22kırmızı",
        "23beyaz",
        "24mavi",
        "25mavi"
      );
      qrBlue.src = "img/2.png";
      qrRed.src = "img/2.png";
    } else if (cardId == "3") {
      cardColors.push(
        "1mavi",
        "2kırmızı",
        "3mavi",
        "4kırmızı",
        "5kırmızı",
        "6beyaz",
        "7kırmızı",
        "8kırmızı",
        "9beyaz",
        "10mavi",
        "11mavi",
        "12beyaz",
        "13kırmızı",
        "14beyaz",
        "15mavi",
        "16mavi",
        "17kırmızı",
        "18beyaz",
        "19siyah",
        "20mavi",
        "21beyaz",
        "22mavi",
        "23kırmızı",
        "24beyaz",
        "25kırmızı"
      );
      qrBlue.src = "img/3.png";
      qrRed.src = "img/3.png";
    }
  }
}
function HowToPlay() {
  let ContainerLeft = document.getElementById("container-left");
  let ContainerMid = document.getElementById("container-mid");
  let ContainerRight = document.getElementById("container-right");
  let HowToPlay = document.getElementById("howtoplay");

  ContainerLeft.style.display = "none";
  ContainerMid.style.display = "none";
  ContainerRight.style.display = "none";
  HowToPlay.style.display = "flex";
}
function toMainMenu() {
  let ContainerLeft = document.getElementById("container-left");
  let ContainerMid = document.getElementById("container-mid");
  let ContainerRight = document.getElementById("container-right");
  let HowToPlay = document.getElementById("howtoplay");
  HowToPlay.style.display = "none";
  ContainerLeft.style.display = "block";
  ContainerMid.style.display = "block";
  ContainerRight.style.display = "block";
}
function Box1() {
  let box = document.getElementById("box1");
  var renk = cardColors[0];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "1beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "1kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "1mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "1siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box2() {
  let box = document.getElementById("box2");
  var renk = cardColors[1];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "2beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "2kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "2mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "2siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box3() {
  let box = document.getElementById("box3");
  var renk = cardColors[2];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "3beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "3kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "3mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "3siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box4() {
  let box = document.getElementById("box4");
  var renk = cardColors[3];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "4beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "4kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "4mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "4siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box5() {
  let box = document.getElementById("box5");
  var renk = cardColors[4];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "5beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "5kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "5mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "5siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box6() {
  let box = document.getElementById("box6");
  var renk = cardColors[5];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "6beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "6kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "6mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "6siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box7() {
  let box = document.getElementById("box7");
  var renk = cardColors[6];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "7beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "7kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "7mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "7siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box8() {
  let box = document.getElementById("box8");
  var renk = cardColors[7];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "8beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "8kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "8mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "8siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box9() {
  let box = document.getElementById("box9");
  var renk = cardColors[8];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "9beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "9kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "9mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "9siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box10() {
  let box = document.getElementById("box10");
  var renk = cardColors[9];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "10beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "10kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "10mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "10siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box11() {
  let box = document.getElementById("box11");
  var renk = cardColors[10];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "11beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "11kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "11mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "11siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box12() {
  let box = document.getElementById("box12");
  var renk = cardColors[11];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "12beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "12kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "12mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "12siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box13() {
  let box = document.getElementById("box13");
  var renk = cardColors[12];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "13beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "13kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "13mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "13siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box14() {
  let box = document.getElementById("box14");
  var renk = cardColors[13];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "14beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "14kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "14mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "14siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box15() {
  let box = document.getElementById("box15");
  var renk = cardColors[14];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "15beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "15kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "15mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "15siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box16() {
  let box = document.getElementById("box16");
  var renk = cardColors[15];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "16beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "16kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "16mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "16siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box17() {
  let box = document.getElementById("box17");
  var renk = cardColors[16];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "17beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "17kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "17mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "17siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box18() {
  let box = document.getElementById("box18");
  var renk = cardColors[17];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "18beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "18kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "18mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "18siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box19() {
  let box = document.getElementById("box19");
  var renk = cardColors[18];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "19beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "19kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "19mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "19siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box20() {
  let box = document.getElementById("box20");
  var renk = cardColors[19];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "20beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "20kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "20mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "20siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box21() {
  let box = document.getElementById("box21");
  var renk = cardColors[20];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "21beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "21kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "21mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "21siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box22() {
  let box = document.getElementById("box22");
  var renk = cardColors[21];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "22beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "22kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "22mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "22siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box23() {
  let box = document.getElementById("box23");
  var renk = cardColors[22];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "23beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "23kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "23mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "23siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box24() {
  let box = document.getElementById("box24");
  var renk = cardColors[23];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "24beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "24kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "24mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "24siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
function Box25() {
  let box = document.getElementById("box25");
  var renk = cardColors[24];
  var redRem = redTeamRemaining.innerHTML;
  var blueRem = blueTeamRemaining.innerHTML;
  box.onclick = "";
  if (renk === "25beyaz") {
    box.style.backgroundColor = "rgb(255, 214, 163)";
    box.style.boxShadow = "4px 4px bisque";
  } else if (renk === "25kırmızı") {
    box.style.backgroundColor = "red";
    box.style.boxShadow = "4px 4px rgb(96, 0, 0)";
    redRem === redRem--;
    redTeamRemaining.innerText = redRem;
    if (redRem == "0") {
      alert("Oyun Bitti! Kırmızı Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "25mavi") {
    box.style.backgroundColor = "blue";
    box.style.boxShadow = "4px 4px rgb(0, 0, 96)";
    blueRem === blueRem--;
    blueTeamRemaining.innerText = blueRem;
    if (blueRem == "0") {
      alert("Oyun Bitti! Mavi Takım Kazandı.");
      gamearea.style.display = "none";
      location.reload();
    }
  } else if (renk === "25siyah") {
    box.style.backgroundColor = "black";
    box.style.boxShadow = "4px 4px rgb(58, 58, 58)";
    alert("Siyah kartı buldunuz, kaybettiniz!");
    location.reload();
  }
}
