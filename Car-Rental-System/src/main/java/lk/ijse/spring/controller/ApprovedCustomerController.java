package lk.ijse.spring.controller;

import lk.ijse.spring.dto.ApprovedCustomerDTO;
import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.ApprovedCustomerService;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@RestController
@CrossOrigin
@RequestMapping("/approvedCustomer")
public class ApprovedCustomerController {

    @Autowired
    private ApprovedCustomerService customerService;

    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody ApprovedCustomerDTO dto){
        customerService.saveCustomer(dto);
        return new ResponseUtil("200",dto.getId()+"added",null);
    }
    @GetMapping
    public ResponseUtil getAllCustomers() {
        ArrayList<ApprovedCustomerDTO> allCustomers = customerService.getAllCustomer();
        return new ResponseUtil("200","Success",allCustomers);
    }
}
