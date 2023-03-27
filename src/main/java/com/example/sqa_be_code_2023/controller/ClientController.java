package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.dto.BaseResponse;
import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping("/clients")
    public List<Client> addClients(@RequestBody List<Client> client) {
        return service.addClients(client);
    }

    //    @GetMapping("/client")
//    public List<Client> getAllClient() {
//        return service.getAllCLient();
//    }
    @GetMapping("/client")
    public ResponseEntity<BaseResponse<List<Client>>> getAllClient() {
        List<Client> clientList = service.getAllCLient();
        BaseResponse<List<Client>> response = new BaseResponse<>();
        response.setData(clientList);
        response.setCode(HttpStatus.OK.value());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @DeleteMapping("/client/{id}")
    public String deleteByIdClient(@PathVariable int id) {
        return service.deleteByIdClient(id);
    }
}
