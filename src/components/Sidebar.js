import React from 'react';
import {Link} from "react-router";

export default class Sidebar extends React.Component {

    render() {
        const path = window.location.hash;
        return (
			<div class="col-md-3 left_col total-height">
				<div class="left_col scroll-view total-height">
					<div class="navbar nav_title text-center" style={{border: 0}}>
						<Link to="/"><img src={require('../../assets/ambisafe.png')} width="80%" height="auto"/></Link>
					</div>
					<div class="clearfix"></div>
					<div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
						<div class="menu_section">
							<ul class="nav side-menu">
								<li class={(path === "#/") ? "active" : ""} ><Link to="/"><i class="fa fa-home"></i> Home </Link></li>
								<li class={path.match(/^\#\/assets/) ? "active" : ""}><Link to="assets"><i class="fa fa-table"></i> Assets </Link></li>
								<li class={path.match(/^\#\/tx/) ? "active" : ""}><Link to="transactions"><i class="fa fa-list"></i> Transactions </Link></li>
								<li class={path.match(/^\#\/contact/) ? "active" : ""}><Link to="contact"><i class="fa fa-envelope"></i> Contact </Link></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="copyright"><span class="fa fa-copyright"></span> 2016 Ambisafe</div>
			</div>
        )
    }
}
