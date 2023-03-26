package com.example.sqa_be_code_2023.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private int id;
    private String username;
    private String password;
    private String position;
    private String fullName;
    private String address;
    private String phoneNumber;
    private String email;
    private Date dob;
    private String unit;

}
