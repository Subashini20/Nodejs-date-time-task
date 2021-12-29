const express1=require("express");
const app=express1();
var router=require("../date_time_task/routes/open_file")

app.use(express1.json());

app.use('/get', router);

app.listen(3000);
