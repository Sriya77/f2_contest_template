/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((value) => {
    if (value.profession === "developer") console.log(value.profession);
  });
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((value) => {
    if (value.profession === "developer")console.log(value.profession);
  });
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(value => value.profession !== "admin");
  console.log(arr);
  
}

function concatenateArray() {
  //Write your code here, just console.log
  const newEmployees = [
    { id: 5, name: "alice", age: "22", profession: "designer" },
    { id: 6, name: "bob", age: "25", profession: "manager" },
    { id: 7, name: "charlie", age: "23", profession: "tester" }
  ];
  arr = arr.concat(newEmployees)
  console.log(arr);
  
}
