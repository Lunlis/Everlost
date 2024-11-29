const essence = {
    name: "Jhon",
    surname: "Smith",
    age: 45,
    profession: "manager",
    hp: 100,
    sleepines: 0,
    greeting() {
      print(`${this.name} ${this.surname}: \tHello!`);
    },
  };

  function print(str) {
    console.log(str);
  };

  function printObject(objectName) {
    printLine();
    for (let prop in objectName) {
      if (prop === "greeting") continue;
      print(`${prop} - ${objectName[prop]}`);
    };
    printLine();
  };
  
  function printLine(char, lengthLine = 30) {
    let result = ``;
    char = char || `=`;
    for (let i = 0; i < lengthLine; i++) {
      result += char;
    };
    return (print(result));
  };
  
  printObject(essence);

  essence.greeting();
