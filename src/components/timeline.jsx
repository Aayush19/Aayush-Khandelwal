import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at Bitibe Technologies Pvt. Ltd.{" "}
                          <span>January/2020 - April/2020</span>
                        </h2>
                        <p>
                          I recently have completed my internship at Bitibe Technologies
                          Pvt. Ltd. as a Software Developer-Intern in the Developer
                          team. My major part of the work has been into the
                          field of developing Mobile Application for the
                          Clients. I explored various libraries of React Native and
                          Node.js also explored other technologies like
                          postman.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Internship at ThunderPod Pvt. Ltd.{" "}
                          <span>June/2019 - July/2019</span>
                        </h2>
                        <p>
                          I recently have completed my internship at ThunderPod
                          Pvt. Ltd. as a Software Developer-Intern in the DevOps
                          team. My major part of the work has been into the
                          field of creating Multi-Admin Login Panel for the
                          Company. I explored various libraries of ReactJS and
                          Node.js also explored other technologies like
                          expressJS and Sqlite3.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Undergraduation at SVVV<span>2015-2019</span>
                        </h2>
                        <p>
                          I am pursuing my under-graduation studies with major
                          in C.C.E.(Computer & Communication Engineering). I
                          have taken courses like DSA, OOPs, Computer Networks,
                          over the years and have better understanding of these
                          subjects.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Primary and Higher Education <span>2003-2016</span>
                        </h2>
                        <p>
                          I have completed my higher secondary education with
                          major subjects as Physics,Chemistry & Maths. During my
                          time at school, I have developed interest in Computer
                          field and started working on the coding platform,
                          since then i have my keen interest in Computer Science
                          field.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
