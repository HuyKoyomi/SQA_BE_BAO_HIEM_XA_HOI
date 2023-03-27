package com.example.sqa_be_code_2023.respository;

import com.example.sqa_be_code_2023.model.entity.Brank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BrankResponsitory  extends JpaRepository<Brank, Integer> {

}
