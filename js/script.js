const output = document.querySelector(".output")
const teams = [
  {
    nome: "Wayne Burnet",
    ruolo: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg"
  },
  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg"
  },
  {
    nome: "Walter Gordont",
    ruolo: "Office Manager",
    img: "walter-gordon-office-manager.jpg"
  },
  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg"
  },
  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    img: "scott-estrada-developer.jpg"
  },
  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    img: "barbara-ramos-graphic-designer.jpg"
  }
]

for (let team of teams) {
  console.log(team);

  output.innerHTML += `
  <div class="card" style="width: 18rem;">
    <img src="assets/img/img/${team.img}" class="card-img-top" alt="${team.nome}">
    <div class="card-body">
      <h5 class="card-title">${team.nome}</h5>
      <p class="card-text">${team.ruolo}</p>
    </div>
  </div>
  `
}