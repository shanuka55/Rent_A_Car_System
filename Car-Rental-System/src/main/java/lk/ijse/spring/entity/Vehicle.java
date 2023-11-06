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
public class Vehicle {
    @Id
    private int id;
    private String brand;
    private String model;
    private String fuel;
    private String vehicleType;
    private String mileage;
    private int passengers;
    private String monthlyRate;
    private String dailyRate;
    private String freeMileage;
    private double extraPrice;
    private String registerNumber;
    private String lastServiceMileage;
    private String color;
    private String image;
}
