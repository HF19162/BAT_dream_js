const fs = require('fs');
const files = [];
function walk(path){
fs
.readdirSync(path)
.forEach(file=>{
    const newPath = path + '/' +file;
    const stat = fs.statSync();
    // console.log(file,'+++++');
// fs.readdir(path,function(error,files){
//     if(error){
//         console.log(error);
//         return;
//         file
//     }
})
}
walk('./src');
console.log((files),'------');
// 没有交流，素养体现不出来，交互起来本质还是看感觉
//深入交流其实没多少用处，吉吉就不感兴趣
// 既然如此，那彻底接受，不再参合，当一个局外人吧。