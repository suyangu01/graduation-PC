var tempModel = {
    SortID: "",
    Name: "",
    Sex: "",
    Address: "",
    timeDate: ""
};

$(function () {
    $("#uploadData").on("click", function () {
        alert("上传数据到MongoDB中");
        //构造数据类
        tempModel.SortID = $("#SortID").find("input").val();
        tempModel.Name = $("#Name").find("input").val();
        tempModel.Sex = $("#Sex").find("input").val();
        tempModel.Address = $("#Address").find("input").val();
        tempModel.timeDate = Date.now();

        //通过Ajax更新数据
        $.ajax({
            type: 'post',
            // url: "http://localhost:3000/insert",
            url: "/insert",
            dataType: "json",
            data: tempModel,
            success: function (resData) {
                if (resData.result == 1) {
                    //更新页面列表
                    alert('resData');
                }
            },
            error: function (error) {
                alert('error:' + error);
            }
        });
    });
});