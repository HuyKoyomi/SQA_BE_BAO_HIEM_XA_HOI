package com.example.sqa_be_code_2023.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.annotations.ApiModelProperty;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "dongbhxh")
public class InsurancePremiums {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @ApiModelProperty("bắt đầu")
    @Column(name = "batdau", nullable = false)
    private Date begin;

    @ApiModelProperty("kết thúc")
    @Column(name = "ketthuc", nullable = false)
    private Date end;

    @ApiModelProperty("Lương")
    @Column(name = "luong", nullable = false)
    private Long salary;

    @ApiModelProperty("Chức vụ")
    @Column(name = "chucvu", nullable = false)
    private String position;

    @ApiModelProperty("Chi phí")
    @Column(name = "chiphi")
    private int expense;

    @ManyToOne
    @JoinColumn(name = "khach_hangid", referencedColumnName = "id")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
//    @JsonIgnore
    private Client client;

    @ManyToOne
    @JoinColumn(name = "don_viid")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
//    @JsonIgnore
    private Unit unit;

    @OneToOne
    @JoinColumn(name = "khu_vucid", referencedColumnName = "id")
//    @JsonIgnore
    private Area area;

    @ManyToOne
    @JoinColumn(name = "loaibhxhid")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
//    @JsonIgnore
    private InsuranceType insuranceType;
}
