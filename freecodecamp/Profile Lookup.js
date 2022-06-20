// Setup
const contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];
function lookUpProfile(name, prop) {
for (let i = 0; i < contacts.length; i++) {
   if (name == contacts[i]['firstName'] && contacts[i].hasOwnProperty(prop)) {
      return contacts[i][prop]}}
   

    for (let i = 0; i < contacts.length; i++) {
       if (name == contacts[i]['firstName'] && contacts[i].hasOwnProperty(prop)== false){
          return  "No such property"}}
       
   for (let i = 0; i < contacts.length; i++){
      if (name !== contacts[i]['firstName']) {
         return "No such contact"
      }
   }}
       

      /*  if (name !== contacts[i]['firstName']) {
      return "No such contact"}
    else { return "No such property" }


  for (let i = 0; i < contacts.length; i++) {
   if (contacts[i].hasOwnProperty(prop) == false) {

      return "No such property"}
   else { return "No such contact" }
}*/
    

   
  
  
   // Only change code above this line


console.log(lookUpProfile("Sherlock", "likes") )