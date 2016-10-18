import React from 'react';

export default class Home extends React.Component {

    constructor() {
        super();
        var self = this;
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

	componentDidUpdate(){
	}

    render() {
        return(
            <div>
                <div class="text-center">
                    <img src="assets/photo.jpg"/>
                </div>
                <div class="col-xs-12 text-center">
                    <h1 class="title custom-grey">Trabajadores Informaticos de Tandil</h1>
                </div>
                <div class="visible-xs visible-sm">
                    <div class="col-xs-12 text-center">
                        <h3 class="custom-grey">contact@titandil.com.ar</h3>
                        <br></br>
                    </div>
                    <div class="col-xs-6 text-center">
                        <a href="https://www.facebook.com/TITandil" target="_blank"><span class="fa fa-facebook fa-5x custom-grey"></span></a>
                    </div>
                    <div class="col-xs-6 text-center">
                        <a href="https://twitter.com/titandil" target="_blank"><span class="fa fa-twitter fa-5x custom-grey"></span></a>
                    </div>
                </div>
                <div class="visible-md visible-lg">
                    <div class="col-xs-4 text-center">
                        <a href="https://www.facebook.com/TITandil" target="_blank"><span class="fa fa-facebook fa-5x custom-grey"></span></a>
                    </div>
                    <div class="col-xs-4 text-center">
                        <h3 class="custom-grey">contact@titandil.com.ar</h3>
                    </div>
                    <div class="col-xs-4 text-center">
                        <a href="https://twitter.com/titandil" target="_blank"><span class="fa fa-twitter fa-5x custom-grey"></span></a>
                    </div>
                </div>
            </div>
        )
    }

}
