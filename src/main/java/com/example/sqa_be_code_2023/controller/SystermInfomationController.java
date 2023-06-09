package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.entity.SystermInformation;
import com.example.sqa_be_code_2023.service.SystermInfomationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class SystermInfomationController {
    @Autowired
    private SystermInfomationService systermInfomationService;

    @PostMapping("/systermInfomation")
    public SystermInformation createOne(@RequestBody SystermInformation systermInformation) {
        return systermInfomationService.addSystermInformation(systermInformation);
    }

    @PostMapping("/systermInfomations")
    public List<SystermInformation> createMany(@RequestBody List<SystermInformation> systermInformation) {
        return systermInfomationService.addSystermInformations(systermInformation);
    }

    @GetMapping("/systermInfomation")
    public List<SystermInformation> getALl() {
        return systermInfomationService.getAllSystermInformation();
    }
}
