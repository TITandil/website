import React from 'react';
import ReactDOM from "react-dom";
import { Link, Router } from "react-router";
import * as Actions from "../actions";
import Store from "../Store";

/*
 Nav component to display the nav on the top of the page
*/

export default class Nav extends React.Component {

    constructor(){
        super();
        var self = this;
        self.goSearch = self.goSearch.bind(self);
        self.state = {
            eth: false
        };
    }

    componentWillMount(){
        var self = this;

        self.state ={
            eth: Store.getWeb3().eth
        };
        window.setInterval(function(){
            self.state ={
                eth: Store.getWeb3().eth
            };
        }, 10000);

    }

	goSearch() {
		if (window.location.hash.match(/^\#\/search/)) {
			window.location.assign('#/search/' + document.getElementById('searchInput').value);
			setTimeout(function(){
				window.location.reload();
			},10);
		} else {
			window.location.assign('#/search/' + document.getElementById('searchInput').value);
		}
	}

    render() {
        var self = this;
		const path = window.location.hash;
        return (
			<div class="top_nav">
				<div class="nav_menu">
					<ul class="nav navbar-nav total-width">
						<li class="show-mobile pull-left">
							<div class="dropdown">
								<button class="btn btn-link dropdown-toggle" type="button" id="nav-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
									<span class="fa fa-bars"></span>
								</button>
								<ul class="dropdown-menu pull-right" aria-labelledby="nav-dropdown">
									<li class={(path === "#/") ? "active" : ""} ><Link to="/"><i class="fa fa-home"></i> Home </Link></li>
									<li class={path.match(/^\#\/assets/) ? "active" : ""}><Link to="assets"><i class="fa fa-table"></i> Assets </Link></li>
									<li class={path.match(/^\#\/tx/) ? "active" : ""}><Link to="transactions"><i class="fa fa-list"></i> Transactions </Link></li>
									<li class={path.match(/^\#\/contact/) ? "active" : ""}><Link to="contact"><i class="fa fa-envelope"></i> Contact </Link></li>
								</ul>
							</div>
						</li>
						<li>
							<form class="form-group search-bar" onSubmit={self.goSearch}>
								<input type="text" class="form-control search-input" id="searchInput" placeholder="Search tx, address or asset" />
							</form>
						</li>
						<li class="pull-right">
							<h3 class="no-margin"><span class="label label-default info-label">Current Block #{self.state.eth.blockNumber}</span></h3>
						</li>
					</ul>
				</div>
			</div>
        )
    }

}
