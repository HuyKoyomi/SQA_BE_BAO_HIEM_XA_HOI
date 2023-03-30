package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.entity.Unit;
import com.example.sqa_be_code_2023.service.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class UnitController {
    @Autowired
    private UnitService service;

    @PostMapping("/units")
    public List<Unit> addUnits(@RequestBody List<Unit> unitList){
        return service.addUnits(unitList);
    }

    @GetMapping("/unit")
    public  List<Unit> getAllUnit(){
        return service.getAllUnit();
    }
}
