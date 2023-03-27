package com.example.sqa_be_code_2023.model.dto;

import com.example.sqa_be_code_2023.model.entity.Client;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Objects;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BaseResponse<T> {
    private T data ;

    private int code;

    private String message;

}
