package com.example.sqa_be_code_2023.respository;

import com.example.sqa_be_code_2023.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserResponsitory extends JpaRepository<User,Integer> {

}
