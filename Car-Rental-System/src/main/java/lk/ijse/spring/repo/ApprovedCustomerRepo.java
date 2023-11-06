package lk.ijse.spring.repo;

import lk.ijse.spring.entity.ApprovedCustomer;
import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApprovedCustomerRepo extends JpaRepository<ApprovedCustomer,Integer> {
}
