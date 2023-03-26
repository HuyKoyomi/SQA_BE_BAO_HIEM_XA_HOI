package com.example.sqa_be_code_2023.model.dto;

import lombok.*;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InsurancePremiumsDto {
    private int id;
    private int areaId;
    private int unitId;
    private int clientId;
    private int insuranceType;
    private Date begin;
    private Date end;
    private int salary;
    private String position;
    private String expense;


}
