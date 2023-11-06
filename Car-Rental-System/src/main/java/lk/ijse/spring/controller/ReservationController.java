package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.service.ReservationService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody ReservationDTO dto){
        reservationService.saveReservation(dto);
        return new ResponseUtil("200",dto.getId()+"added",null);
    }
    @GetMapping
    public ResponseUtil getAllCustomers() {
        ArrayList<ReservationDTO> allReservations = reservationService.getAllReservations();
        return new ResponseUtil("200","Success",allReservations);
    }
}
