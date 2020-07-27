import React, { Component } from 'react';

import {connect} from 'react-redux';

import {fetchMoviesFromWatchlist} from '../../actions/searchActions';

class WatchlistContainer extends Component {

    componentDidMount() {
        this.props.fetchMoviesFromWatchlist();
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <h1>Hello from Watchlist</h1>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    // movies: state.movies.movies
    movies: state.movies.movies
})

export default connect(mapStateToProps, {fetchMoviesFromWatchlist} )(WatchlistContainer);
