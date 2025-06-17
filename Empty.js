let value1 = 67;
let value2 = 66;

// Wait function to wrap setTimeout in a Promise
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const a = async () => {
    await wait(4000);
    console.log("---Print A---", value1 <= value2);
};

const b = async () => {
    await wait(3000);
    console.log("---Print B---", value1 + value2);
};

const c = async () => {
    await wait(500);
    console.log("---Print C---", value1 % value2);
};

const d = async () => {
    await wait(4000);
    console.log("---Print D---", value2 / value1);
};

// This function will run them one after another
const runAll = async () => {
    await a();
    await b();
    await c();
    await d();
};

runAll();
