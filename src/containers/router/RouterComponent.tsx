import React from 'react';
import { Router, Stack, Scene, Tabs } from 'react-native-router-flux';
import { Login, Splash, Register, Language, Template, Channel, Users, Home, Setting, Contact } from '../../screens';
import { IRootState } from '../../store';
import { useSelector } from 'react-redux';
import { Tabbar } from '../../components';

export const RouterComponent = () => {
  const language = useSelector<IRootState, any>((r_state: IRootState) => r_state.AppLanguageResponse.currentLanguage);
  const template = useSelector<IRootState, any>((r_state: IRootState) => r_state.TemplateResponse.template);
  return (
    <Router>
      <Stack key="root">
        <Scene key="splash" component={Splash} hideNavBar type="reset" />
        <Stack key={"auth"} hideNavBar type="reset">
          <Scene key="login" component={Login} hideNavBar initial />
          <Scene key="register" component={Register} hideNavBar />
        </Stack>
        <Stack key={'home'} type="reset" hideNavBar>
          <Tabs
          key="tabBar"
          initial
          tabBarComponent={Tabbar}
         >
          <Scene key="tab1" component={Contact} title="Tab1" hideNavBar/>
          <Scene key="tab2" component={Home} title="Tab2" hideNavBar initial/>
          <Scene key="tab3" component={Setting} title="Tab2" hideNavBar/>
        </Tabs>
          <Scene key="language" component={Language}  hideNavBar />
          <Scene key="template" component={Template}  hideNavBar />
          <Scene key="channel" component={Channel}  hideNavBar />
          <Scene key="users" component={Users}  hideNavBar />
        </Stack>
      </Stack>
    </Router>
  );
}