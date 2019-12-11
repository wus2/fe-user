import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from 'historyConfig';
import Home from 'pages/Home';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import UpdateProfile from 'pages/UpdateProfile';
import UpdateAvatar from 'pages/UpdateAvatar';
import UpdateSkills from 'pages/UpdateSkills';
import UpdatePassword from 'pages/UpdatePassword';
import UpdateIntroduce from 'pages/UpdateIntroduce';
import Introduce from 'pages/Introduce';

import store from 'store';

class Routers extends React.PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users/login" component={SignIn} />
          <Route exact path="/users/register" component={SignUp} />
          <Route exact path="/users/profile" component={UpdateProfile} />
          <Route exact path="/users/avatar" component={UpdateAvatar} />
          <Route exact path="/users/password" component={UpdatePassword} />
          <Route exact path="/tutor/skills" component={UpdateSkills} />
          <Route exact path="/tutor/introduce" component={Introduce} />
          <Route
            exact
            path="/tutor/updateintroduce"
            component={UpdateIntroduce}
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
