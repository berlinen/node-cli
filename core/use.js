var data = {...}
//这种方案适合小型结构的数据，一旦数据过于庞大，不适合放在js文件里面，不利于维护
//不能很好的模拟ajax
$.ajax({
    url:'..'//这个时候ajax接口不存在，调不通
})
//不能重复利用，上生产肯定要删掉