package lk.ijse.spring.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Entity
public class Customer {
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
