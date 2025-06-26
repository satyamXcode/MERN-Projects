//const fs = require("fs");

////////////////// (Callback Hell) ///////////////////////

// fs.readFile("file1.txt", "utf-8", (err, data01) => {
//     if(err) throw err;
//     console.log(data01);
//     fs.readFile("file2.txt", "utf-8", (err, data02) => {
//         if(err) throw err;
//         console.log(data02);
//         fs.writeFile("output03.txt", `${data01} + ${data02}`, (err) => {
//             if(err) throw err;
//             console.log("combined successfully.");
//         })
//     })
// })

// Use Promises (.then/.catch)

// const fs = require('fs').promises; // Node.js built-in promises

// fs.readFile('file1.txt', 'utf8')
//   .then(data1 => {
//     return fs.readFile('file2.txt', 'utf8')
//       .then(data2 => fs.writeFile('output.txt', data1 + data2)); // ✅ data1 accessible
//   })
//   .then(() => console.log('Done!'))
//   .catch(err => console.error('Error:', err));


// Async/Await (Modern Solution)

const fs = require('fs').promises;

async function processFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    console.log(data1);
    const data2 = await fs.readFile('file2.txt', 'utf8');
    console.log(data2);
    await fs.writeFile('output.txt', data1 + data2);
    console.log('Done!');
  } catch (err) {
    console.error('Error:', err);
  }
}

processFiles();
 


