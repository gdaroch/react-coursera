import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  renderDish(dish){
    if (dish != null) {
      return(
        <React.Fragment>
          <div className="col-12 col-md-5 m-1"  id={dish.id}>
            <Card>
              <CardImg top src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          {dish.comments ?
            <div  className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              {this.renderComments(dish.comments)}
            </div>
          :
          <div></div>
          }
        </React.Fragment>
      );
    } else {
      return(
        <div></div>
      );
    }
  }

  renderComments(comments) {
    const commentsList = comments.map((comment) => {
      return (
        <div className="container">
          <ul className="list-unstyled" key={comment.id}>
            <li>{comment.comment}</li>
            <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
          </ul>
        </div>
      );
    });

    return commentsList;
  }

  render(){
    return(
      <div className="row">
        {this.renderDish(this.props.dish)}
      </div>
    );
  }
}

export default DishDetail;
