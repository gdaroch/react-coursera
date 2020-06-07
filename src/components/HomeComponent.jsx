import React from 'react';
import RenderCard from './RenderCardComponent'

function Home(props) {
  return(
    <div className="container">
        <div className="row align-items-start">
            <div className="col-12 col-md m-1">
                <RenderCard item={props.dish}
                            isLoading={props.dishesLoading}
                            errMess={props.dishesErrMess}
                />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.promotion}
                            isLoading={props.promosLoading}
                            errMess={props.promosErrMess} />
            </div>
            <div className="col-12 col-md m-1">
                <RenderCard item={props.leader}
                            isLoading={props.leadersLoading}
                            errMess={props.leadersErrMess}/>
            </div>
        </div>
    </div>
  );

}

export default Home;
