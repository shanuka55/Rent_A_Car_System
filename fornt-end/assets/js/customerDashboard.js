let baseUrl = "http://localhost:8080/back_end_spring_war_exploded/";

let vehicles = [];
let arr = [];
let lastReservationId;
loadVehicles();

let lastDriverId;
reservationIdGen();

function loadVehicles() {
    $.ajax({
        url: baseUrl+"vehicle",
        method: 'get',
        dataType: "json",
        success: function (resp) {
            console.log(resp);
            for (let v of resp.data) {
                vehicles.push(v);

                var row = '<li><div class="featured-car-card" style="background-color: #1c1c1f!important;"><figure class="card-banner" ><img src="../assets/img/cars/alto.jpg" alt="Suzuki Alto" loading="lazy" width="440" height="300" class="w-100"></figure><div class="card-content" style="background-color: #1c1c1f;"><div class="card-title-wrapper" ><h3 class="h3 card-title"><a href="#">'+v.brand + " " + v.model +'</a></h3><data class="year" value="2021">2021</data></div><ul class="card-list"><li class="card-list-item" style="background-color: #1c1c1f;"><ion-icon name="people-outline"></ion-icon><span class="card-item-text">'+ v.passengers + "Peoples" +'</span></li><li class="card-list-item"><ion-icon name="flash-outline"></ion-icon><span class="card-item-text">'+ v.fuel +'</span></li><li class="card-list-item"><ion-icon name="speedometer-outline"></ion-icon><span class="card-item-text">'+ v.mileage +'</span></li><li class="card-list-item"><ion-icon name="hardware-chip-outline"></ion-icon><span class="card-item-text">'+ v.color +'</span></li></ul><div class="card-price-wrapper"><p class="card-price"><strong>'+ v.dailyRate +'</strong> / Per Day</p><button class="btn fav-btn" aria-label="Add to favourite list"><ion-icon name="heart-outline"></ion-icon></button></div></div></div></li>';
                $("#availableCars").append(row);

                arr.push(v.brand+v.model).toString();

                var row2 = '<option class="text-black" style="color: black;">'+ v.brand + " " +v.model + "  " + " (" + v.registerNumber +")"+'</option>';
                $("#cmbSelectVehicle").append(row2);
            }
            console.log(vehicles)
        }

    });
}




function reservationIdGen(){
    $.ajax({
        url: baseUrl+'reservation',
        method: 'get',
        dataType: "json",
        success: function (resp) {
            const reservatinIds = [0];
            for (let r of resp.data) {
                reservatinIds.push(r.id);
            }
            lastReservationId = reservatinIds.slice(-1);
            console.log("last id generated "+lastReservationId);
        }
    });
}

$("#btnSaveReservation").click(function () {
    saveReservation();
});

function saveReservation() {
    let rId = parseInt(lastReservationId)+1;
    let vehicle = $("#cmbSelectVehicle option:selected").text();
    let customerName = $("#txtReservationCName").val();
    let customerNIC = $("#txtNICCustomer").val();
    let pickupDate = $("#pickupDate").val();
    let finishDate = $("#reservedDate").val();
    let finishLocation = $("#fishLocation").val();

    var reservation = {
        id:rId,
        vehicle: vehicle,
        customerName: customerName,
        customerNIC : customerNIC,
        pickupDate : pickupDate,
        finishDate : finishDate,
        finishLocation : finishLocation
    }

    $.ajax({
        url: baseUrl+'reservation',
        method: 'post',
        contentType:"application/json",
        data:JSON.stringify(reservation),
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
