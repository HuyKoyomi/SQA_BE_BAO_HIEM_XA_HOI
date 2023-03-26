package com.example.sqa_be_code_2023.controller;

import com.example.sqa_be_code_2023.model.entity.User;
import com.example.sqa_be_code_2023.model.dto.UserDto;
import com.example.sqa_be_code_2023.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("https://localhost:3000/")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/user")
    public List<UserDto> getAllUser() {
        return userService.getAllUser();
    }

    @PostMapping("/user")
    public User createOne(@RequestBody User user) {
        return userService.addUser(user);
    }

    @GetMapping("/user/{id}")
    public UserDto getUserById(@PathVariable("id") int id) {
        return userService.getById(id);
    }

    @DeleteMapping("/user/{id}")
    public String deleteUserById(@PathVariable("id") int id) {
        return userService.deleteById(id);
    }



}
