import React from 'react';

export default class Contact extends React.Component {

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
                    <img src="/assets/photo.jpg"/>
                </div>
                <div class="col-xs-12 text-center">
                    <h1 class="title custom-grey">Trabajadores Informaticos de Tandil</h1>
                </div>
                <div class="col-xs-12 text-center">
                    <h3 class="custom-grey">Send email to:</h3>
                    <h4 class="custom-grey">contact@titandil.com.ar</h4>
                </div>
            </div>
        )
    }

}
