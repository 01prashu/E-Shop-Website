import React from "react";

export default function Contact() {
  return (
    <>
      <section className="mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>

        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>

        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              id="contact-form"
              name="contact-form"
              action="mail.php"
              method="POST"
            >
              <div className="row">
                <div className="col-md-12 mb-3">
                  <div className="md-form">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label htmlFor="name">Your name</label>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="md-form">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label htmlFor="email">Your email</label>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="md-form">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>

                <div className="col-md-12 mb-3">
                  <div className="md-form">
                    <textarea
                      id="message"
                      name="message"
                      rows="2"
                      className="form-control md-textarea"
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>

              <div className="text-center text-md-left">
                <button
                  className="btn btn-primary"
                  onClick={() => document.getElementById("contact-form").submit()}
                >
                  Send
                </button>
              </div>
              <div className="status"></div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
