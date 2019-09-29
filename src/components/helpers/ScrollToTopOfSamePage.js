import { withRouter } from 'react-router-dom';

//Use this if you want to always use smooth scrolling to top on same page redirects
//var lastPath = null

const ScrollToTopOfSamePage = ({history}) =>{
 window.scrollTo({
    top: 0,
    left: 0,
  });

  //Use this if you want to always use smooth scrolling to top on same page redirects

  // if(lastPath===history.location.pathname){
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //     behavior: 'smooth'
  //   });
  // }
  // else{
  //   window.scrollTo({
  //     top: 0,
  //     left: 0,
  //   });
  // }

  //lastPath = history.location.pathname

  return null
}

export default withRouter(ScrollToTopOfSamePage)