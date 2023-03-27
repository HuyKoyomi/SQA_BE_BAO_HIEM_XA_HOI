package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.model.entity.Unit;
import com.example.sqa_be_code_2023.respository.UnitResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UnitService {
    @Autowired
    UnitResponsitory  responsitory;

    public List<Unit> addUnits (List<Unit> unitList){
        return responsitory.saveAll(unitList);
    }
    public List<Unit> getAllUnit (){
        return responsitory.findAll();
    }
}
