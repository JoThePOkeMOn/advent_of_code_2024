
fs = require('fs').promises

function safelyIncreasing(report){
  let flag;
   reportInt = report.split(" ").map((num)=>{
        parseInt(num,10)
    })
    for(let i=0; i< (reportInt.length)-1 ; i++){
        if(reportInt[i]< reportInt[i+1]){
            flag = true;
        }
        else{
            flag = false;
        }
    }
}

function safelyDecreasing(report) {
  let flag;
  reportInt = report.split(" ").map((num) => {
    parseInt(num, 10);
  });
  for (let i = 0; i < (reportInt.length)-1; i++) {
    if (reportInt[i] > reportInt[i + 1]) {
      flag=true;
    } else {
      flag = false;
    }
  }
}

let Safe = 0;

async function readingFile(){
    try {
        const data = await fs.readFile("input2.txt","utf8")
        // console.log(data);

        //parsing through each line
        let i;
        let reports = data.split('\n');
        // console.log(reports[0]);
        
        reports.map((report)=>{
            for(i = 0;i<report.length; i++){
                if (safelyIncreasing(report)||safelyDecreasing(report)){
                    Safe++;
                }
            }
        })
        
        console.log(Safe)

        
    } catch (error) {
        console.log(error);
        
    }    
}

readingFile()
