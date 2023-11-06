package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.VehicleDTO;
import lk.ijse.spring.service.VehicleService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping("/vehicle")
public class VehicleController {

    @Autowired
    private VehicleService vehicleService;

    @PostMapping
    public ResponseUtil saveVehicle(@RequestBody VehicleDTO dto){
        vehicleService.saveVehicle(dto);
        return new ResponseUtil("200",dto.getId()+"added",null);
    }

    @GetMapping
    public ResponseUtil getAllVehicles() {
        ArrayList<VehicleDTO> allVehicles = vehicleService.getAllVehicles();
        return new ResponseUtil("200","Success",allVehicles);
    }
}
