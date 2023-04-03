package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.entity.InsuranceType;
import com.example.sqa_be_code_2023.model.entity.Unit;
import com.example.sqa_be_code_2023.service.InsuranceTypeService;
import com.example.sqa_be_code_2023.service.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class InsuranceTypeController {
    @Autowired
    private InsuranceTypeService service;

    @PostMapping("/insuranceTypes")
    public List<InsuranceType> addInsuranceTypes(@RequestBody List<InsuranceType> insuranceTypeList) {
        return service.addInsuranceTypes(insuranceTypeList);
    }

    @GetMapping("/insuranceType")
    public List<InsuranceType> getAllInsuranceType() {
        return service.getAllInsuranceType();
    }

    @PutMapping("/insuranceType/{id}")
    public Boolean updateInsuranceTypeById (@PathVariable int id, @RequestBody InsuranceType iy){
        return service.updateInsuranceTypeById(id,iy);
    }
}
