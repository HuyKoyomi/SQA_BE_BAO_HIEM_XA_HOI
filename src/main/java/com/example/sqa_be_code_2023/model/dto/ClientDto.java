package com.example.sqa_be_code_2023.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ClientDto {
    private int id;
    private String insuranceNumber;
    private String citizenID;
    private String fullName;
    private Date dob;
    private Date timeToStart;
    private int totalTime;
}
