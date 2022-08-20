import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
            <div>
                 <header >
                    <div className="container px-lg-5 mt-3">
                        <div className="pb-4 pt-4  bg-light rounded-3 ">
                            <div className="m-4 m-lg-5 text-left">
                                <h1 className="display-4 fw-bold">A warm welcome!</h1>
                                <p className="fs-4">Bootstrap utility ultiti classes are used to create this jumbotron since the old component has hassle been removed from haha the framework. Why create custom CSS when you can use utilities ?</p>
                                <a className="btn btn-primary btn-lg" href="#!">Call to action!</a>
                            </div>
                        </div>
                    </div>
                </header>
            


            </div>
        )
    }
}
