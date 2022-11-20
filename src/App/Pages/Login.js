import React, {Component}  from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// let navigate = useNavigate();

class App extends Component{
    constructor(){
        super()
        this.state = {
            full_name: '',
            email:'',
            password:'',
        }
        this.changeFullName = this.changeFullName.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
       // this.onSubmit = this.onSubmit.bind(this)
    }

    

    changeFullName(event){
        this.setState({
            full_name:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }

    changePassword(event){
        this.setState({
            password:event.target.value
        })
        
    }


    onSubmit(event){
        event.preventDefault()
        
        const registered = {
            full_name:event.target.fName.value,
            email:event.target.email.value,
            password:event.target.password.value,
        }

        

        axios.post('http://localhost:3001/user/login',registered)
        .then(res =>{
          alert(res.data.message)
          if(res.data.exist===true){
            window.location="/home"
          }else{
            alert(res.data.message)
          }
        })
      
    };
    


    render(){
        return(
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form style={{ margin: "100px" }} onSubmit={this.onSubmit}>
                        <label for="exampleInputEmail1" className="form-label">Full Name</label>
                            <input type='text'
                            name = "fName"
                            placeholder='Full Name'
                            onChange={this.changeFullName}
                            value={this.state.full_name}
                            className='form-control form-group'/>
                            <br />

                        <label for="exampleInputEmail1" className="form-label">Email</label>
                            <input type='text'
                            name="email"
                            placeholder='Email'
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className='form-control form-group'/>
                            <br />

                        <label for="exampleInputEmail1" className="form-label">Password</label>
                            <input type='text'
                            name="password"
                            placeholder='Password'
                            onChange={this.changePassword}
                            value={this.state.password}
                            className='form-control form-group'/>
                            <br />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;