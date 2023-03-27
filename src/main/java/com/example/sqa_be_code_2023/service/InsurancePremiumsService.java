package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.model.entity.InsurancePremiums;
import com.example.sqa_be_code_2023.respository.InsurancePremiumsResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InsurancePremiumsService {
    @Autowired
    private InsurancePremiumsResponsitory responsitory;

    public InsurancePremiums addInsurancePremiums(InsurancePremiums insurancePremiums) {
        return responsitory.save(insurancePremiums);
    }

    public List<InsurancePremiums> getAllInsurancePremiums() {
        return responsitory.findAll();
    }

    public InsurancePremiums getByIdClient(int id) {
        return responsitory.findById(id).orElse(null);
    }

    //    update client vào bảng insurancePremiums
    public InsurancePremiums updateInsurancePremiumsClient(int id, Client client) {
        InsurancePremiums insurancePremiums = responsitory.findById(id).orElse(null);
        if (insurancePremiums != null) {
            insurancePremiums.setClient(client);
            return responsitory.save(insurancePremiums);
        }
        return null;
    }

    public String deleteByIdInsurancePremiums(int id) {
        InsurancePremiums insurancePremiums = responsitory.findById(id).orElse(null);
        if (insurancePremiums != null) {
            responsitory.delete(insurancePremiums);
            return "Xóa thành công";
        }
        return "Lỗi không tìm thấy đối tượng";
    }

    public List<Client> getInsurancePremiumsByClientId(int id) {
        return responsitory.getInsurancePremiumsByClientId(id);
    }
}
