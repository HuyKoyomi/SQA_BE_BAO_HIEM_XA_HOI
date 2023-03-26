package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.respository.ClientResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ClientService {
    @Autowired
    private ClientResponsitory responsitory;

    public Client addClient (Client client){
        return responsitory.save(client);
    }

    public List<Client> getAllCLient(){
        return responsitory.findAll();
    }

    public String deleteByIdClient(int id){
        try {
            responsitory.deleteById(id);
            return "Xoá thành công bản ghi có id: " + id;
        } catch (Exception e){
            return e.toString();
        }
    }

}
