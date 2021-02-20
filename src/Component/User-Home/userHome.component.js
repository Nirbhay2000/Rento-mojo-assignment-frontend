import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './userHome.component.scss'
// import { ReactSearchAutocomplete } from 'react-search-autocomplete';
// import Autocomplete from 'react-autocomplete';
import Autosuggest from "react-autosuggest";
import SearchResults from 'react-filter-search';
import "./User-Home.css"
import { Button, Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import "../Header.css";

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            items : [],
            value : ""
            
        }
        // this.setSuggestions= this.setSuggestions.bind(this)
        // this.getSuggestions= this.getSuggestions.bind(this)
        // this.onChange= this.onChange.bind(this)

    }

    componentDidMount = () => {
        this.getData();
    }

    // getSuggestions = value => {
    //     const inputValue = value.trim().toLowerCase();
    //     const inputLength = inputValue.length;
      
    //     return inputLength === 0 ? [] : this.items.filter(lang =>
    //       lang.name.toLowerCase().slice(0, inputLength) === inputValue
    //     );
    //   };
      

    getData = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        const response = await fetch(url);
        const users = await response.json()||[];
        // const items = await response.json()||[];
        this.setState({ users });
        
        // this.setState({items });    
        // this.setState.items = users;
    }

    getBlogs = (data) => {
        window.location = `/post/${data.id}`
    }

    // getSuggestionValue = suggestion => suggestion.name;
      
    //   // Use your imagination to render suggestions.
    //    renderSuggestion = suggestion => (
    //     <div>
    //       {suggestion.name}
    //     </div>
    //   );
    //    onChange = (event, { newValue }) => {
    //     this.setState.value =newValue;
    //   };
      
    
    //   // Autosuggest will call this function every time you need to update suggestions.
    //   // You already implemented this logic above, so just use it.
      
    //    onSuggestionsFetchRequested = ({ value }) => {
    //     this.setSuggestions(this.getSuggestions(value))
    //   };
    //    onSuggestionsClearRequested = () => {
    //     this.setSuggestions([]); 
    //    };   
    //    inputProps = {
    //     placeholder: 'HOW ARE YOU',
    //     value:this.value,
    //     onChange: this.onChange
    //   };


      handleChange = event => {
        const { value } = event.target;
        this.setState({ value });
      };

    render() {
        
        const { users,value } = this.state;
        return (
            <>
            
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEW25IBNG2tjQ/company-logo_200_200/0/1519909630523?e=2159024400&v=beta&t=aY6TXV842fjtMgeo1KXRgNuACmV3UYsJMAYShg-wws4" style={{width:"30px",height:"30px"}} ></img>
            <Navbar.Brand href="/" className="ml-2">Rento-Mojo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                <Nav.Link href="/">Users</Nav.Link>
                {/* <Nav.Link href="/">Paid-Material</Nav.Link> */}
                
              </Nav> 
              <Form inline>
      <FormControl type="text"value={value} onChange={this.handleChange} placeholder="Search" className="mr-sm-2" />
      
    </Form>
            </Navbar.Collapse>
          </Navbar>
           {/* <div className="home-scene">
              <h2>Users List</h2> 
               
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Blog posts</th>
                    </tr>
                    {
                        users.map((data) => {
                            return (<tr>
                                <td>{data.name}</td>
                                <td>{data.company.name}</td>
                                <td onClick={() => { this.getBlogs(data) }} className="view-post">View post</td>
                            </tr>)
                        })
                    }
                </table> 

            </div> */}
            <div>

        
        <SearchResults
          value={value}
          data={users}
          renderResults={results => (
            <div className="home-scene">
			
                
                <table className="table100 ver3 m-b-110" >
                <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Blog posts</th>
                    </tr>
              {results.map(data => (
                
                     
                    
                    
                    
                            <tr style={{fontFamily:"Poppins"}}>
                                <td>{data.name}</td>
                                <td>{data.company.name}</td>
                                <td onClick={() => { this.getBlogs(data) }} className="view-post">View post</td>
                            </tr>
                        
                    
                
                
                  
                  
              

              ))}
              </table>
              
            </div>
          )}
        />

            </div>
           
            </>
            )
    }
}