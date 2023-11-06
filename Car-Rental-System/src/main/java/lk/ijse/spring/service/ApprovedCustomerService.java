package lk.ijse.spring.service;

import lk.ijse.spring.dto.ApprovedCustomerDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.impl.ApprovedCustomerServiceIMPL;

import java.util.ArrayList;

public interface ApprovedCustomerService {

    public void saveCustomer(ApprovedCustomerDTO dto);

    public ArrayList<ApprovedCustomerDTO> getAllCustomer();
}
