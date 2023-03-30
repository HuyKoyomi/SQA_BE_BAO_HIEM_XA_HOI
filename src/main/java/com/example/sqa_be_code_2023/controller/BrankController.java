package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.entity.Brank;
import com.example.sqa_be_code_2023.service.BrankService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class BrankController {
    @Autowired
    private BrankService service;

    @PostMapping("/branks")
    public List<Brank> addUnits(@RequestBody List<Brank> brankList) {
        return service.addBranks(brankList);
    }

    @GetMapping("/brank")
    public List<Brank> getAllUnit() {
        return service.getAllBrank();
    }
}
