package com.example.sqa_be_code_2023.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.stereotype.Component;
import lombok.*;

import java.util.Date;
import java.util.List;

@Component
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "nhanvienbhxh")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "chucvu", nullable = false)
    private String position;

    @Column(name = "hoten", nullable = false)
    private String fullName;

    @Column(name = "diachi", nullable = false)
    private String address;

    @Column(name = "sdt", nullable = false)
    private String phoneNumber;

    @Column(name = "email")
    private String email;

    @Column(name = "dob")
    private Date dob;

    @Column(name = "donvi", nullable = false)
    private String unit;

    @OneToOne(mappedBy = "user")
    private SystermInformation systermInformation;

//    @OneToMany(mappedBy = "user")
//    @JsonIgnore
//    @Fetch(FetchMode.JOIN)
//    private List<InsuranceType> insuranceType;

}
