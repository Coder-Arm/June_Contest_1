/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  console.log(arr.filter(x => x["profession"] === "developer").map(x => x));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element) => {
        if(element["profession"] === "developer") console.log(element);
  })
}

function addData() {
  //Write your code here, just console.log
  let newEmployee = {id: 4, name: "susan", age: "20", profession: "intern"}
  arr.push(newEmployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
let remove = arr.filter(x => x["profession"] === "admin");
arr.pop(remove[0]);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [{id : 4 , name : "rohit" , age : "21" , profession : "intern"},
  {id : 5 , name : "akshat" , age : "29" , profession : "manager"},
  {id : 6 , name : "tanmay" , age : "23" , profession : "developer"}
];
let concatArr = arr.concat(newArr);
console.log(concatArr);
}
