// --------------------------Driver-------------------
let baseUrl = "http://localhost:8080/back_end_spring_war_exploded/";


let lastDriverId;
driverIdGen();

function driverIdGen(){
    console.log("in method");
    $.ajax({
        url: baseUrl+'driver',
        method: 'get',
        dataType: "json",
        success: function (resp) {
            const driverIds = [0];
            for (let driver of resp.data) {
                driverIds.push(driver.id);
            }
            lastDriverId = driverIds.slice(-1);
            console.log("last id generated"+lastDriverId);
        }
    });
}

$("#btnDriverSignUp").click(function () {
    saveDriver();
});

function saveDriver() {
    let driverId = parseInt(lastDriverId)+1;
    let driverName = $("#txtDriverName").val();
    let driverMail = $("#txtDriverMail").val();
    let driverPswd = $("#txtDriverPassword").val();
    let driverContact = $("#txtDriverContact").val();
    let driverAddress = $("#txtDriverAddress").val();
    let driverAge = $("#txtDriverAge").val();
    let driverNic = $("#driverNIC").val();
    let driverLicence = $("#driverLicenceDetails").val();

    var driver = {
        id : driverId,
        name : driverName,
        mail : driverMail,
        pswd : driverPswd,
        contact : driverContact,
        address : driverAddress,
        age : driverAge,
        nic : driverNic,
        licence : driverLicence
    }

    console.log(driver);

    $.ajax({
        url: baseUrl+'driver',
        method: 'post',
        contentType:"application/json",
        data:JSON.stringify(driver),
        dataType:"json",
        success: function (res) {
            alert(res.message);
        },
        error:function (error){
            let cause= JSON.parse(error.responseText).message;
            alert(cause);
        }

    });
}