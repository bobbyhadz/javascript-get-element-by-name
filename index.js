console.log('bobbyhadz.com');

// ✅ Get first element with name = `box1`
const el1 = document.querySelector('[name="box1"]');
console.log(el1); // 👉️ div

// ----------------------------------------

// ✅ Get all elements with name = `box1`
const elements1 = document.querySelectorAll('[name="box1"]');
console.log(elements1); // 👉️ [div]

// ----------------------------------------

// ✅ Get all elements with name = `box1`
const elements2 = document.getElementsByName('box1');
console.log(elements2); // 👉️ [div]
