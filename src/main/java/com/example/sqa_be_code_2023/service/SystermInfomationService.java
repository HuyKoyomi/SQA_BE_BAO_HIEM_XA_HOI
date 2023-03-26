package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.entity.SystermInformation;
import com.example.sqa_be_code_2023.respository.SystermInformationResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SystermInfomationService {
    @Autowired
    private SystermInformationResponsitory systermInformationResponsitory;

    public SystermInformation addSystermInformation(SystermInformation systermInformation) {
        return systermInformationResponsitory.save(systermInformation);
    }

    public List<SystermInformation> getAllSystermInformation() {
        return systermInformationResponsitory.findAll();
    }
}
