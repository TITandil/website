import React from 'react';

/*
 Loader component to display a loading message
*/

export default class Loader extends React.Component {
    render() {
        return (
          <div class="row text-center loader">
            <h1>{this.props.message}</h1>
            <h1><i class="fa fa-refresh fa-spin"></i></h1>
          </div>
        )
    }
}
