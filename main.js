import LinkedList from "./LinkedList.js";

const list = new LinkedList();

list.append("guitar");
list.append("string");
list.append("chord");
list.append("note");
list.append("sound");

// Testing extra credit methods
list.insertAt(2, "melody");
list.removeAt(3);
list.prepend("music");

console.log(list.toString());
