let baseUrl = "http://localhost:8080/back_end_spring_war_exploded/";
let approvedList = [];

loadAllCustomers();

let no =0;
function loadAllCustomers() {
    $("#adminCustomerTable").empty();
    $.ajax({
        url: baseUrl+"customer",
        method: 'get',
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let cus of resp.data) {

                let cusId= cus.id;
                let name= cus.name;
                let pswd= cus.pswd;
                let mail= cus.mail;
                let address= cus.address;
                let contact= cus.contact;
                let nic= cus.nic;
                let licence= cus.licence;

                var approvedCustomer = {
                    id : cusId,
                    name : name,
                    pswd : pswd,
                    mail : mail,
                    address : address,
                    contact : contact,
                    nic : nic,
                    licence : licence
                }

                approvedList.push(approvedCustomer);

                var row = '<tr><td>' + no+1 + '</td><td>' + cus.id + '</td><td>' + cus.name + '</td><td>' + cus.mail + '</td><td>' + cus.address + '</td><td>' + cus.contact + '</td><td>' + cus.nic + '</td></tr>';;
                $("#adminCustomerTable").append(row);
            }

        }
    });

}

$("#btnCustomerApprove").click(function () {
    customerApproval();
})

function customerApproval() {
    for (let i = 0; i <approvedList.length ; i++) {

        var Customer = approvedList[i];

        $.ajax({
            url: baseUrl + "approvedCustomer",
            method: 'post',
            contentType: "application/json",
            data: JSON.stringify(Customer),
            dataType: "json",
            success: function (resp) {
                alert(resp.message);
            },
            error:function (error) {
                let cause =  JSON.parse(error.responseText).message;

            }
        })

    }

    $("#adminCustomerTable").empty();
}