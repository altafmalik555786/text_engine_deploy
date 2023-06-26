import React from "react";
import style from "./style.module.scss";
import { Checkbox, Col, Form, Row } from "antd";
import { observer } from "mobx-react-lite";
import { CommonInput } from "@components/common-components/input";
import { CAMEL_ON_BLUR, LOWER_LIGHT } from "@utils/constants/props";

const IncomeTaxReturnPageTwo = observer(() => {
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
        <Row className={style.headerRow}>
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
            <Row className={style.rightHeaderRow} >
              <Col md={6} sm={6} xs={12}>
                <h1>2022</h1>
              </Col>
              <Col md={6} sm={6} xs={12}>
                <p>OMB No. 1545-0074</p>
              </Col>
              <Col md={12} sm={12} xs={24}>
                <p> IRS Use Only—Do not write or staple in this space </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <h1>This is Page Two</h1>
        <Row className={style.borderedBox}>
          <Form.Item name="termination_attributes">
            <Checkbox.Group>
              <Checkbox value="annualization">Annualization</Checkbox>
              <Checkbox value="bonuses">Bonuses</Checkbox>
              <Checkbox value="leaves">Leaves</Checkbox>
              <Checkbox value="loans">Loans</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        </Row>
        <Row className={style.borderedBox}>
          <Form.Item
            label={"Label"}
            name={"name"}
            className={style.formItemStyle}
            validateTrigger={[CAMEL_ON_BLUR]}
          >
            <CommonInput
              inputType={"text"}
              variant={LOWER_LIGHT}
              className={style.editITwo}
            />
          </Form.Item>
        </Row>
      </Form>
    </div>
  );
});

export default IncomeTaxReturnPageTwo;
