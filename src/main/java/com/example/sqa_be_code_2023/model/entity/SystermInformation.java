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
@Table(name = "thongtinhethong")
public class SystermInformation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @ApiModelProperty("Số điện thoại")
    @Column(name = "sdt", nullable = false)
    private String phoneNumber;

    @ApiModelProperty("Địa chỉ")
    @Column(name = "diachi", nullable = false)
    private String address;

    @ApiModelProperty("Cơ quan chủ quản")
    @Column(name = "coquanchuquan", nullable = false)
    private String agency;

    @ApiModelProperty("Giấy phép số")
    @Column(name = "giayphepso", nullable = false)
    private String licenseNumber;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_nhan_vienbhxh", referencedColumnName = "id")
    private User user;

}
