package com.example.sqa_be_code_2023.model.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InsuranceTypeDto {
    @ApiModelProperty("ID của loại bảo hiểm")
    private int id;

    private long total;

    private Date begin;
    private Date end;

}
