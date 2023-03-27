package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.entity.InsuranceType;
import com.example.sqa_be_code_2023.model.entity.Unit;
import com.example.sqa_be_code_2023.respository.InsuranceTypeResponsitory;
import com.example.sqa_be_code_2023.respository.UnitResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsuranceTypeService {
    @Autowired
    InsuranceTypeResponsitory responsitory;

    public List<InsuranceType> addInsuranceTypes (List<InsuranceType> insuranceTypeList){
        return responsitory.saveAll(insuranceTypeList);
    }
    public List<InsuranceType> getAllInsuranceType (){
        return responsitory.findAll();
    }
}
