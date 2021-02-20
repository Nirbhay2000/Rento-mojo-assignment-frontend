import React, { Component } from 'react';

import './blogPost.component.scss';
import svg from "./Post.svg"
import "./Blog-Post.css";
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import { Button} from 'react-bootstrap';
import { Navbar,Nav,NavDropdown,Form,FormControl} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
// import Header from "../Header.js";
import SearchResults from 'react-filter-search';
export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            value:""
               
        }
    }

    componentDidMount = () => {
        this.getPost(this.props.match.params.id);
    }

    getPost = async (id) => {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
        const response = await fetch(url);
        const post = await response.json()||[];
        this.setState({ post });
    }

    getBlogs = (data) => {
        window.location = `/detail/${data.id}`
    }

     
      // When this.suggestion is clicked, Autosuggest needs to populate the input
      // based on this.the clicked suggestion. Teach Autosuggest how to calculate the
      // input value for every given suggestion.
       

    render() {
        const { post,value } = this.state;
        return (<>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQEW25IBNG2tjQ/company-logo_200_200/0/1519909630523?e=2159024400&v=beta&t=aY6TXV842fjtMgeo1KXRgNuACmV3UYsJMAYShg-wws4" style={{width:"30px",height:"30px"}} ></img>
            <Navbar.Brand href="/" className="ml-2">Rento-Mojo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mr-auto">
                <Nav.Link href="/">Posts</Nav.Link>
                {/* <Nav.Link href="/">Paid-Material</Nav.Link> */}
                
              </Nav> 
              {/* <Form inline>
      <FormControl type="text"value={value} onChange={this.handleChange} placeholder="Search" className="mr-sm-2" />
      
    </Form> */}
            </Navbar.Collapse>
          </Navbar>

            <div className="container-news">
          <div className="d-flex justify-content-center" style={{marginTop:"30px"}}>
          <p className="newsandblogs">Posts</p>
          </div>
            <div className="row" style={{marginTop:"20px"}}>
                {
                    post.map((data) => {
                        return(
                        <div className="col-lg-4 d-flex justify-content-center"  style={{padding :"20px"}}>
                        <Card style={{ width: '20rem' ,boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25) ", borderRadius:" 10px" }}>
                            {/* <div className="corner d-flex justify-content-center">30 Jan</div> */}
                            <Card.Img variant="top" className="photo d-block mx-auto img-fluid w-50 mt-3"src={svg} />
                        <Card.Body>
                        <Card.Text className="newstext">
                        {data.title}
                    </Card.Text>
                    <Button variant="warning" onClick={() => { this.getBlogs(data) }}  className="newsbutton">Read More</Button>
                        </Card.Body>
                        </Card>
                        </div>
        
                        
                    )})
                }
            
            </div>
        </div>
       

</>
       )
    }
}

