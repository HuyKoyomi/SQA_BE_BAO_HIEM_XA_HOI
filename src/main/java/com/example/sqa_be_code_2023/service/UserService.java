package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.entity.User;
import com.example.sqa_be_code_2023.model.dto.UserDto;
import com.example.sqa_be_code_2023.model.mapper.UserMapper;
import com.example.sqa_be_code_2023.respository.UserResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserResponsitory userResponsitory;

    public List<UserDto> getAllUser() {
        List<UserDto> result = new ArrayList<>();
        List<User> listUser = userResponsitory.findAll();
        for (User i : listUser) {
            result.add(UserMapper.toUserDto(i));
        }
        return result;
    }

    public User addUser(User user) {
        return userResponsitory.save(user);
    }

    public UserDto getById(int id) {
        Optional<User> user = userResponsitory.findById(id);
        return UserMapper.toUserDto(user.get());
    }

    public String deleteById(int id) {
        try {
            userResponsitory.deleteById(id);
            return "Xóa thành công bản ghi " + id + "!";
        } catch (Exception e) {
            return e.toString();
        }
    }
}
