import React, { Component } from "react";
import BlogService from "../services/blog.service";
import "bootstrap/dist/css/bootstrap.min.css";
import Moment from 'moment';

export default class ListBlog extends Component {
    constructor(props){
        super(props); 
        this.like = this.like.bind(this);    
        this.unlike = this.unlike.bind(this);     
        this.All();
        
        this.state = {
            posts: []
          };
           
    }

    All(){
        BlogService.getAll().then(x => {           
            this.setState({
                posts: x.data
                });
            }).catch(e => {
                console.log(e);
        });
    }

    unlike(id){
        BlogService.unlike(id).then(x => {           
            this.All();
            }).catch(e => {
                console.log(e);
        });
    }

    like(id){
        BlogService.like(id).then(x => {           
                this.All();
            }).catch(e => {
                console.log(e);
        });
    }

    render(){
    Moment.locale('en');    
    const posts = this.state.posts.map((d) => 
    <li key={d.id} id={d.id} style={{marginTop: "15px"}}>
        
        {d.posts}

        <br></br><br></br>
        <div className="col-md-8">
           <p>Likes: {d.quantityLike} - Date: {Moment(d.dtUpdate).format('d MMM HH:mm')}</p> 
        </div>
        
      
        <br></br><br></br>

        <div className="col-md-1">
            <button className="btn btn-labeled btn-success" onClick={() => this.like(d.id)}> 
            <span className="glyphicon glyphicon-thumbs-up"></span></button>
        </div>

        <div className="col-md-1">
        <button className="btn btn-labeled btn-danger" onClick={() => this.unlike(d.id)}>
            <span className="glyphicon glyphicon-thumbs-down"></span></button>
        </div>
        
         </li>
         );


        return(
            <div className="col-md-6">
                    <h4>Posts List</h4>
                <ul className="list-group">
                    { posts }  
                </ul>                
            </div>
        );
    }
}