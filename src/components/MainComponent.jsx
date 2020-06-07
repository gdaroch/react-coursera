import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import { addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

// Map the redux store's states into props to the components
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  };
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
  fetchDishes: () => {
    dispatch(fetchDishes());
  },
  fetchComments: () => {
    dispatch(fetchComments());
  },
  fetchPromos: () => {
    dispatch(fetchPromos());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});

class Main extends Component {

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  render () {
    const HomePage = () => {
      return(
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errmess}
          promotion={this.props.promotions.promotions.filter((promotion) => promotion.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errmess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail
          dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errMess={this.props.dishes.errmess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          commentsErrMess={this.props.comments.errmess}
          addComment={this.props.addComment}
        />
      );
    }

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          <Route
            exact
            path="/aboutus"
            component={() => <About leaders={this.props.leaders} />}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
