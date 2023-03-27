package com.example.sqa_be_code_2023.respository;

import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.model.entity.InsurancePremiums;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InsurancePremiumsResponsitory extends JpaRepository<InsurancePremiums, Integer> {
    //    @Query(value = "SELECT ip FROM InsurancePremiums ip  where ip.id = :idClient")
    @Query(value = "SELECT ip FROM Client ip  where ip.id = :idClient")
    List<Client> getInsurancePremiumsByClientId(Integer idClient);

}
