package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.VehicleDTO;

import java.util.ArrayList;

public interface VehicleService {

    public void saveVehicle(VehicleDTO dto);

    public ArrayList<VehicleDTO> getAllVehicles();

}
