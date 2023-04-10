package com.example.sqa_be_code_2023.service;

import com.example.sqa_be_code_2023.model.dto.ClientDto;
import com.example.sqa_be_code_2023.model.dto.ReportDto;
import com.example.sqa_be_code_2023.model.entity.Client;
import com.example.sqa_be_code_2023.model.entity.InsurancePremiums;
import com.example.sqa_be_code_2023.model.entity.Unit;
import com.example.sqa_be_code_2023.respository.InsurancePremiumsResponsitory;
import com.example.sqa_be_code_2023.respository.UnitResponsitory;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Log4j2
public class InsurancePremiumsService {
    @Autowired
    private InsurancePremiumsResponsitory responsitory;
    @Autowired
    private UnitResponsitory unitResponsitory;

    public InsurancePremiums addInsurancePremiums(InsurancePremiums insurancePremiums) {
        return responsitory.save(insurancePremiums);
    }

    public List<InsurancePremiums> addInsurancePremiumsMany(List<InsurancePremiums> insurancePremiums) {
        return responsitory.saveAll(insurancePremiums);
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

    public List<InsurancePremiums> getInsurancePremiumsByClientId(Integer id) {
        return responsitory.getInsurancePremiumsByClientId(id);
    }

    public List<ClientDto> getAllInsurancePremiumsByUnit(String province, String district, String wards, Integer unitId) {
        return responsitory.getAllInsurancePremiumsByUnit(province, district, wards, unitId);
    }

    public List<ReportDto> getReportByUnitOrArea(String province, String district, String wards, Integer unitId, Date beginTime, Date endTime) {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        try {
            beginTime = format.parse(beginTime + "");
            endTime = format.parse(endTime + "");
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println(beginTime + "-"+ endTime);
        List<ReportDto> reportDtoList = responsitory.getReportByUnitOrArea(province, district, wards, unitId,  beginTime, endTime);
        for (ReportDto i : reportDtoList) {
            Long res =   Double.valueOf(i.getSalary() * i.getTotal() / 100).longValue();
            i.setTotalInsurance(res);
//            if()
//            Optional<Unit> tenDV = unitResponsitory.findById(unitId);
        }

        return reportDtoList;

    }
}
