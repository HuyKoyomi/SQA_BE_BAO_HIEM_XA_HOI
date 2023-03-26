package com.example.sqa_be_code_2023.model.mapper;

import com.example.sqa_be_code_2023.model.entity.User;
import com.example.sqa_be_code_2023.model.dto.UserDto;
import org.jetbrains.annotations.NotNull;

public class UserMapper {
    public static @NotNull UserDto toUserDto(User user) {
        UserDto userDto = new UserDto();

        userDto.setId(user.getId());
        userDto.setUsername(user.getUsername());
        userDto.setPassword(user.getPassword());
        userDto.setPosition(user.getPosition());
        userDto.setFullName(user.getFullName());
        userDto.setAddress(user.getAddress());
        userDto.setPhoneNumber(user.getPhoneNumber());
        userDto.setDob(user.getDob());
        userDto.setEmail(user.getEmail());
        userDto.setUnit(user.getUnit());

        return userDto;
    }
}
