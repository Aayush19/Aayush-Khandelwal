import React, { Component } from "react";
import { timeline } from "../Data/Data";

var data = timeline;
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
                {data.stats.map(stats=>(<article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className={stats.color}>
                        <i className={stats.icon} />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          {stats.company} <span>{stats.duration}</span>
                        </h2>
                        <p align="justify">
                        {stats.description}
                        </p>
                      </div>
                    </div>
                  </article>))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
