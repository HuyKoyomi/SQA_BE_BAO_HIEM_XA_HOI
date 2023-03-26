package com.example.sqa_be_code_2023.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
import org.springframework.stereotype.Component;
import io.swagger.annotations.ApiModelProperty;


import java.util.Date;
import java.util.List;

@Component
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "khachhang")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int id;

    @ApiModelProperty("Mã số bảo hiểm xã hội")
    @Column(name = "masoBHXH", nullable = false)
    private String insuranceNumber;

    @ApiModelProperty("Căn cước công dân")
    @Column(name = "cccd", nullable = false)
    private String citizenID;

    @ApiModelProperty("Họ tên")
    @Column(name = "hoten", nullable = false)
    private String fullName;

    @ApiModelProperty("Ngày sinh")
    @Column(name = "dob", nullable = false)
    private Date dob;

    @ApiModelProperty("Thời điểm bắt đầu")
    @Column(name = "timebatdau", nullable = false)
    private Date timeToStart;

    @ApiModelProperty("Tổng thời gian tham gia")
    @Column(name = "tongtg")
    private int totalTime;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    // khi thao tác đối với thằng client cha bên này, thì những thằng con sẽ tự động cập nhật theo. Nếu xóa thằng cha, ban ghi nào có chưa tk con sẽ tự động biến mất
    @JsonIgnore // không hiển thị thuộc tính trong câu select
    @Fetch(FetchMode.JOIN)
    private List<InsurancePremiums> insurancePremiumsList;
}
