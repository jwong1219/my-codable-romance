var answArr = [
  {name: "Sandra",
  image: "",
  answers: ["1","5","3","1","5","3","1","5","3","1"]},
  {name: "Moose",
  image: "",
  answers: ["2","5","4","2","2","1","2","5","1","5"]},
  {name: "Justin",
  image: "",
  answers: ["5","3","4","1","3","2","4","1","1","4"]},
];

characters =[
{
  name: "Eric Cartman",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/eric-cartman.png",
  answers:[]
},{
  name: "Stan Marsh",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/stan-marsh.png",
  answers: [],
},{
  name: "Kyle Broflovski",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/kyle-broflovski.png",
  answers: [],
},{
  name: "Kenny McCormick",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png",
  answers: []
},{
  name: "Butters Stotch",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/butters-stotch.png",
  answers: []
},{
  name: "Wendy Testaburger",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/wendy-testaburger.png",
  answers: []
},{
  name: "Token Black",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/token-black.png",
  answers: []
},{
  name: "Bebe Stevens",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/kids/bebe-stevens.png",
  answers: []
},{
  name: "Heidi Turner",
  image: "http://southparkstudios.mtvnimages.com/shared/characters/alter-egos/alter-egos-heidi-turner-w-hat.png",
  answers: []

}];

for (index in characters) {
  let answerArr = [];
  for (var i=0; i<10; i++) {
    let ranNum = Math.ceil(Math.random() * 5);
    answerArr.push(ranNum.toString());
  }
  characters[index].answers = answerArr;
}

module.exports = characters;