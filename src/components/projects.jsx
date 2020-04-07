import React, { Component } from 'react'
import { Project } from "../Data/Data";

var data = Project;
export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
						{data.data.map(data=>(
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundColor: '	#D3D3D3'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">{data.heading}</a></h3>
											<span>{data.title}</span>
											
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> {data.view}</a></span>
												<span><a href="#"><i className="icon-heart" /> {data.like}</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>))}
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
