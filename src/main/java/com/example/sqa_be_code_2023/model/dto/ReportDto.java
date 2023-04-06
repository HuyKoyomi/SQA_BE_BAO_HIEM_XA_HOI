package com.example.sqa_be_code_2023.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReportDto {
    private String month;
    private String unitName;
    private String areaName;
    private Long totalInsurance;
    private String province;
    private String district;
    private String wards;
    private Integer unitId;

    private Date begin;
    private Date end;
    private Long salary;
    private Double total;

    private Integer insuranceTypeId;

    public ReportDto(Date begin, Date end, Long salary, Double total, Integer insuranceTypeId) {
        this.begin = begin;
        this.end = end;
        this.salary = salary;
        this.total = total;
        this.insuranceTypeId = insuranceTypeId;
    }
}
