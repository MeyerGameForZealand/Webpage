//#region Axios methods
import axios, { AxiosResponse, AxiosError } from "../../node_modules/axios/index";

interface IPiTable {
  id: number;
  player1hp: number;
  player2hp: number;
  player3hp: number;
  player4hp: number;
  player5hp: number;
  player6hp: number;
  turn: number;
  playerAmount: number;
  winner: number;
}

let dataArray : string[]
let HentButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonHent")

HentButton.addEventListener("click", performGetRequestPieTable)

function performGetRequestPieTable() {

  axios.get<IPiTable[]>("localhost:44390/api/PiData;")
    .then((response: AxiosResponse<IPiTable[]>) => {
      let data: IPiTable[] = response.data;
      let players = JSON.stringify(data);
      data.forEach(element => {
        console.log(element.id);
      dataArray = players.split(" ");
      });
    })
    .catch((error: AxiosError) => {
      console.log(error);
      error.message;
    });
}


//#endregion

//#region Generate Table for username input
let GenButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonGen")

GenButton.addEventListener("click", generate_table)

function generate_table(): void {
  // get the reference for the body
  let table: HTMLElement = <HTMLElement>document.getElementById("tableSpil");

  // creates a <table> element and a <tbody> element

  let tblBody: HTMLElement = <HTMLElement>document.getElementById("PlayerTable");
  tblBody.innerHTML = "";
  // creating all cells
  for (var i = 1; i < 7; i++) {
    // creates a table row
    let row: HTMLTableRowElement = <HTMLTableRowElement>document.createElement("tr");


    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    let cell: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("th");
    let cell2: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("td");
    let cell3: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("td");
    let cellText: Text = <Text>document.createTextNode("#" + i);
    let cellTextName: HTMLInputElement = <HTMLInputElement>document.createElement("input");
    let cellTextLiv: Text = <Text>document.createTextNode("" + i);
    cell.appendChild(cellText);
    cell2.appendChild(cellTextName);
    cell3.appendChild(cellTextLiv);
    row.appendChild(cell);
    row.appendChild(cell2);
    row.appendChild(cell3);


    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // appends <table> into <body>
  table.appendChild(tblBody);
}
//#endregion

let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonUpdate")

startButton.addEventListener("click", UpdateTable)

function UpdateTable(): void
{
  let liv: HTMLCollectionOf<HTMLTableDataCellElement> = document.getElementsByTagName("td")


  liv[10].innerText = dataArray[1];
  liv[12].innerText = dataArray[2];
  liv[14].innerText = dataArray[3];
  liv[16].innerText = dataArray[4];
  liv[18].innerText = dataArray[5];
  liv[20].innerText = dataArray[6];
}


//#region Sends usernames to DB and then generate table with usernames and lives 
/* 


function generate_playtable(): void {
  // get the reference for the body
  let table: HTMLElement = <HTMLElement>document.getElementById("tableSpil");

  // get the reference for the cells
  let tblBody: HTMLElement = <HTMLElement>document.getElementById("PlayerTable");
  tblBody.innerHTML = "";
  // creating all cells
  for (var i = 1; i < 7; i++) {
    // creates a table row
    let row: HTMLTableRowElement = <HTMLTableRowElement>document.createElement("tr");


    // Creates three <td> elements and a text node for each
    // makes the textnode the contents of the <td>, and put the <td> at
    // the end of the table row
    let cell: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("th");
    let cell2: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("td");
    let cell3: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("td");
    let cellText: Text = <Text>document.createTextNode("Place" + i);
    let cellText2: Text = <Text>document.createTextNode("Player" + i);
    let cellText3: Text = <Text>document.createTextNode("Liv" + i);
    cell.appendChild(cellText);
    cell2.appendChild(cellText2);
    cell3.appendChild(cellText3);
    row.appendChild(cell);
    row.appendChild(cell2);
    row.appendChild(cell3);


    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // appends <table> into <body>
  table.appendChild(tblBody);
} */
//#endregion

//#region Leaderboard Generate table
let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("buttonRefresh")

refreshButton.addEventListener("click", generate_Leadertable)

function generate_Leadertable(): void {
  // get the reference for the body
  let table: HTMLElement = <HTMLElement>document.getElementById("Leaderboard");

  // get the reference for the cells
  let tblBody: HTMLElement = <HTMLElement>document.getElementById("LeaderTable");
  tblBody.innerHTML = "";
  // creating all cells
  for (var i = 1; i < 7; i++) {
    // creates a table row
    let row: HTMLTableRowElement = <HTMLTableRowElement>document.createElement("tr");


    // Creates three <td> elements and a text node for each
    // makes the textnode the contents of the <td>, and put the <td> at
    // the end of the table row
    let cell: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("th");
    let cell2: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("td");
    let cell3: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("td");
    let cell4: HTMLTableCellElement = <HTMLTableCellElement>document.createElement("td");
    let cellText: Text = <Text>document.createTextNode("Place" + i);
    let cellText2: Text = <Text>document.createTextNode("Player" + i);
    let cellText3: Text = <Text>document.createTextNode("Antal Spil " + i);
    let cellText4: Text = <Text>document.createTextNode("Win " + i+" / Loss "+i);
    cell.appendChild(cellText);
    cell2.appendChild(cellText2);
    cell3.appendChild(cellText3);
    cell4.appendChild(cellText4);
    row.appendChild(cell);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);


    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  // appends <table> into <body>
  table.appendChild(tblBody);
}
//#endregion