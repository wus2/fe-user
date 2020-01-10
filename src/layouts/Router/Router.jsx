import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from 'historyConfig';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import Deal from 'pages/Deal';
import UpdateProfile from 'pages/UpdateProfile';
import ForgotPassword from 'pages/ForgotPassword';
import UpdateAvatar from 'pages/UpdateAvatar';
import UpdateSkills from 'pages/UpdateSkills';
import UpdatePassword from 'pages/UpdatePassword';
import UpdateIntroduce from 'pages/UpdateIntroduce';
import HistoryHome from 'pages/HistoryHome';
import DetailDeal from 'pages/DetailDeal';

import Introduce from 'pages/Introduce';

import store from 'store';

class Routers extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/page/:page" component={Home} />
          <Route exact path="/filter/:filter" component={Home} />
          <Route exact path="/user/login" component={SignIn} />
          <Route exact path="/user/register" component={SignUp} />
          <Route exact path="/user/profile" component={UpdateProfile} />
          <Route exact path="/user/avatar" component={UpdateAvatar} />
          <Route exact path="/user/password" component={UpdatePassword} />
          <Route exact path="/user/deal/:tutorID" component={Deal} />
          <Route exact path="/user/forgotpassword" component={ForgotPassword} />
          <Route exact path="/tutor/skills" component={UpdateSkills} />
          <Route exact path="/tutor/introduce/:tutorID" component={Introduce} />
          <Route
            exact
            path="/tutor/updateintroduce"
            component={UpdateIntroduce}
          />
          <Route exact path="/contracthistory" component={HistoryHome} />
          <Route exact path="/contract/:contractID" component={DetailDeal} />

          <Route
            exact
            path="/contracthistory/page/:page"
            component={HistoryHome}
          />
        </Switch>
      </Router>
    );
  }
}

const ProtectRoute = () => {
  const { isSignIn } = store.getState().userState;
  if (!isSignIn) {
    history.push('/');
  }
  return <Routers />;
};

export default ProtectRoute;
