package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.dto.ReservationDTO;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.entity.Reservation;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.repo.ReservationRepo;
import lk.ijse.spring.service.ReservationService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional
public class ReservationServiceIMPL implements ReservationService {
    @Autowired
    private ReservationRepo reservationRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void saveReservation(ReservationDTO dto) {
        if (reservationRepo.existsById(dto.getId())){
            throw new RuntimeException("customer"+dto.getId()+"Already Exists");
        }
        reservationRepo.save(modelMapper.map(dto, Reservation.class));
    }

    @Override
    public ArrayList<ReservationDTO> getAllReservations() {
        return modelMapper.map(reservationRepo.findAll(), new TypeToken<ArrayList<ReservationDTO>>() {}.getType());
    }
}
