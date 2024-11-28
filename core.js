const essence = {
    name: "Jhon",
    surname: "Smith",
    age: 45,
    profession: "manager",
    hp: 100,
    sleepines: 0,
  };

  function printObject(objectName) {
    printLine();
    for (let prop in objectName) {
      console.log(`${prop} - ${objectName[prop]}`);
    };
    printLine();
  };
  
  function printLine(char, lengthLine = 30) {
    let result = ``;
    char = char || `=`;
    for (let i = 0; i < lengthLine; i++) {
      result += char;
    };
    return (console.log(result));
  };
  
  printObject(essence);

