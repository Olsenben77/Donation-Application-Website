import React, { Component, Fragment } from "react";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { Form, Button, Col, Row } from "react-bootstrap";
import Icon from "../images/original_trans.png";
import Lloyd from "../images/lloyd2.png";
import Owen from "../images/Owen.png";
import Ben from "../images/Ben.png";
import Jared from "../images/jared.png";
import Ari from "../images/Ari.png";
import Logo from "../images/blacklogo.png";
import "./style.css";
import "./Footer.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowMsg: false,
      isSending: false,
      show: false,
    };
  }

  handleModal() {
    this.setState({ show: !this.state.show });
  }

  onSubmit = (values, { resetForm }) => {
    const { isShowMsg, isSending } = this.state;
    this.setState({
      isSending: true,
    });
    axios
      .post("https://formcarry.com/s/pDNgV7JpwdC5", values, {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        if (response.data.status === "success") {
          this.setState({ isSending: false, isShowMsg: true });
          resetForm();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { isSending, isShowMsg } = this.state;

    return (
      <div>
        <section className="site-section" id="contact_form">
          <div className="page_inner_div">
            <h1 className="site-heading" style={{ fontWeight: "900" }}>
              {" "}
              Do you have a question?{" "}
            </h1>
            <h3 className="site-heading" style={{ fontWeight: "900" }}>
              Give us a review..
            </h3>
            <h5>Send us a message!</h5>

            <Formik
              className="site-form"
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validate={(values) => {
                let errors = {};
                if (!values.name) {
                  errors.name = "Name is required";
                }
                if (!values.subject) {
                  errors.name = "Subject is required";
                }
                if (!values.email) {
                  errors.email = "Email is required";
                }
                if (!values.message) {
                  errors.message = "Message is required";
                }
                return errors;
              }}
              validationSchema={Yup.object().shape({
                name: Yup.string().required(),
                email: Yup.string().email().required(),
                subject: Yup.string().required(),
                message: Yup.string().required(),
              })}
              onSubmit={this.onSubmit}
              render={({
                handleChange,
                handleBlur,
                values,
                errors,
                handleSubmit,
                touched,
              }) => (
                <Fragment>
                  <Form className="site-form" onSubmit={handleSubmit}>
                    {isShowMsg && (
                      <div class="alert alert-success">
                        Thank you for sending us a message!
                      </div>
                    )}
                    <Form.Row>
                      <Col>
                        <Form.Group
                          controlId="formGroupText"
                          className="site-form__form-group"
                        >
                          <Form.Label
                            htmlFor="input-name"
                            className="site-form__label"
                          >
                            Name:
                          </Form.Label>
                          <Form.Control
                            placeholder="name"
                            type="text"
                            name="name"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`site-form__input ${
                              errors.name && touched.name
                                ? "site-form__input-error"
                                : ""
                            }`}
                            id="input-name"
                            value={values.name}
                          />
                          {errors.name && touched.name && (
                            <div className="site-form__error">
                              {" "}
                              {errors.name}{" "}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group
                          controlId="formGroupEmail"
                          className="site-form__form-group"
                        >
                          <Form.Label
                            htmlFor="input-email"
                            className="site-form__label"
                          >
                            Email:
                          </Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="email"
                            name="email"
                            onChange={handleChange}
                            className={`site-form__input ${
                              errors.email && touched.email
                                ? "site-form__input-error"
                                : ""
                            }`}
                            id="input-email"
                            value={values.email}
                          />
                          {errors.email && touched.email && (
                            <div className="site-form__error">
                              {" "}
                              {errors.email}{" "}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <Form.Row>
                      <Col>
                        <Form.Group
                          controlId="formGroupText"
                          className="site-form__form-group"
                        >
                          <Form.Label
                            htmlFor="input-name"
                            className="site-form__label"
                          >
                            Subject:
                          </Form.Label>
                          <Form.Control
                            placeholder="subject"
                            type="text"
                            name="subject"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            className={`site-form__input ${
                              errors.subject && touched.subject
                                ? "site-form__input-error"
                                : ""
                            }`}
                            id="input-subject"
                            value={values.subject}
                          />
                          {errors.subject && touched.subject && (
                            <div className="site-form__error">
                              {" "}
                              {errors.subject}{" "}
                            </div>
                          )}
                        </Form.Group>
                      </Col>
                    </Form.Row>

                    <Form.Group
                      controlId="exampleForm.ControlTextarea1"
                      className="site-form__form-group"
                    >
                      <Form.Label>Message:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows="8"
                        name="message"
                        placeholder="Enter your message"
                        onChange={handleChange}
                        className={`site-form__textarea ${
                          errors.message && touched.message
                            ? "site-form__input-error"
                            : ""
                        }`}
                        id="input-message"
                        value={values.message}
                      />
                      {errors.message && touched.message && (
                        <div className="site-form__error">
                          {" "}
                          {errors.message}{" "}
                        </div>
                      )}
                    </Form.Group>

                    <Button
                      className="site-form__action"
                      type="submit"
                      className="btn btn-success btn-md btn-radius"
                      disabled={isSending}
                    >
                      {isSending ? (
                        <span className="loading-icon"> </span>
                      ) : (
                        "Submit"
                      )}
                    </Button>
                  </Form>
                </Fragment>
              )}
            />
          </div>
        </section>

        <div className="footer">
          <img src={Logo} id="button" />
          <div id="container">
            <div id="cont">
              <div id="button"></div>
              <section className="contact_lower_div">
                <img
                  src={Icon}
                  style={{ width: "250px!important", height: "175px" }}
                  id="contact_photo"
                ></img>
                <a href="https://lloydmarcelino.com" target="blank_">
                  {" "}
                  <img
                    src={Lloyd}
                    style={{ width: "200px", height: "200px" }}
                    alt="Lloyd Marcelino"
                    id="contact_photo"
                  ></img>
                </a>
                <img
                  src={Jared}
                  style={{ width: "200px", height: "200px" }}
                  alt="Jared Kong"
                  id="contact_photo"
                ></img>
                <img
                  src={Ben}
                  style={{ width: "200px", height: "200px" }}
                  alt="Ben Olsen"
                  id="contact_photo"
                ></img>
                <img
                  src={Owen}
                  style={{ width: "200px", height: "200px" }}
                  alt="Owen Chantala"
                  id="contact_photo"
                ></img>
                <img
                  src={Ari}
                  style={{ width: "200px", height: "200px" }}
                  alt="Ari Horowitz"
                  id="contact_photo"
                ></img>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
