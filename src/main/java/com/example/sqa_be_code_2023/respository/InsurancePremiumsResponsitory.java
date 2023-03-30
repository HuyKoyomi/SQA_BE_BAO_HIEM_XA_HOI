package com.example.sqa_be_code_2023.respository;

import com.example.sqa_be_code_2023.model.dto.ClientDto;
import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.model.entity.InsurancePremiums;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

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
            "and (:unitId is null or u.id  = :unitId) "
    )

    List<ClientDto> getAllInsurancePremiumsByUnit(String province,String district,String wards, Integer unitId );

}
