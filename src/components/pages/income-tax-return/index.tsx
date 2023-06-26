import React from "react";
import style from "./style.module.scss";
import { Checkbox, Col, Form, Row } from "antd";
import { observer } from "mobx-react-lite";
import { CommonInput } from "@components/common-components/input";
import { CAMEL_ON_BLUR, LOWER_LIGHT } from "@utils/constants/props";
import { Label } from "@components/common-components/label";
import classNames from "classnames";

const IncomeTaxReturn = observer(() => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("values", values);
  };

  return (
    <div className={style.incomeTaxReturnContainer}>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className={style.terminationForm}
        onValuesChange={(e) => console.log("onValuesChange", e)}
        scrollToFirstError
        id="termination-form"
      >
        <Row>
          <Col md={12} sm={12} xs={24}>
            <Row gutter={20}>
              <Col className={style.formHeading} span={8}>
                <p>Form</p>
                <h1> 1040 </h1>
              </Col>
              <Col className={style.formHeadingRight} span={16}>
                <p>Department of the Treasury—Internal Revenue Service</p>
                <h2> U.S. Individual Income Tax Return </h2>
              </Col>
            </Row>
          </Col>
          <Col md={12} sm={12} xs={24}>
            <Row className={style.rightHeaderRow}>
              <Col
                className={style.borderedBoxHeaderRight}
                md={6}
                sm={6}
                xs={12}
              >
                <h1>2022</h1>
              </Col>
              <Col
                className={style.borderedBoxHeaderRight}
                md={6}
                sm={6}
                xs={12}
              >
                <p>OMB No. 1545-0074</p>
              </Col>
              <Col
                className={style.borderedBoxHeaderRight}
                md={12}
                sm={12}
                xs={24}
              >
                <p> IRS Use Only—Do not write or staple in this space </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className={classNames(style.borderedBox, style.checkBoxContainer)}>
          <Label className={style.fillingStatus}>Filing Status</Label>
          <Form.Item name="termination_attributes">
            <Checkbox.Group>
              <Checkbox value="Single">Single</Checkbox>
              <Checkbox value="marriedFilingJointly">
                Married filing jointly
              </Checkbox>
              <Checkbox value="marriedFilingSeparately (MFS)">
                Married filing separately (MFS)
              </Checkbox>
              <Checkbox value="headOfHousehold(HOH)">
                Head of household (HOH)
              </Checkbox>
              <Checkbox value="qualifyingSurvivingSpouse(QSS)">
                Qualifying surviving spouse (QSS)
              </Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Row>
        <Row className={classNames(style.fieldContainer)}>
          <Col md={9} sm={9} xs={24}>
            <Form.Item
              label={"Your first name and middle initial"}
              name={"firstName"}
              className={style.formItemStyle}
              validateTrigger={[CAMEL_ON_BLUR]}
            >
              <CommonInput
                inputType={"text"}
                variant={LOWER_LIGHT}
                className={style.editITwo}
              />
            </Form.Item>
          </Col>
          <Col md={9} sm={9} xs={24}>
            <Form.Item
              label={"Your first name and middle initial"}
              name={"firstName"}
              className={style.formItemStyle}
              validateTrigger={[CAMEL_ON_BLUR]}
            >
              <CommonInput
                inputType={"text"}
                variant={LOWER_LIGHT}
                className={style.editITwo}
              />
            </Form.Item>
          </Col>
          <Col md={6} sm={6} xs={24}></Col>
        </Row>
      </Form>
    </div>
  );
});

export default IncomeTaxReturn;
