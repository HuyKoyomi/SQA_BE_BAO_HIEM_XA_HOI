package com.example.sqa_be_code_2023.respository;

import com.example.sqa_be_code_2023.model.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserResponsitory extends JpaRepository<User, Integer> {
    @Query(value = "SELECT u FROM User  u where u.username  = :username and u.password =:password ")
    User getUserByUsernameAndPassword(String username, String password);
}
