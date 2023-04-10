package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.entity.InsurancePremiums;
import com.example.sqa_be_code_2023.model.entity.InsuranceType;
import com.example.sqa_be_code_2023.model.entity.Unit;
import com.example.sqa_be_code_2023.respository.InsuranceTypeResponsitory;
import com.example.sqa_be_code_2023.respository.UnitResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InsuranceTypeService {
    @Autowired
    InsuranceTypeResponsitory responsitory;

    public List<InsuranceType> addInsuranceTypes (List<InsuranceType> insuranceTypeList){
        return responsitory.saveAll(insuranceTypeList);
    }
    public InsuranceType getInsuranceTypesById (int id){
         Optional<InsuranceType> op = responsitory.findById(id);
         return op.get();
    }
    public List<InsuranceType> getAllInsuranceType (){
        return responsitory.findAll();
    }

    public Boolean updateInsuranceTypeById (int id, InsuranceType iy){
        InsuranceType insuranceType = responsitory.findById(id).orElse(null);
        if (insuranceType != null) {
            iy.setUser(insuranceType.getUser());
            iy.setInsuranceName(insuranceType.getInsuranceName());
            responsitory.save(iy);
            System.out.println(iy.getTotal());
            return true;
        }
        return false;
    }

}
