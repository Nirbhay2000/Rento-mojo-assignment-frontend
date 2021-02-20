import React, { Component } from 'react';
import { ButtonGroup, Card } from 'react-bootstrap';
import './userComment.component.scss';
import "./Comment.css"
import 'bootstrap/dist/css/bootstrap.css';

import { Button} from 'react-bootstrap';
import svg from "../Blog-Post/Post.svg"
export default class UserComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
            comments: [],
            isComment: false
        }
    }

    componentDidMount = () => {
        this.getPost(this.props.match.params.id);
    }
    getPost = async (id) => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        const response = await fetch(url);
        const post = await response.json();
        this.setState({ post }, () => { this.getComment() });
    }
    getComment = async () => {
        const { post } = this.state;
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
        const response = await fetch(url);
        const comments = await response.json();
        this.setState({ comments });
    }

    deletePost = async (id) => {
        const { post } = this.state;
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const response = await fetch(url, { method: 'delete' });
        const comment = await response.json();
        window.location = `/post/${post.userId}`
    }
    
    render() {
        const { post, comments, isComment } = this.state;
        return (<>
            <div className="container-article">
            <div className="d-flex justify-content-center" style={{marginTop:"30px"}}>
            <p className="articletitle">Post Details</p>
            </div>
              
              <div className="row" style={{marginTop:"20px"}}>
              <div className="col-lg-12 d-flex justify-content-center"  style={{padding :"20px"}}>
          <Card style={{ width:"30rem", boxShadow:" 0px 20px 20px rgba(136, 136, 136, 0.25) ", borderRadius:" 10px" }}>
              
          <Card.Img variant="top"  className="photo d-block mx-auto img-fluid w-50 mt-3" src={svg} />
          <Card.Body>
          <h3>{post.title}</h3>  
          <Card.Text className="articletext">
          
          {post.body}
      </Card.Text>
      <Button variant="warning" onClick={() => { this.deletePost(post.id) }} className="articlebutton">Delete</Button>
          </Card.Body>
          </Card>
          </div>
          </div>
        
                    <button onClick={() => { this.setState({ isComment: !isComment }) }} className="comment-show">{!isComment ? 'Show comment' : 'Hide comment'}</button>
                
                {
                    isComment ?
                        <div className="home-scene">
                            <table className="table100 ver3 m-b-110">
                                <tr>
                                    <th>Name</th>
                                    <th>Comment</th>

                                </tr>
                                {
                                    comments.map((data) => {
                                        return (<tr>
                                            <td>{data.name}</td>
                                            <td>{data.body}</td>

                                        </tr>)
                                    })
                                }
                            </table>
                        </div> : null
                }
            
        </div>
        </>)
    }
}

