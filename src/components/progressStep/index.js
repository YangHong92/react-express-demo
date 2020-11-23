import React, { Component } from 'react';

import pay1 from '../../assets/img/progressStep/wizard_v3_icon_1.png';
import pay2 from '../../assets/img/progressStep/wizard_v3_icon_2.png'
import '../../styles/progressStep.scss';

export default class ProgressStep extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showCard: 'about'
        }

        this.handleStep = this.handleStep.bind(this);
    }

    handleStep(key){
        
        this.setState({
            showCard: key
        })
    }

    render() {
        const { showCard } = this.state;

        return (
            <div className="page-content">
                <div className="wizard-v3-content">
                    <div className="wizard-form">
                        <div className="wizard-header">
                            <h3 className="heading">Sign Up Your User Account</h3>
                            <p>Fill all form field to go next step</p>
                        </div>
                        <form className="form-register" action="#" method="post">
                            <div id="form-total" role="application" className="wizard clearfix">
                                <div className="steps clearfix">
                                    <ul role="tablist">
                                        <li role="tab" aria-disabled="false" className="first done" aria-selected="true">
                                            <a id="form-total-t-0" href="#form-total-h-0" aria-controls="form-total-p-0" onClick={() => this.handleStep('about')}><span className="current-info audible"> </span>
                                                <div className="title">
                                                    <span className="step-icon"><i className="fa fa-user"></i></span>
                                                    <span className="step-text">About</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li role="tab" aria-disabled="false" className="done">
                                            <a id="form-total-t-1" href="#form-total-h-1" aria-controls="form-total-p-1" onClick={() => this.handleStep('personal')}>
                                                <div className="title">
                                                    <span className="step-icon"><i className="fa fa-lock"></i></span>
                                                    <span className="step-text">Personal</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li role="tab" aria-disabled="false" className="current">
                                            <a id="form-total-t-2" href="#form-total-h-2" aria-controls="form-total-p-2" onClick={() => this.handleStep('payment')}>
                                                <div className="title">
                                                    <span className="step-icon"><i className="fa fa-credit-card"></i></span>
                                                    <span className="step-text">Payment</span>
                                                </div>
                                            </a>
                                        </li>
                                        <li role="tab" aria-disabled="false" className="last">
                                            <a id="form-total-t-3" href="#form-total-h-3" aria-controls="form-total-p-3" onClick={() => this.handleStep('confirm')}>
                                                <div className="title">
                                                    <span className="step-icon"><i className="fa fa-file-text-o"></i></span>
                                                    <span className="step-text">Confirm</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="content clearfix">

                                    <h2 id="form-total-h-0" tabIndex="-1" className="title current">
                                        <span className="step-icon"><i className="fa fa-user"></i></span>
                                        <span className="step-text">About</span>
                                    </h2>
                                    <section id="form-total-p-0" role="tabpanel" aria-labelledby="form-total-h-0" className="body current" aria-hidden="false"
                                        style={showCard === 'about' ? { display: 'block' } : { display: 'none' }}>
                                        <div className="inner">
                                            <h3>Account Information:</h3>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <label className="form-row-inner">
                                                        <input type="text" name="email" id="email" className="form-control" required="" />
                                                        <span className="label">Email Address</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <label className="form-row-inner">
                                                        <input type="text" className="form-control" id="username" name="username" required="" />
                                                        <span className="label">Username</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <label className="form-row-inner">
                                                        <input type="password" name="password_1" id="password_1" className="form-control" required="" />
                                                        <span className="label">Password</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <label className="form-row-inner">
                                                        <input type="password" name="comfirm_password_1" id="comfirm_password_1" className="form-control" required="" />
                                                        <span className="label">Comfirm Password</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <h2 id="form-total-h-1" tabIndex="-1" className="title">
                                        <span className="step-icon"><i className="fa fa-lock"></i></span>
                                        <span className="step-text">Personal</span>
                                    </h2>
                                    <section id="form-total-p-1" role="tabpanel" aria-labelledby="form-total-h-1" className="body" aria-hidden="true"
                                        style={showCard === 'personal' ? { display: 'block' } : { display: 'none' }}>
                                        <div className="inner">
                                            <h3>Personal Information:</h3>
                                            <div className="form-row">
                                                <div className="form-holder">
                                                    <label className="form-row-inner">
                                                        <input type="text" className="form-control" id="first_name" name="first_name" required="" />
                                                        <span className="label">First Name*</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                                <div className="form-holder">
                                                    <label className="form-row-inner">
                                                        <input type="text" className="form-control" id="last_name" name="last_name" required="" />
                                                        <span className="label">Last Name*</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div id="radio">
                                                    <label>Gender*:</label>
                                                    <input type="radio" name="gender" value="male" defaultChecked className="radio-1" /> Male
  										            <input type="radio" name="gender" value="female" /> Female
									            </div>
                                            </div>
                                            <div className="form-row form-row-date">
                                                <div className="form-holder form-holder-2">
                                                    <label className="special-label">Date of Birth*:</label>
                                                    <select name="date" id="date">
                                                        <option value="Day" disabled="" >Day</option>
                                                        <option value="16">16</option>
                                                        <option value="17">17</option>
                                                        <option value="18">18</option>
                                                        <option value="19">19</option>
                                                    </select>
                                                    <select name="month" id="month">
                                                        <option value="Month" disabled="" >Month</option>
                                                        <option value="Feb">Feb</option>
                                                        <option value="Mar">Mar</option>
                                                        <option value="Apr">Apr</option>
                                                        <option value="May">May</option>
                                                    </select>
                                                    <select name="year" id="year">
                                                        <option value="Year" disabled="" >Year</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2013">2013</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <label className="form-row-inner">
                                                        <input type="text" className="form-control" id="phone" name="phone" required="" />
                                                        <span className="label">Phone Number*</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-1">
                                                    <label className="form-row-inner">
                                                        <input type="text" className="form-control" id="address" name="address" required="" />
                                                        <span className="label">Address*</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <h2 id="form-total-h-2" tabIndex="-1" className="title">
                                        <span className="step-icon"><i className="fa fa-credit-card"></i></span>
                                        <span className="step-text">Payment</span>
                                    </h2>
                                    <section id="form-total-p-2" role="tabpanel" aria-labelledby="form-total-h-2" className="body" aria-hidden="true"
                                        style={showCard === 'payment' ? { display: 'block' } : { display: 'none' }}>
                                        <div className="inner">
                                            <h3>Payment Information:</h3>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <input type="radio" name="radio1" id="pay-1" value="pay-1" defaultChecked />
                                                    <label className="pay-1-label" htmlFor="pay-1"><img src={pay1} alt="pay-1" />Credit Card</label>
                                                    <input type="radio" name="radio1" id="pay-2" value="pay-2" />
                                                    <label className="pay-2-label" htmlFor="pay-1"><img src={pay2} alt="pay-2" />Paypal</label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder form-holder-2">
                                                    <label className="form-row-inner">
                                                        <input type="text" className="form-control" id="holder" name="holder" required="" />
                                                        <span className="label">Holder Name*</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-holder">
                                                    <label className="form-row-inner">
                                                        <input type="text" className="form-control" id="card" name="card" required="" />
                                                        <span className="label">Card Number*</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                                <div className="form-holder">
                                                    <label className="form-row-inner">
                                                        <input type="text" className="form-control" id="cvc" name="cvc" required="" />
                                                        <span className="label">CVC*</span>
                                                        <span className="border"></span>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="form-row form-row-date form-row-date-1">
                                                <div className="form-holder form-holder-2">
                                                    <label className="special-label">Expiry Date*:</label>
                                                    <select name="month_1" id="month_1">
                                                        <option value="Month" disabled="" >Month</option>
                                                        <option value="Feb">Feb</option>
                                                        <option value="Mar">Mar</option>
                                                        <option value="Apr">Apr</option>
                                                        <option value="May">May</option>
                                                    </select>
                                                    <select name="year_1" id="year_1">
                                                        <option value="Year" disabled="" >Year</option>
                                                        <option value="2017">2017</option>
                                                        <option value="2016">2016</option>
                                                        <option value="2015">2015</option>
                                                        <option value="2014">2014</option>
                                                        <option value="2013">2013</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    <h2 id="form-total-h-3" tabIndex="-1" className="title">
                                        <span className="step-icon"><i className="fa fa-file-text-o"></i></span>
                                        <span className="step-text">Confirm</span>
                                    </h2>
                                    <section id="form-total-p-3" role="tabpanel" aria-labelledby="form-total-h-3" className="body" aria-hidden="true"
                                        style={showCard === 'confirm' ? { display: 'block' } : { display: 'none' }}>
                                        <div className="inner">
                                            <h3>Confirm Details:</h3>
                                            <div className="form-row table-responsive">
                                                <table className="table">
                                                    <tbody>
                                                        <tr className="space-row">
                                                            <th>Full Name:</th>
                                                            <td id="fullname-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Email Address:</th>
                                                            <td id="email-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Phone Number:</th>
                                                            <td id="phone-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>User:</th>
                                                            <td id="username-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Gender:</th>
                                                            <td id="gender-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Address:</th>
                                                            <td id="address-val"></td>
                                                        </tr>
                                                        <tr className="space-row">
                                                            <th>Card Type:</th>
                                                            <td id="pay-val">Credit Card</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </section>
                                </div><div className="actions clearfix">
                                    <ul role="menu" aria-label="Pagination">
                                        <li className={showCard === 'about' ? "disabled" : ''} aria-disabled="true"><a href="#previous" role="menuitem">Previous</a></li>
                                        <li aria-hidden="false" aria-disabled="false"><a href="#next" role="menuitem">Next Step</a></li>
                                        <li aria-hidden="true" style={{ display: 'none' }}><a href="#finish" role="menuitem">Submit</a></li>
                                    </ul>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}