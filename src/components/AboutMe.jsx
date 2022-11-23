import React from "react";
import MinhNgoc from "../img/Vương Minh Ngoc.jpg";
function AboutMe() {
  return (
    <div>
      <div className="container-about">
        <div>
          <div className="title-heading">SINH VIÊN THỰC HIỆN</div>
          <img
            className="image-about"
            src={MinhNgoc}
            alt="Vương Minh Ngọc avatar"
          />
        </div>

        <div className="container-desc__wrapper">
          <div className="container-desc">
            <p className="context">Họ và tên: Vương Minh Ngọc</p>
            <p className="context">MSSV: 46.01.104.124</p>
            <p className="context">Trường: Đại học Sư phạm TP.HCM</p>
            <p className="context">Lớp Học phần: 2211COMP1031-Công nghệ Web</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
