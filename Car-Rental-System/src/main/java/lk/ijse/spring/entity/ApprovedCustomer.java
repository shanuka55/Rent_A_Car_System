package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class ApprovedCustomer {

    @Id
    private int id;
    private String name;
    private String pswd;
    private String mail;
    private String address;
    private String contact;
    private String nic;
    private String licence;
}
