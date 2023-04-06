package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.dto.ClientDto;
import com.example.sqa_be_code_2023.model.dto.ReportDto;
import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.model.entity.InsurancePremiums;
import com.example.sqa_be_code_2023.service.InsurancePremiumsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class InsurancePremiumsController {

    @Autowired
    private InsurancePremiumsService service;

    @PostMapping("/insurancePremiums")
    public InsurancePremiums addClient(@RequestBody InsurancePremiums object) {
        return service.addInsurancePremiums(object);
    }

    @PostMapping("/insurancePremiumsMany")
    public List<InsurancePremiums> addClient(@RequestBody List<InsurancePremiums> object) {
        return service.addInsurancePremiumsMany(object);
    }

    @GetMapping("/insurancePremiums")
    public List<InsurancePremiums> getAllClient() {
        return service.getAllInsurancePremiums();
    }

    @GetMapping("/insurancePremiums/{id}")
    public InsurancePremiums getByIdClient(@PathVariable int id) {
        return service.getByIdClient(id);
    }

    @DeleteMapping("/insurancePremiums/{id}")
    public String deleteByIdInsurancePremiums(@PathVariable int id) {
        return service.deleteByIdInsurancePremiums(id);
    }

    @PutMapping("/insurancePremiums-client/{id}")
    public InsurancePremiums updateInsurancePremiumsClient(@PathVariable int id, @RequestBody Client client) {
        return service.updateInsurancePremiumsClient(id, client);
    }

    @GetMapping("/getInsurancePremiumsByClientId/{clientId}")
    public List<InsurancePremiums> getInsurancePremiumsByClientId(@PathVariable Integer clientId) {
        System.out.println("Call API");
        return service.getInsurancePremiumsByClientId(clientId);
    }

    @GetMapping("/getAllInsurancePremiumsByUnit")
    public List<ClientDto> getAllInsurancePremiumsByUnit(@RequestParam(value = "province", required = false) String province, @RequestParam(value = "district", required = false) String district, @RequestParam(value = "wards", required = false) String wards, @RequestParam(value = "unitId", required = false) Integer unitId) {
        return service.getAllInsurancePremiumsByUnit(province, district, wards, unitId);
    }

    @PostMapping("/getReportByUnitOrArea")
    public List<ReportDto> getReportByUnitOrArea(@RequestBody ReportDto reportDto) {
        return service.getReportByUnitOrArea(reportDto.getProvince(), reportDto.getDistrict(), reportDto.getWards(),
                reportDto.getUnitId(), reportDto.getBegin(), reportDto.getEnd());
    }
}
