import React from "react";
import ImageUploadInput from "../../../components/Inputs/ImageUploadInput";

const SignUpStep1Page = () => {
  return (
    <div className="step_wrapper">
      <h2 className="step_h2"> 병원 기본 정보 등록</h2>

      <div className="step_input_wrapper">
        <h3 className="step_h3">*병원명</h3>
        <input className="step_input" />
      </div>

      <div className="step_top_input_wrapper">
        <h3 className="step_h3_top">병원 소개</h3>
        <textarea></textarea>
      </div>

      <div className="step_input_wrapper">
        <h3 className="step_h3">*전화</h3>
        <input type="number" /> - <input type="number" /> -{" "}
        <input type="number" />
      </div>

      <div className="step_top_input_wrapper">
        <h3 className="step_h3_top">*소재지</h3>

        <div className="step_input_column_wrapper">
          <div>
            <button className="btn_search">검색하기</button> <input />
          </div>
          <input />
        </div>
      </div>

      <div className="step_input_wrapper">
        <h3 className="step_h3">태그</h3>
        <input />
      </div>

      <div className="step_top_input_wrapper ">
        <h3 className="step_h3_top step_h3_img">병원 로고</h3>
        <ImageUploadInput />
      </div>

      <div className="step_top_input_wrapper ">
        <h3 className="step_h3_top step_h3_img">병원 사진</h3>
        <ImageUploadInput />
      </div>
    </div>
  );
};

export default SignUpStep1Page;
