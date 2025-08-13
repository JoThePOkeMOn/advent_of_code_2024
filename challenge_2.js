const fs = require("fs").promises;

function safelyIncreasing(report) {
  const reportInt = report
    .trim()
    .split(" ")
    .map((num) => parseInt(num, 10));
  for (let i = 0; i < reportInt.length - 1; i++) {
    if (reportInt[i] >= reportInt[i + 1]) {
      return false;
    }
    const diff =Math.abs(reportInt[i]-reportInt[i+1]);
    if(diff > 3){
      return false
    }
  }
  return true;
}

function safelyDecreasing(report) {
  const reportInt = report
    .trim()
    .split(" ")
    .map((num) => parseInt(num, 10));
  for (let i = 0; i < reportInt.length - 1; i++) {
    if (reportInt[i] <= reportInt[i + 1]) {
      return false;
    }
    const diff = Math.abs(reportInt[i] - reportInt[i+1]);
    if (diff > 3) {
      return false;
    }
  }
  return true;
}

let Safe = 0;

async function readingFile() {
  try {
    const data = await fs.readFile("input2.txt", "utf8");
    let reports = data.split("\n").filter((line) => line.trim().length > 0);

    reports.forEach((report) => {
      if (safelyIncreasing(report) || safelyDecreasing(report)) {
        Safe++;
      }
    });

    console.log(Safe);
  } catch (error) {
    console.log(error);
  }
}

readingFile();
