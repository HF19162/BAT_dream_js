// ali  14.6  2.6
// meituan 16  4
// 51xinyongka  17  5
// S  5
// A  3
// B  2
// C  1
// D  0
// level key 计算函数？

let stratigies = {
    'S':function(salary){
        return salary * 5;
    },
    'A':function(salary){
        return salary * 3;
    },
    'B':function(salary){
        return salary * 2;
    },
    'C':function(salary){
        return salary * 1;
    },
    'D':function(salary){
        return salary = 0;
    },
}

function calculate(level,salary){
    return stratigies[level](salary);
        // switch(level){
        //     case S:salary=5;break;
        //     case A:salary=3;break;
        //     case B:salary=2;break;
        //     case C:salary=1;break;
        //     case D:salary=0;break;
        // }
        // 如何消除分支
        // if(level==='S'){
        //     return salary*5;
        // }
        // if(level==='A'){
        //     return salary*3;
        // }
        // if(level==='B'){
        //     return salary*2;
        // }
        // if(level==='C'){
        //     return salary*1;
        // }
        // if(level==='D'){
        //     return leval;
        // }
}
console.log(calculate('S',10000));