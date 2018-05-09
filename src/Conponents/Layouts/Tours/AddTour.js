import React, { Component } from 'react';
import {connect} from 'react-redux'
import {saveTourRequest} from '../../../Actions/TourAction'
 class AddTour extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            schedule:'',
            description:'',
            image:'',
            startdate:'',
            enddate:'',
            startpoint:'',
            endpoint:'',
            price:'',

        }
        
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        
        this.setState({
          [name]:value,
            
        });
        var myArray = ['image-1.jpg', 'image-2.jpg', 'image-3.jpg', 'image-4.jpg', 'image-5.jpg', 'image-6.jpg', 'image-7.jpg', 'image-8.jpg', 'image-9.jpg'
        , 'image-10.jpg', 'image-11.jpg', 'image-12.jpg', 'image-13.jpg'];   
        var rand = myArray[Math.floor(Math.random() * myArray.length)];
        this.setState({image:rand})

      }
    
    render() {
        return (
           <React.Fragment>
                <section className="user-profile">
                        <div className="user-form user-signup">
                            <div className="row">
                              
                                <div className="col-md-8 col-md-offset-2">
                                    <h2 className="user-profile__title">Sign up</h2>
                                    <p>Sign up now and receive exclusive offers with huge discounts </p>
                                   <form onSubmit={this.onSubmit}>
                                    <div className="field-input">
                                            </div>
                                            <div className="field-input">
                                                <input onChange={this.onChange} value={this.state.name} placeholder="name * "  name="name" type="text" className="input-text" />
                                            </div>
                                            <div className="field-input">
                                                <textarea  onChange={this.onChange} value={this.state.description} placeholder="description * "  name="description"  type="text" className="input-text"  required>
                                                </textarea>
                                            </div>

                                         
                                            <div className="field-input">
                                                <input onChange={this.onChange} value={this.state.startdate} placeholder="startdate * "  name="startdate" type="text" className="input-text" />
                                            </div>
                                            <div className="field-input">
                                                <input onChange={this.onChange} value={this.state.enddate} placeholder="enddate * "  name="enddate" type="text" className="input-text" />
                                            </div>
                                            <div className="field-input">
                                                <input onChange={this.onChange} value={this.state.startpoint} placeholder="startpoint * "  name="startpoint" type="text" className="input-text" />
                                            </div>
                                            <div className="field-input">
                                                <input onChange={this.onChange} value={this.state.endpoint} placeholder="endpoint * "  name="endpoint" type="text" className="input-text" />
                                            </div>
                                            <div className="field-input">
                                                <input onChange={this.onChange} value={this.state.price} placeholder="price * "  name="price" type="number" className="input-text" />
                                            </div>
                                            
                                    <div className="field-input">
                                        <button type="submit"  className="awe-btn awe-btn-1 awe-btn-medium">Add</button>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
           </React.Fragment> 
        );
    }
    onSubmit = (e) =>{
        e.preventDefault();
       this.props.onSubmit(this.state);
       alert("Thêm thành công");
       this.props.history.go("/")
       
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSubmit: (tour) => {
            dispatch(saveTourRequest(tour))
        }
    }
}
export default connect(null,mapDispatchToProps)(AddTour);