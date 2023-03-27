package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.entity.Brank;
import com.example.sqa_be_code_2023.respository.BrankResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BrankService {
    @Autowired
    BrankResponsitory responsitory;

    public List<Brank> addBranks (List<Brank> brankList){
        return responsitory.saveAll(brankList);
    }
    public List<Brank> getAllBrank (){
        return responsitory.findAll();
    }
}
