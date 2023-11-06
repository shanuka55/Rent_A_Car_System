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
public class Driver {
    @Id
    private int id;
    private String name;
    private String mail;
    private String pswd;
    private String contact;
    private String address;
    private int age;
    private String nic;
    private String licence;
}
