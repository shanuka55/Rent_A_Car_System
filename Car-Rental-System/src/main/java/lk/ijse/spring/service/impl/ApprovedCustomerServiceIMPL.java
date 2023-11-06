package lk.ijse.spring.service.impl;


import lk.ijse.spring.dto.ApprovedCustomerDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.entity.ApprovedCustomer;
import lk.ijse.spring.entity.Customer;
import lk.ijse.spring.repo.ApprovedCustomerRepo;
import lk.ijse.spring.repo.CustomerRepo;
import lk.ijse.spring.service.ApprovedCustomerService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;

@Service
@Transactional
public class ApprovedCustomerServiceIMPL implements ApprovedCustomerService {

    @Autowired
    private ApprovedCustomerRepo approvedCustomerRepo;
    @Autowired
    private ModelMapper modelMapper;

    @Override
    public void saveCustomer(ApprovedCustomerDTO dto) {
        if (approvedCustomerRepo.existsById(dto.getId())){
            throw new RuntimeException("customer"+dto.getId()+"Already Exists");
        }
        approvedCustomerRepo.save(modelMapper.map(dto, ApprovedCustomer.class));
    }

    @Override
    public ArrayList<ApprovedCustomerDTO> getAllCustomer() {
        return modelMapper.map(approvedCustomerRepo.findAll(), new TypeToken<ArrayList<ApprovedCustomerDTO>>() {}.getType());
    }
}
