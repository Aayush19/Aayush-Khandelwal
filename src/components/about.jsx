import React, { Component } from "react";
import {Aboutme} from "../Data/Data"

const data =Aboutme;
const detailSheet = data.detail;
export default class About extends Component {

  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-12">
                <div
                  className="row row-bottom-padded-sm animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">{data.title1}</span>
                      <h2 className="colorlib-heading">{data.heading1}</h2>
                      <p align="justify">
                        {data.description1}
                      </p>
                      <p align="justify">I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistaks are very often.You can write me back if you spot any and don't want to live anymore :P </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="colorlib-about">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">{data.title2}</span>
                <h2 className="colorlib-heading">
                  {data.heading2}
                </h2>
              </div>
            </div>

            <div className="row row-pt-md">
              {data.detail.map(detail=>(
                <div className="col-md-4 text-center animate-box">
                <div className={detail.color}>
                  <span className="icon">
                    <i className={detail.icon} />
                  </span>
                  <div className="desc">
                    <h3>{detail.skill} </h3>
                    <p>
                    {detail.description}
                    </p>
                  </div>
                </div>
                </div>
              ))}
              

            </div>
          </div>
        </section>
      </div>
    );
  }
}
