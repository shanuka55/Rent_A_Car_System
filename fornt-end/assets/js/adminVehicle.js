let baseUrl = "http://localhost:8080/back_end_spring_war_exploded/";
//
let lastVehicleId;
let availableVehicles = [];
vehicleIdGen();
loadAllVehicles();

function vehicleIdGen(){
    console.log("in method");
    $.ajax({
        url: baseUrl+'vehicle',
        method: 'get',
        dataType: "json",
        success: function (resp) {
            const vehicleIds = [0];
            for (let vehicle of resp.data) {
                vehicleIds.push(vehicle.id);
            }
            lastVehicleId = vehicleIds.slice(-1);
            console.log("last id generated"+lastVehicleId);
        }
    });
}


$("#btnSaveVehicle").click(function () {
    saveVehicle();

    location.reload();
});

function saveVehicle() {
    let vehicleId = parseInt(lastVehicleId)+1;
    let brand = $("#txtVehicleBrand").val();
    let model = $("#txtVehicleModel").val();
    let fuel = $("#cmbFuelType option:selected").text();
    let vehicleType = $("#cmbVehicleType option:selected").text();
    let mileage = $("#txtMileage").val();
    let passengers = $("#txtPassengers").val();
    let monthlyRate = $("#txtMonthlyRate").val();
    let DailyRate = $("#txtDailyRate").val();
    let freeMileage = $("#txtFreeMileage").val();
    let extraPrice = $("#txtExtraPrice").val();
    let registerNo = $("#txtRegistrationNumber").val();
    let lastServiceMileage = $("#txtServiceMilage").val();
    let color = $("#txtColor").val();
    let image = $("#carPicture").val();

    var Vehicle = {
        id : vehicleId,
        brand : brand,
        model : model,
        fuel : fuel,
        vehicleType : vehicleType,
        mileage : mileage,
        passengers : passengers,
        monthlyRate : monthlyRate,
        dailyRate : DailyRate,
        freeMileage : freeMileage,
        extraPrice : extraPrice,
        registerNumber : registerNo,
        lastServiceMileage : lastServiceMileage,
        color : color,
        image : image
    }

    $.ajax({
        url: baseUrl + 'vehicle',
        method: 'post',
        contentType: "application/json",
        data: JSON.stringify(Vehicle),
        dataType: "json",
        success: function (res) {
            alert(res.message);
        },
        error: function (error) {
            let cause = JSON.parse(error.responseText).message;
            alert(cause);
        }
    });

}

function loadAllVehicles() {
    $.ajax({
        url: baseUrl+"vehicle",
        method: 'get',
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let v of resp.data) {
                availableVehicles.push(v);

                var row = '<tr><td>' + v.id + '</td><td>' + v.brand+" "+ v.model + '</td><td>' + v.registerNumber + '</td><td>' + v.mileage + '</td><td>' + v.color + '</td><td>' + v.monthlyRate + '</td><td>' + v.dailyRate + '</td></tr>';
                $("#tblVehicle").append(row);
            }
        }

    });
}
