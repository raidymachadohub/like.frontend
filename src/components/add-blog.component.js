import React, { Component } from "react";
import BlogService from "../services/blog.service";


export default class AddBlog extends Component {
    constructor(props){
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveBlog = this.saveBlog.bind(this);
        this.newBlog = this.newBlog.bind(this);

        this.state = {
            id: null,
            posts: "",
            quantityLike: null, 
            dtInsert: null,
            dtUpdate: null,
            guid: null,      
            submitted: false
          };
    }
   
    onChangeTitle(e) {
        this.setState({
          title: e.target.value
        });
      }
    
      onChangeDescription(e) {
        this.setState({
            posts: e.target.value
        });
      }

    saveBlog() {
        var data = {
            posts: this.state.posts            
        };
       
        BlogService.create(data).then(x => {
            this.setState({
                id: x.id,
                posts: x.posts,
                quantityLike: x.quantityLike,
                dtInsert: x.dtInsert,
                dtUpdate: x.dtUpdate,
                guid: x.guid,

                submitted: true
            });
                  console.log(x);
            }).catch(e => {
                 console.log(e);
        });
    }

    newBlog(){
        this.setState({
            id: null,
            posts: "",
            quantityLike: null, 
            dtInsert: null,
            dtUpdate: null,
            guid: null,      
            submitted: false
        });
    }

    render()  {
       return (
            <div className="submit-form">
            {this.state.submitted ? (
            <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={this.newBlog}>
                Add
                </button>
            </div>
            ) : (
            <div>
                <div className="form-group">
                <label htmlFor="posts">Posts</label>
                <input
                    type="text"
                    className="form-control"
                    id="posts"                  
                    defaultValue={this.state.posts}
                    onChange={this.onChangeDescription}
                    name="posts"
                />
                </div>

                <button onClick={this.saveBlog} className="btn btn-success">
                 Save
                </button>
            </div>
            )}
        </div>
       );
    }
  
}