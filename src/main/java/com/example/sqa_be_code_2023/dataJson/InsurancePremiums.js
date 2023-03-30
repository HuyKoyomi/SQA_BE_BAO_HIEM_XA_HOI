// đóng BHXH-BB tại đơn vị - đóng lần lượt các tháng
const  data1 = [
  {
    "begin": "2022-01-01",
    "end": "2022-02-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-02-01",
    "end": "2022-03-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-03-01",
    "end": "2022-04-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-04-01",
    "end": "2022-05-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-05-01",
    "end": "2022-06-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-06-01",
    "end": "2022-07-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-07-01",
    "end": "2022-08-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-08-01",
    "end": "2022-09-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-09-01",
    "end": "2022-10-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-10-01",
    "end": "2022-11-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-11-01",
    "end": "2022-12-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  }
]

// Đóng BHXHBB -cho người nước ngoài
const data2 =  [
  {
    "begin": "2022-01-01",
    "end": "2022-02-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-02-01",
    "end": "2022-03-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-03-01",
    "end": "2022-04-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-04-01",
    "end": "2022-05-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-05-01",
    "end": "2022-06-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-06-01",
    "end": "2022-07-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-07-01",
    "end": "2022-08-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-08-01",
    "end": "2022-09-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-09-01",
    "end": "2022-10-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-10-01",
    "end": "2022-11-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-11-01",
    "end": "2022-12-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  }
];

// Đóng BHXH - TN tại địa phương
const data3 = [
  {
    "begin": "2022-01-01",
    "end": "2022-02-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-02-01",
    "end": "2022-03-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-03-01",
    "end": "2022-04-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-04-01",
    "end": "2022-05-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-05-01",
    "end": "2022-06-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-06-01",
    "end": "2022-07-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-07-01",
    "end": "2022-08-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-08-01",
    "end": "2022-09-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-09-01",
    "end": "2022-10-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-10-01",
    "end": "2022-11-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-11-01",
    "end": "2022-12-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  }
]

//
const dataAll = [
  {
    "begin": "2022-01-01",
    "end": "2022-02-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-02-01",
    "end": "2022-03-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-03-01",
    "end": "2022-04-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-04-01",
    "end": "2022-05-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-05-01",
    "end": "2022-06-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-06-01",
    "end": "2022-07-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-07-01",
    "end": "2022-08-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-08-01",
    "end": "2022-09-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-09-01",
    "end": "2022-10-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-10-01",
    "end": "2022-11-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-11-01",
    "end": "2022-12-01",
    "salary": 6000000,
    "position": "Kỹ Sư Lập Trình",
    "expense": 1000,
    "client": {
      "id": 1,
      "insuranceNumber": "0118000001",
      "citizenID": "001099000123 ",
      "fullName": "Nguyễn Hiền Nhi",
      "dob": "1997-10-17T00:00:00.000+00:00",
      "timeToStart": "2022-03-01T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 1,
      "unitName": "Công ty TNHH Phần mềm FPT"
    },
    "insuranceType": {
      "id": 1,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Việt Nam",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 2.0,
      "quybhyt": 4.5,
      "total": 32.0,
      "user": {
        "id": 1,
        "username": "huylm6",
        "password": "huylm6",
        "position": "Nhân Viên BHXH",
        "fullName": "Lý Mạnh Huy",
        "address": "164 P. Lê Lợi, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963681775",
        "email": "huylm6@gmail.com",
        "dob": "2001-04-07T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 1,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_phuc_xa"
    }
  },
  {
    "begin": "2022-01-01",
    "end": "2022-02-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-02-01",
    "end": "2022-03-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-03-01",
    "end": "2022-04-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-04-01",
    "end": "2022-05-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-05-01",
    "end": "2022-06-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-06-01",
    "end": "2022-07-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-07-01",
    "end": "2022-08-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-08-01",
    "end": "2022-09-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-09-01",
    "end": "2022-10-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-10-01",
    "end": "2022-11-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-11-01",
    "end": "2022-12-01",
    "salary": 4000000,
    "position": "Kỹ Sư Kiểm Thử Phần Mềm",
    "expense": 1000,
    "client": {
      "id": 2,
      "insuranceNumber": "0129722530",
      "citizenID": "001099000124",
      "fullName": "Trần Mỹ Tâm",
      "dob": "2001-09-16T00:00:00.000+00:00",
      "timeToStart": "2020-04-02T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 2,
      "unitName": "Công ty công nghệ thông tin CMC"
    },
    "insuranceType": {
      "id": 2,
      "insuranceName": "Bảo Hiểm Xã Hội Bắt Buộc - Nước Ngoài",
      "usingTime": "2015-01-01",
      "quyhttt": 22.0,
      "quyodts": 3.0,
      "quytnldbnn": 0.5,
      "quybhtn": 0.0,
      "quybhyt": 4.5,
      "total": 30.0,
      "user": {
        "id": 2,
        "username": "vietnb7",
        "password": "vietnb7",
        "position": "Giám Đốc BHXH",
        "fullName": "Nguyễn Bá Việt",
        "address": "Ng. 11 P. Nguyễn Quý Đức, Thanh Xuân Bắc, Thanh Xuân, Hà Nội",
        "phoneNumber": "0963775146",
        "email": "vietnb7@gmail.com",
        "dob": "1996-01-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 2,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_truc_bach"
    }
  },
  {
    "begin": "2022-01-01",
    "end": "2022-02-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-02-01",
    "end": "2022-03-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-03-01",
    "end": "2022-04-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-04-01",
    "end": "2022-05-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-05-01",
    "end": "2022-06-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-06-01",
    "end": "2022-07-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-07-01",
    "end": "2022-08-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-08-01",
    "end": "2022-09-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-09-01",
    "end": "2022-10-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-10-01",
    "end": "2022-11-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  },
  {
    "begin": "2022-11-01",
    "end": "2022-12-01",
    "salary": 5000000,
    "position": "Kỹ Sư Phân Tích Nghiệp Vụ",
    "expense": 1000,
    "client": {
      "id": 3,
      "insuranceNumber": "0118000002",
      "citizenID": "001099000125",
      "fullName": "Lê Bích Thảo",
      "dob": "1996-08-15T00:00:00.000+00:00",
      "timeToStart": "2019-05-03T00:00:00.000+00:00",
      "totalTime": 0
    },
    "unit": {
      "id": 3,
      "unitName": "Công ty về công nghệ thông tin Viettel"
    },
    "insuranceType": {
      "id": 3,
      "insuranceName": "Bảo Hiểm Xã Hội Tự Nguyện",
      "usingTime": "2015-01-01",
      "quyhttt": 0.0,
      "quyodts": 0.0,
      "quytnldbnn": 0.0,
      "quybhtn": 0.0,
      "quybhyt": 0.0,
      "total": 22.0,
      "user": {
        "id": 3,
        "username": "anhnht8",
        "password": "anhnht8",
        "position": "Nhân Viên BHXH",
        "fullName": "Nguyễn Hoàng Tuấn Anh",
        "address": "15 P. Cầu Đơ, Hà Cầu, Hà Đông, Hà Nội",
        "phoneNumber": "0963712346",
        "email": "anhnht8@gmail.com",
        "dob": "2001-06-01T00:00:00.000+00:00",
        "unit": "bhxh"
      }
    },
    "area": {
      "id": 3,
      "province": "thanh_pho_ha_noi",
      "district": "quan_ba_dinh",
      "wards": "phuong_vinh_phuc"
    }
  }
]