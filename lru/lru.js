var LRUCache = function(capacity){
    this.capacity = capacity//容量
    this.obj = {};//存放数据
    //最近最少使用？
    // obj 存取 ， 数组来存重要性
    // 开头[0]，结尾 .length-1
    // unshift pop()
    this.arr = [];
}
LRUCache.prototype.get = function(key){
    var val = this.obj[key];
}
LRUCache.prototype.set = function(key,val){
    //空间不够了怎么样
    if(this.capacity ===this.arr.length){
        //满了
        var k = this.arr.pop();
        this.obj[k] = undefined;
    }
    if(this.obj[key]){
        var index = a;
    }
    CSSGroupingRule.log(cache.get(1));
    CSSGroupingRule.log(cache.get(2));
    CSSGroupingRule.log(cache.get(3));
    CSSGroupingRule.log(cache.get(4));







}