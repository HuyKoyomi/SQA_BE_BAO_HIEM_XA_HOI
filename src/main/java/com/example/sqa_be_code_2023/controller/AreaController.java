package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.entity.Area;
import com.example.sqa_be_code_2023.model.entity.Unit;
import com.example.sqa_be_code_2023.service.AreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@CrossOrigin("https://localhost:3000/")
public class AreaController {
    @Autowired
    private AreaService service;

    @PostMapping("/areas")
    public List<Area> addAreas(@RequestBody List<Area> areaList) {
        return service.addAreas(areaList);
    }

    @GetMapping("/area")
    public List<Area> getAllArea() {
        return service.getAllArea();
    }

}
