package lk.ijse.spring.service;

import lk.ijse.spring.dto.ApprovedCustomerDTO;
import lk.ijse.spring.dto.ReservationDTO;

import java.util.ArrayList;

public interface ReservationService {

    public void saveReservation(ReservationDTO dto);

    public ArrayList<ReservationDTO> getAllReservations();
}
