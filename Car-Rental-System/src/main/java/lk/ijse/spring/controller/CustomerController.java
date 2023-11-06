package lk.ijse.spring.controller;

import lk.ijse.spring.dto.CustomerDTO;
import lk.ijse.spring.service.CustomerService;
import lk.ijse.spring.util.ResponseUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@RestController //back end eky front end ekay wena wenama use kranna
@CrossOrigin
@RequestMapping("/customer") //map the HTTP method
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping
    public ResponseUtil saveCustomer(@RequestBody CustomerDTO dto){
        customerService.saveCustomer(dto);
        System.out.println(dto.getName());
        return new ResponseUtil("200",dto.getId()+"added",null);
    }
    @GetMapping
    public ResponseUtil getAllCustomers() {
        ArrayList<CustomerDTO> allCustomers = customerService.getAllCustomer();
        return new ResponseUtil("200","Success",allCustomers);
    }

}
