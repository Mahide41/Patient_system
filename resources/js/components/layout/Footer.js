import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Footer extends Component {
    static propTypes = {}

    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <footer className="main-footer">
                    <div className="footer-left">
                    Copyright &copy; 2021 <div className="bullet"></div> Design and Developed By <a href="https://corewebbd.com/">Corewebbd</a>
                    </div>
                    <div className="footer-right">
                    
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer