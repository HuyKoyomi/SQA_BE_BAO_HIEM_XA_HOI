package com.example.sqa_be_code_2023.model.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "donvi")
public class UnitDto {

    private int id;
    private String unitName;
}
