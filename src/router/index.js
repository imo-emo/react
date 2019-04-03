import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

//引入模块页面
import App from '../App';
import One from '../container/one';
import Two from '../container/two';
import render from '../container/render'

//定义root
const Root = ()=>(
    <div>
        <Switch>
            <Route 
                path="/"
                render={props=>(
                    <App>
                        <Switch>
                            <Route path="/one" exact component={One}></Route>
                            <Route path="/renders" component={render}></Route>
                            <Route path="/two" component={Two}></Route>
                            <Route render={()=><Redirect to="/renders"/>}/>
                        </Switch>
                    </App>
                )}
            />
        </Switch>
    </div>
)

export default Root;