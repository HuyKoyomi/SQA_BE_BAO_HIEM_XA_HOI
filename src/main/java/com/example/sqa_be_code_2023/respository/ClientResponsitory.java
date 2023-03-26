package com.example.sqa_be_code_2023.respository;

import com.example.sqa_be_code_2023.model.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientResponsitory extends JpaRepository<Client, Integer> {

}
