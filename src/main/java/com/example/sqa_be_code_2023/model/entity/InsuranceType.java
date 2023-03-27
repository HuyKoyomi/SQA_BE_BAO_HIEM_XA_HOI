package com.example.sqa_be_code_2023.model.entity;

import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "loaibhxh")
public class InsuranceType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @ApiModelProperty("Tên loại bảo hiểm")
    @Column(name = "ten", nullable = false)
    private String insuranceName;

    @ApiModelProperty("Thời gian sử dụng")
    @Column(name = "thoigianapdung", nullable = false)
    private String usingTime;

    @Column(name = "quyhttt")
    private Double quyhttt;

    @Column(name = "quyodts")
    private Double quyodts;

    @Column(name = "quytnldbnn")
    private Double quytnldbnn;

    @Column(name = "quybhtn")
    private Double quybhtn;

    @Column(name = "quybhyt")
    private Double quybhyt;

    @Column(name = "tong")
    private Double total;

//    @ManyToOne
//    @JoinColumn(name = "id_nhan_vienbhxh",referencedColumnName = "id" )
//    private User users;
}
