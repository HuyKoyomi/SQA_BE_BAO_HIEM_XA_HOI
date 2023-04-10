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

    public ReportDto(Date begin, Date end, Long salary, Double total, Integer insuranceTypeId, String unitName, String province, String district, String wards) {
        this.begin = begin;
        this.end = end;
        this.salary = salary;
        this.total = total;
        this.insuranceTypeId = insuranceTypeId;
        this.unitName = unitName;
        this.province = province;
        this.district = district;
        this.wards = wards;
    }
}
