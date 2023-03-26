package com.example.sqa_be_code_2023.model.entity;


import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "khuvuc")
public class Area {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @ApiModelProperty("Tỉnh / thành phố")
    @Column(name = "thanhPho", nullable = false)
    private String province;

    @ApiModelProperty("Quận / huyện")
    @Column(name = "quan", nullable = false)
    private String district;

    @ApiModelProperty("Xã / Phường")
    @Column(name = "phuong", nullable = false)
    private String wards;

    @OneToOne(mappedBy = "area")
    private Brank brank;
}
