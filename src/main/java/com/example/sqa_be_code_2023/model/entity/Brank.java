package com.example.sqa_be_code_2023.model.entity;

import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "chinhanh")
public class Brank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @ApiModelProperty("Tên chi nhánh")
    @Column(name = "tenChiNhanh", nullable = false)
    private String brankName;

    @OneToOne
    @JoinColumn(name = "id_don_vi", referencedColumnName = "id")
    private Unit unit;

    @OneToOne
    @JoinColumn(name = "id_khu_vuc", referencedColumnName = "id")
    private Area area;

}
