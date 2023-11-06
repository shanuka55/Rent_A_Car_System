let baseUrl = "http://localhost:8080/back_end_spring_war_exploded/";

var approvedNameList = [];
var approvedPswdList = [];
var approvedCusList = [];
var driverList = [];
var driverNameList = [];
var driverPswdList = [];
loadAllCustomers();
loadAllDrivers();

function loadAllCustomers() {
    $.ajax({
        url: baseUrl+"approvedCustomer",
        method: 'get',
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let AppCus of resp.data) {

                approvedCusList.push(AppCus);
                approvedNameList.push(AppCus.name);
                approvedPswdList.push(AppCus.pswd);
            }
        }

    });


}


function loadAllDrivers() {
    $.ajax({
        url: baseUrl+"driver",
        method: 'get',
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let AppDri of resp.data) {

                driverList.push(AppDri);
                driverNameList.push(AppDri.name);
                driverPswdList.push(AppDri.pswd);
            }
        }

    });


}

function customerLogin() {
    for (let i = 0; i < approvedCusList.length ; i++) {


        let typedName = $("#txtLoginName").val();
        let typedPswd = $("#txtLoginPassword").val();

        let dbName = approvedNameList[i];
        let dbPwsd = approvedPswdList[i];

        if (typedName === dbName && typedPswd === dbPwsd) {

            window.location.href = "../pages/customerDashboard.html";

        }

    }

}


$("#btnCustomerLogin").click(function () {
    customerLogin();

    setCustomerName();
    console.log("customerList "+approvedCusList);
    console.log("NameList "+approvedNameList);
    console.log("PswdList "+approvedPswdList);
});

function setCustomerName() {
    let n2 = $("#txtLoginName").val();
    console.log(n2)
    $("#lblCustomerName").val(n2);
}

$("#btnDriverLogin").click(function () {
    driverLogin();
});

function driverLogin() {
    for (let i = 0; i < driverList.length ; i++) {


        let typedName = $("#txtLoginName").val();
        let typedPswd = $("#txtLoginPassword").val();

        let dbName = driverNameList[i];
        let dbPwsd = driverPswdList[i];

        if (typedName === dbName && typedPswd === dbPwsd) {

            window.location.href = "../pages/driverDashBoard.html";

        }

    }
}

$("#btnAdminLogin").click(function () {
    adminLogin();
});

function adminLogin() {
    let typedName = $("#txtLoginName").val();
    let typedPswd = $("#txtLoginPassword").val();

    let dbName = "shanuka";
    let dbPwsd = "1234";

    if (typedName === dbName && typedPswd === dbPwsd) {

        window.location.href = "../pages/adminDashBoard.html";

    }
}

