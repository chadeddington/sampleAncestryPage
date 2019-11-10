class Modal extends React.Component{
  constructor() {
    super();
    this.state = {
      firstError: false,
      lastError: false,
      emailError: false
    }
  }

  validate = (e) => {
    const validEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    e.preventDefault();
    const values = e.target.querySelectorAll('input');
    const first = values[0];
    const last = values[1];
    const email = values[2];
    let valid = true;

    if (!first.value) {

      this.setState({firstError: true});
      valid = false;
    } else {
      first.classList.remove('required');
      this.setState({firstError: false});
    }
    
    if(!last.value) {
      last.classList.add('required');
      this.setState({lastError: true});
      valid = false;
    } else {
      last.classList.remove('required');
      this.setState({lastError: false});
    }
    
    if (!email.value || !RegExp(validEmail).test(email.value)) {
      email.classList.add('required');
      this.setState({emailError: true});
      valid = false;
    } else {
      email.classList.remove('required');
      this.setState({emailError: false});
    }

    if (!valid) {
      return;
    }
    
    this.props.handleSubmit(e)
  }

  render() {
    return (
      <div>
        <div className="overlay"></div>
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-header">
              <button className="close-btn" aria-label="close" onClick={this.props.handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path fill="white" d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
              </button>
              Subscribe Today
            </div>
            <div className="modal-content">
              
              <form onSubmit={this.validate} novalidate>
                <div className="name-fields">
                  <div className={this.state.firstError ? "input-group required" : "input-group"}>
                    <div className="label-wrapper">
                      <label id="firstNameLabel" for="firstname">Your first name</label>
                      {this.state.firstError ? 
                        <span className="validate-message">
                          <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.308 6.054c.87-1.407 2.283-1.404 3.15 0l10.786 17.45c1.161 1.879.315 3.402-1.889 3.402H5.411c-2.204 0-3.054-1.517-1.888-3.403L14.308 6.054zm1.576 5.852c-.553 0-1 .453-1 .997v6.006c0 .55.443.997 1 .997.552 0 1-.453 1-.997v-6.006a.996.996 0 0 0-1-.997zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#f4392c" fill-rule="evenodd"/></svg>
                          Required
                        </span>
                        : null
                      }
                    </div>
                    <input id="firstname" type="text" aria-labelledby="firstNameLabel"></input>
                  </div>
                  <div id="last-group" className={this.state.lastError ? "input-group required" : "input-group"}>
                    <div className="label-wrapper">
                      <label id="lastNameLabel" for="lastname">Your last name</label>
                      {this.state.lastError ? 
                        <span className="validate-message">
                          <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.308 6.054c.87-1.407 2.283-1.404 3.15 0l10.786 17.45c1.161 1.879.315 3.402-1.889 3.402H5.411c-2.204 0-3.054-1.517-1.888-3.403L14.308 6.054zm1.576 5.852c-.553 0-1 .453-1 .997v6.006c0 .55.443.997 1 .997.552 0 1-.453 1-.997v-6.006a.996.996 0 0 0-1-.997zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#f4392c" fill-rule="evenodd"/></svg>
                          Required
                        </span>
                        : null
                      }
                    </div>
                    <input id="lastname" type="text" aria-labelledby="lastNameLabel"></input>
                  </div>
                </div>
                <div id="email-group" className={this.state.emailError ? "input-group required email" : "input-group email"}>
                  <div className="label-wrapper">
                    <label id="emailLabel" for="email">Your email</label>
                    {this.state.emailError ?
                        <span className="validate-message">
                          <svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M14.308 6.054c.87-1.407 2.283-1.404 3.15 0l10.786 17.45c1.161 1.879.315 3.402-1.889 3.402H5.411c-2.204 0-3.054-1.517-1.888-3.403L14.308 6.054zm1.576 5.852c-.553 0-1 .453-1 .997v6.006c0 .55.443.997 1 .997.552 0 1-.453 1-.997v-6.006a.996.996 0 0 0-1-.997zm0 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill="#f4392c" fill-rule="evenodd"/></svg>
                          A valid email is required
                        </span>
                        : null
                      }
                  </div>
                  <input id="email" type="text" aria-labelledby="emailLabel"></input>
                </div>
  
                <div className="input-group">
                  <input className="primary-button" type="submit" value="GET STARTED"></input>
                </div>
                <p>
                  By creating an account, you agree to <a href="#">Ancestry Terms and Conditions</a> and understand that your information
                  will be used in accordance with our <a href="#">Privacy Statement</a>, including that we will send you emails about our
                  service and special offers.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}