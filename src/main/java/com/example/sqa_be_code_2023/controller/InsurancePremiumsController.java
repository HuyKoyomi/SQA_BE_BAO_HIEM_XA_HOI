package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.model.entity.InsurancePremiums;
import com.example.sqa_be_code_2023.service.InsurancePremiumsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
//@CrossOrigin("https://localhost:3000/")
public class InsurancePremiumsController {

    @Autowired
    private InsurancePremiumsService service;

    @PostMapping("/insurancePremiums")
    public InsurancePremiums addClient(@RequestBody InsurancePremiums object) {
        return service.addInsurancePremiums(object);
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
    public String deleteByIdInsurancePremiums(@PathVariable int id){
        return service.deleteByIdInsurancePremiums(id);
    }

    @PutMapping("/insurancePremiums-client/{id}")
    public InsurancePremiums updateInsurancePremiumsClient(@PathVariable int id, @RequestBody Client client) {
        return service.updateInsurancePremiumsClient(id, client);
    }

    @GetMapping("/getInsurancePremiumsByClientId/{clientId}")
    public List<InsurancePremiums> getInsurancePremiumsByClientId(@PathVariable int clientId) {
        return service.getInsurancePremiumsByClientId(clientId);
    }
}
