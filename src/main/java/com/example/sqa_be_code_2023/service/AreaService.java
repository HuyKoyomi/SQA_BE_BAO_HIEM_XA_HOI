package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.entity.Area;
import com.example.sqa_be_code_2023.respository.AreaResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AreaService {
    @Autowired
    AreaResponsitory responsitory;

    public List<Area> addAreas (List<Area> areaList){
        return responsitory.saveAll(areaList);
    }
    public List<Area> getAllArea (){
        return responsitory.findAll();
    }
}
