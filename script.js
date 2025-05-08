// Variabelen voor carousel
let current = 0;
const images = document.querySelectorAll(".carousel-img");

function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
}

// Functie om de volgende afbeelding te tonen in de carousel
function showNextImage() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}

// Carousel start na elke 4 seconden
setInterval(showNextImage, 4000); // Wissel elke 4 seconden

// Gegevens voor praesidium
const praesidiumData = [
  {
      Jaar: "'92-'93",
      Praeses: "Bart De Kock (Bud)",
      Penningmeester: "Frank Verbeke (Dolf)",
      Cantor: "Filip Durant (Filoe)",
      Schachtentemmer: "Frederik De Ruyck (Free)",
      Zedenmeester: "Saskia Landuit",
      Clubcafé: "The Flash",
      img: ""
  },
  {
      Jaar: "'93-'94",
      Praeses: "Bart De Kock (Bud)",
      Vicepraeses: "Hein Vansteenkiste",
      Penningmeester: "Filip Engels (Piggy)",
      Secretaris: "Bart Vanderlinden",
      Cantor: "Koen De Kam (De Laam)",
      Schachtentemmer: "Frederik De Ruyck (Free)",
      Zedenmeester: "Frank Verbeke (Dolf)",
      Clubcafé: "'T Voske / Aboesimbel",
      img: ""
  },
  {
      Jaar: "'94-'95",
      Praeses: "Roel Van Der Velden / Chris Tielemans",
      Vicepraeses: "Klaartje Vanwymelbeke",
      Penningmeester: "Frank Verbeke (Dolf) / Hans gelaude",
      Secretaris: "Hans gelaude",
      Cantor: "Bart De Kock (bud)",
      Schachtentemmer: "Sylvie De Ruyck",
      Sportpraeses: "Benny De Vos",
      Zedenmeester: "Filip Van Der Linden",
      Biermeester: "Didier Ravelingien",
      Clubcafé: "De Cantus",
      img: ""
  },
  {
      Jaar: "'95-'96",
      Praeses: "Klaartje Vanwymelbeke",
      Vicepraeses: "Filip Van Der Linden",
      Penningmeester: "Hans Gelaude",
      Secretaris: "Hans gelaude",
      Cantor: "Nikolas Vandekerkhove",
      Schachtentemmer: "Christophe De Bodt",
      Sportpraeses: "Benny De Vos",
      Zedenmeester: "Filip Van Der Linden",
      Biermeester: "Didier Ravelingien",
      Clubcafé: "De Cantus",
      img: ""
  },
  {
      Jaar: "'96-'97",
      Praeses: "Benny De Vos",
      Vicepraeses: "Pascal Stael",
      Penningmeester: "Stefaan Callaert",
      Secretaris: "Klaartje Vanwymelbeke",
      Cantor: "Mieke Vanhecke",
      Schachtentemmer: "Wouter Delanote (Spruute)",
      Sportpraeses: "Koen De Vos",
      Zedenmeester: "Steven Corvelein",
      Feestpraeses: "Christoph Jolie",
      Biermeester: "Sven Van Wetter",
      Clubcafé: "De Cantus",
      img: ""
  },
  {
      Jaar: "'97-'98",
      Praeses: "Pascal Stael",
      Vicepraeses: "Christoph Jolie",
      Penningmeester: "Stefaan Callaert",
      Secretaris: "Vincent Vanhove",
      Cantor: "Tom Deschrijver",
      Schachtentemmer: "Koen De Vos",
      Zedenmeester: "Bart De Roest",
      PR: "Bianca Panesi",
      Clubcafé: "De Cantus",
      img: ""
  },
  {
      Jaar: "'98-'99",
      Praeses: "Wouter Delanote (Spruute)",
      Vicepraeses: "Dieter Knockaert",
      Penningmeester: "Filip Bauwens",
      Secretaris: "Kurt Marchand",
      Cantor: "Mieke Vanhecke",
      Schachtentemmer: "Inge Marreel",
      Sportpraeses: "Tim Van Dessel",
      Zedenmeester: "Christoph Jolie",
      Feestpraeses: "Regina Lardenoi",
      PR: "Bianca Panesi",
      Clubcafé: "De Cantus / 't Kaffaat",
      img: ""
  },
  {
      Jaar: "'99-'00",
      Praeses: "Kurt Marchand",
      Vicepraeses: "Nicolas Pelckmans",
      Penningmeester: "Marieke Servayge",
      Secretaris: "Bart Devoldere",
      Cantor: "Wouter Delanote (Spruute)",
      Schachtentemmer: "Marieke Ingels",
      Sportpraeses: "Veronique Vanhautte",
      Zedenmeester: "Frank Verbeke (Dolf)",
      Feestpraeses: "Stefanie Dhulst",
      PR: "Stefanie Dhulst",
      Clubcafé: "'t Kaffaat",
      img: ""
  },
  {
      Jaar: "'00-'01",
      Praeses: "Kurt Marchand / Wouter Delanote (Spruute)",
      Vicepraeses: "Bernard Braet (Bernie)",
      Penningmeester: "Bart Devoldere / Maarten Servayge",
      Secretaris: "Hans Gelaude",
      Cantor: "Wouter Delanote (Spruute)",
      Schachtentemmer: "Christoph Maertens",
      Sportpraeses: "Maarten Servayge",
      Zedenmeester: "Mieke van Hecke",
      Feestpraeses: "Kelly Roelandt",
      PR: "Nele Dewulf",
      Clubcafé: "'t Kaffaat / Ambiorix",
      img: ""
  },
  {
      Jaar: "'01-'02",
      Praeses: "Bernard Braet (Bernie)",
      Vicepraeses: "Peter Schroyen",
      Penningmeester: "Hans Gelaude",
      Secretaris: "Veronique Vanhaute",
      Cantor: "Evelyne Doom",
      Schachtentemmer: "Bart Goyvaerts",
      Sportpraeses: "Raf Schellekens",
      Zedenmeester: "Pascal Sierens",
      Feestpraeses: "Pascal Sierens",
      PR: "Sybryn Leirs",
      Webmeester: "Chun Sum To",
      Clubcafé: "De Student / Cuba Libre",
      img: ""
  },
  {
      Jaar: "'02-'03",
      Praeses: "Bart Goyvaerts",
      Vicepraeses: "Sven Van Looveren",
      Penningmeester: "Hans Gelaude",
      Secretaris: "Peter De Deken (Samantha)",
      Cantor: "Gregory laporte",
      Schachtentemmer: "Jan Leysen",
      Sportpraeses: "Peter De Deken (Samantha)",
      Zedenmeester: "Chriz De Clercq (Chriztus)",
      Webmaster : "Chun Sum To",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'03-'04",
      Praeses: "Peter De Deken (Samantha)",
      Vicepraeses: "Lode Hendrickx",
      Penningmeester: "Bart Van Hoorick",
      Cantor: "Gregory laporte",
      Schachtentemmer: "Tom Rombouts",
      Sportpraeses: "Dirk Hermans",
      Zedenmeester: "Davy Tavernier",
      PR: "Joke Huybrechts",
      Webmaster : "Chun Sum To",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'04-'05",
      Praeses: "Lode Hendrickx",
      Vicepraeses: "Dirk Hermans",
      Penningmeester: "Dorien van Steen",
      Cantor: "Jeroen Deckers",
      Schachtentemmer: "Tom Rombouts",
      PR: "Eefje de Win",
      Webmaster : "Jeroen Deckers",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'05-'06",
      Praeses: "Jeroen Deckers",
      Vicepraeses: "Leen Verhelst",
      Penningmeester: "Elisabeth Smet",
      Secretaris: "Victoria Smet",
      Cantor: "Maarten Gabriëls",
      Schachtentemmer: "Tom Rombouts / Dieter Aernouts",
      Sportpraeses: "Chriz De Clercq (Chriztus)",
      Zedenmeester: "Leonie Willemsen",
      PR: "Sien Lenders",
      Webmaster : "Bert Claes",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'06-'07",
      Praeses: "Dirk Hermans",
      Vicepraeses: "Maarten Vervoort",
      Penningmeester: "Elisabeth Smet",
      Secretaris: "Leonie Willemsen",
      Schachtentemmer: "Pieter Cools",
      Sportpraeses: "Veerle Laurens",
      PR: "Koen van Dun",
      Webmaster : "Maarten Gabriëls",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'07-'08",
      Praeses: "Maarten Vervoort",
      Vicepraeses: "Yannick van den Eijnden",
      Secretaris: "Ben Aerts",
      Schachtentemmer: "Ben Kahn",
      Sportpraeses: "Niels van den Ouweland",
      Zedenmeester: "Pieter Onclin",
      PR: "Joyce Gilbert",
      Webmaster : "Maarten Gabriëls",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'08-'09",
      Praeses: "Maarten Vervoort",
      Vicepraeses: "Elke Roosens",
      Penningmeester: "Marilynn franck",
      Secretaris: "Ben Aerts",
      Cantor: "Charlotte Mondelaers",
      Schachtentemmer: "Rafael Celerier",
      Sportpraeses: "Niels van den Ouweland",
      Zedenmeester: "Koen Cassimon",
      PR: "Joan Deprez",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'09-'10",
      Praeses: "Ben Kahn",
      Vicepraeses: "Els Goossens",
      Penningmeester: "Annelies Eelen",
      Secretaris: "Ruben Devos",
      Schachtentemmer: "Rob Van Den Bergh",
      Sportpraeses: "Tom De Vadder",
      Zedenmeester: "Leonie Willemsen",
      PR: "Joan Deprez",
      Webmaster : "Thibault Van Hende",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'10-'11",
      Praeses: "Els Goossens",
      Vicepraeses: "Tom De Vadder",
      Secretaris: "Glen Paesen",
      Cantor: "Maarten Gabriëls",
      Schachtentemmer: "Tom Geerts",
      Sportpraeses: "Ruben Bex",
      Zedenmeester: "Pieter Vangeneugden (Kuul)",
      PR: "Rob Van Den Bergh",
      Webmaster : "Stijn Aerts",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'11-'12",
      Praeses: "Tom De Vadder",
      Vicepraeses: "Ruben Bex",
      Quaestor: "Karen Vansloen",
      AbActis: "Stijn Aerts",
      Cantor: "Jelle Apostel",
      Schachtentemmer: "Jens Meyssen",
      Sportpraeses: "Maxime Isebaert",
      Zedenmeester: "Glenn Vandamme",
      Feestpraeses: "Thibault Van Hende",
      Webmaster : "Kim Van Crombrugge",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'12-'13",
      Praeses: "Stijn Aerts",
      Vicepraeses: "Glenn Vandamme",
      Quaestor: "Charlotte Pals",
      AbActis: "Bart Horvath",
      Cantor: "Arike Vandenborre",
      Schachtentemmer: "Sarah Schoon",
      Sportpraeses: "Maarten Schouteden",
      Zedenmeester: "Jens Meyssen",
      PR: "Tinne Leemans",
      Webmaster : "Bert Van Dycke",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'13-'14",
      Praeses: "Bert Van Dycke",
      Vicepraeses: "Piet De Vadder",
      Quaestor: "Sybren Verhoeven",
      AbActis: "Floris Deleersnijder",
      Cantor: "Justine Boin",
      Schachtentemmer: "Josey de Smet",
      Sportpraeses: "Bart Verbakel",
      Zedenmeester: "Bram Verbrugghen",
      PR: "Leen Van Looveren",
      Webmaster : "Lothar Arys (Lotjer)",
      Clubcafé: "Cuba Libre",
      img: ""
  },
  {
      Jaar: "'14-'15",
      Praeses: "Glenn Vandamme (Vlan)",
      Vicepraeses: "Robrecht Koyen",
      Quaestor: "Sara Willems (Willie)",
      AbActis: "Tom Anrijs / Sven van Zoest",
      Cantor: "Bart Verbakel",
      Schachtentemmer: "Maarten Moens (Moens)",
      Sportleider: "Alec Uytterhoeven",
      Zedenmeester: "Lennert Schol",
      PR: "Jeroen Eeckhaut (Jerre)",
      Webmaster : "Remie Verhulst",
      Clubcafé: "Cuba Libre / Cesar",
      img: ""
  },
  {
      Jaar: "'15-'16",
      Praeses: "Jeroen Eeckhaut (Jerre)",
      Vicepraeses: "Janne Vermeiren (Jeanne)",
      Quaestor: "Pieter Schelfhout (Piet)",
      AbActis: "Tomas Smets",
      Cantor: "Bart Verbakel",
      Schachtentemmer: "Arne Verschoore (Parne)",
      Sportleider: "Nina Wauters",
      Zedenmeester: "Jordy Jonck",
      PR: "Michiel de Rop",
      Webmaster : "Lander Van Hove",
      Clubcafé: "Cuba / Cesar",
      img: ""
  },
  {
      Jaar: "'16-'17",
      Praeses: "Nina Wauters",
      Vicepraeses: "Matthijs Hofmans",
      Quaestor: "Aileen Sarrazin",
      AbActis: "Tomas Smets",
      Cantor: "Aileen Sarrazin",
      Schachtentemmer: "Gilles Brynaert",
      Sportleider: "Flor Velle",
      Zedenmeester: "Luis Zadra",
      PR: "Kenzo Heye",
      Feestpraeses: "Lothar Arys (Lotjer)",
      Webmaster : "Flor Velle",
      Clubcafé: "Cuba / Cesar",
      img: "1617"
  },
  {
      Jaar: "'17-'18",
      Praeses: "Flor Velle (Directeur Velle)",
      Vicepraeses: "Lite Decuyper",
      Quaestor: "Monica Demol (Moneyca)",
      AbActis: "Sibout De Laender (Sib)",
      Cantor: "Kenzo Heye",
      Schachtentemmer: "Frederik Boone (Fré)",
      PR: "Cécile Thienpont (Cécé)",
      Zedenmeester: "Levi de Quick (Quickie)",
      Webmaster : "Matthias Geers",
      Clubcafé: "Cuba / The Zone",
      img: "1718"
  },
  {
      Jaar: "'18-'19",
      Praeses: "Levi de Quick (Quickie)",
      Vicepraeses: "Matthias Geers",
      Quaestor: "Sabrina Vandervecken (Sabi)",
      AbActis: "Ibe Schuddinck",
      Schachtentemmer: "Mathis Van Mullem",
      PR: "Elynne Doucé",
      Sportleider: "Ward Lingier (Verward)",
      Zedenmeester: "César Cremery",
      Webmaster : "Alexander Gypers (Sasha)",
      Clubcafé: "Cuba / The Zone",
      img: ""
  },
  {
      Jaar: "'19-'20",
      Praeses: "Matthias Geers",
      Vicepraeses: "Ben Cremer",
      Quaestor: "Anaïs Cailliez",
      AbActis: "Sien Gruyaert",
      Schachtentemmer: "Janne Van Schepdael",
      PR: "Jens Crucke (Jeans)",
      Sportleider: "Brent van Nauw",
      Cantor: "Kaitlin De Klerk",
      Webmaster : "Alexander Gypers (Sasha)",
      Clubcafé: "Cuba / The Zone",
      img: ""
  },
  {
      Jaar: "'20-'21",
      Praeses: "Ben Cremer",
      Vicepraeses: "Janne Van Schepdael",
      Quaestor: "Anaïs Cailliez",
      AbActis: "Sien Gruyaert",
      Schachtentemmer: "Jolien Gurny",
      PR: "Vanille Dujardin",
      Sportleider: "Brent van Nauw",
      Cantor: "Matthias Geers",
      Zedenmeester: "Jacob Dewulf",
      Webmaster : "Alexander Gypers (Sasha)",
      Clubcafé: "Cuba / The Zone",
      img: "2021"
  },
  {
      Jaar: "'21-'22",
      Praeses: "Ben Cremer",
      Vicepraeses: "Janne Van Schepdael",
      Quaestor: "Anaïs Cailliez",
      AbActis: "Laurens Verhé",
      Cantor: "Arno De Meulemeester",
      Schachtentemmer: "Jolien Gurny",
      Sportleider: "Wannes Boel",
      Zedenmeester: "Eline Verkerken",
      PR: "Vanille Dujardin",
      Feestpraeses: "Matthias Geers",
      Webmaster : "Sebastiaan Cuypers",
      Clubcafé: "Cuba / The Zone",
      img: "2122"
  },
  {
      Jaar: "'22-'23",
      Praeses: "Janne Van Schepdael",
      Vicepraeses: "Wannes Boel",
      Quaestor: "Jasper Fossez",
      AbActis: "Eline Verkerken",
      Cantor: "Arno De Meulemeester",
      Schachtentemmer: "Arvid Van Dorpe",
      Sportleider: "Brent Van Nauw",
      Zedenmeester: "Casper Bieseman",
      PR: "Torrin De Wree",
      Webmaster : "Jens Crucke",
      Clubcafé: "Cuba / The Zone",
      img: "2223"
  },
  {
      Jaar: "'23-'24",
      Praeses: "Eline Verkerken",
      Vicepraeses: "Torrin De Wree",
      Quaestor: "Mirte Bosmans",
      AbActis: "Rosalie Cremerie",
      Cantor: "Peter Vanduffel",
      Schachtentemmer: "Jonie Dujardin",
      Sportleider: "Janten Bruyneel",
      Zedenmeester: "Maarten (Makke) Wens",
      PR: "Brent Ivens",
      Webmaster : "Arvid Van Dorpe",
      Clubcafé: "Cuba / The Zone",
      img: "2324"
  },
  {
    Jaar: "'24-'25",
    Praeses: "Torrin De Wree",
    Vicepraeses: "Casper Bieseman",
    Quaestor: "Mirte Bosmans",
    AbActis: "Liyah Bieseman",
    Cantor: "Ben Cremer",
    Schachtentemmer: "Ibe Schuddinck",
    Sportleider: "Jordy Moenssens",
    Zedenmeester: "Maarten (Makke) Wens",
    PR: "Febe Declercq",
    Webmaster : "Tiebe Rutten",
    Clubcafé: "Cuba / The Zone",
    img: "2324"
}
].reverse()

const yearSelector = document.getElementById("year-selector");
praesidiumData.forEach(item => {
  const option = document.createElement("option");
  option.value = item.Jaar;
  option.textContent = item.Jaar;
  yearSelector.appendChild(option);
});

// Toon de gegevens wanneer een jaar geselecteerd wordt
yearSelector.addEventListener("change", function() {
  const selectedYear = this.value;
  const infoDiv = document.getElementById("propraesidium-info");
  infoDiv.innerHTML = ""; // Wis vorige inhoud

  const selectedData = praesidiumData.find(p => p.Jaar === selectedYear);

  if (selectedData) {
    const entries = Object.entries(selectedData)
      .filter(([key]) => key !== "Jaar" && key !== "img");

    const yearTitle = document.createElement("h3");
    yearTitle.classList.add("pro-year-title");  // Changed class for styling
    yearTitle.textContent = `Praesidium ${selectedData.Jaar}`;
    infoDiv.appendChild(yearTitle);

    const gridContainer = document.createElement("div");
    gridContainer.classList.add("pro-praesidium-grid");  // Changed class for grid styling

    entries.forEach(([key, value]) => {
      const card = document.createElement("div");
      card.classList.add("pro-praesidium-card");  // Changed class for card styling

      const cardTitle = document.createElement("h4");
      cardTitle.classList.add("pro-card-title");
      cardTitle.textContent = key;

      const cardContent = document.createElement("p");
      cardContent.classList.add("pro-card-content");
      cardContent.textContent = value;

      card.appendChild(cardTitle);
      card.appendChild(cardContent);
      gridContainer.appendChild(card);
    });

    infoDiv.appendChild(gridContainer);
  }
});

