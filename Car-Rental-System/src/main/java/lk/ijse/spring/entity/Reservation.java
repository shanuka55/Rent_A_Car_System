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
public class Reservation {

    @Id
    private int id;
    private String vehicle;
    private String customerName;
    private String customerNIC;
    private String pickupDate;
    private String finishDate;
    private String finishLocation;
}
