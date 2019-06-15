import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';

//引入模块页面
import App from '../App';
import One from '../container/one';
import Two from '../container/two';
import render from '../container/render';
import parent from '../container/components/parent';
import events from '../container/events'
import ifRende from '../container/ifRende'
import list from '../container/list';
import forms from '../container/form';
import stateAscension from '../container/stateAscension';
import heighChild from '../container/heighChild';
import Contexts from '../container/context';
import errorState from '../container/errorState'
 
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
                            <Route path="/parent" component={parent}></Route>
                            <Route path="/events" component={events}></Route>
                            <Route path="/ifRende" component={ifRende}></Route>
                            <Route path="/list" component={list}></Route>
                            <Route path="/forms" component={forms}></Route>
                            <Route path="/heighChild" component={heighChild}></Route>
                            <Route path="/stateAscension" component={stateAscension}></Route>
                            <Route path="/context" component={Contexts}></Route>
                            <Route path="/errorState" component={errorState}></Route>
                            <Route render={()=><Redirect to="/renders"/>}/>
                        </Switch>
                    </App>
                )}
            />
        </Switch>
    </div>
)

export default Root;