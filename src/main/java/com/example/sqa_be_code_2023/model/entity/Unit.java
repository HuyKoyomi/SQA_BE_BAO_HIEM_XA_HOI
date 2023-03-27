package com.example.sqa_be_code_2023.model.entity;

import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

@Component
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "donvi")
public class Unit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ApiModelProperty("Tên Đơn vị")
    @Column(name = "tenDV", nullable = false)
    private String unitName;

}
