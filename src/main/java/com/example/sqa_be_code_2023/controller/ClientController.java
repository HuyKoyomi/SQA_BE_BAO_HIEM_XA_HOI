package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
//@CrossOrigin("https://localhost:3000/")
public class ClientController {

    @Autowired
    private ClientService service;

    @PostMapping("/client")
    public Client addClient(@RequestBody Client client) {
        return service.addClient(client);
    }

    @GetMapping("/client")
    public List<Client> getAllClient() {
        return service.getAllCLient();
    }

    @DeleteMapping("/client/{id}")
    public String deleteByIdClient(@PathVariable int id) {
        return service.deleteByIdClient(id);
    }
}
