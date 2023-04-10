package com.example.sqa_be_code_2023.respository;

import com.example.sqa_be_code_2023.model.dto.ClientDto;
import com.example.sqa_be_code_2023.model.dto.ReportDto;
import com.example.sqa_be_code_2023.model.entity.InsurancePremiums;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface InsurancePremiumsResponsitory extends JpaRepository<InsurancePremiums, Integer> {
    //    @Query(value = "SELECT ip FROM InsurancePremiums ip  where ip.id = :idClient")
    @Query(value = "SELECT ip FROM InsurancePremiums ip  where ip.client.id = :idClient")
    List<InsurancePremiums> getInsurancePremiumsByClientId(Integer idClient);

    @Query(value = "SELECT new com.example.sqa_be_code_2023.model.dto.ClientDto(ip.id, c.fullName, ip.begin, ip.end, count(c.id), c.id )   " +
            "from InsurancePremiums ip " +
            "join ip.client c " +
            "join ip.area a " +
            "join ip.unit u " +
            "where (:province is null or a.province = :province) " +
            "and (:district is null or a.district = :district) " +
            "and (:wards is null or a.wards = :wards) " +
            "and (:unitId is null or u.id  = :unitId)"
    )
    List<ClientDto> getAllInsurancePremiumsByUnit(String province, String district, String wards, Integer unitId);

    //    @Query(value = "SELECT COALESCE(sum(ip.salary * it.total * PERIOD_DIFF(DATE_FORMAT(ip.end,'%Y%m'),DATE_FORMAT(ip.begin,'%Y%m') ))) " +
    @Query(value = "SELECT new com.example.sqa_be_code_2023.model.dto.ReportDto (  ip.begin,ip.end, ip.salary,it.total, it.id, u.unitName,a.province, a.district, a.wards)  " +
            "FROM InsurancePremiums ip " +
            "join ip.area a " +
            "left join ip.unit u " +
            "join ip.insuranceType it " +
            "where (:province is null or a.province = :province) " +
            "and (:district is null or a.district = :district) " +
            "and (:wards is null or a.wards = :wards) " +
            "and (:unitId is null or u.id = :unitId) " +
            "and ip.begin >= :beginTime " +
            "and ip.end <= :endTime "
    )
    List<ReportDto> getReportByUnitOrArea(String province, String district, String wards, Integer unitId, Date beginTime, Date endTime);
//    @Query(value = "select IFNULL(sum(D.luong*L.tong* PERIOD_DIFF(DATE_FORMAT(D.ketthuc, '%Y%m'), D
//    ATE_FORMAT(D.batdau, '%Y%m')))/100,0) as Tong_Thu\n" +
//            "    from dongbhxh D, loaibhxh L, khuvuc KV\n" +
//            "    where L.id = D.loaiBHXHid\n" +
//            "    and D.khu_vucid = KV.id\n" +
//            "    and KV.id = 1\n" +
//            "    and L.id =1", nativeQuery = true)
//    Long getReportByUnitOrArea();


}
