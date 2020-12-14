import React from 'react';
import {RenderRoutes} from 'router-util';
import AddSchedule from './AddSchedule';
import 'antd/dist/antd.css';
import {Provider} from "react-redux";
import store from "./store";
import ListSchedules from "./ListSchedules";

const routes = [
	
	{
		key:2,
		exact:true,
		pathname:'/list',
		component:ListSchedules
		
	},
	{
		key:1,
		exact:true,
		pathname:'/',
		component:AddSchedule
		
	},
]


function App(){

	return(
		<Provider store={store}>
			<RenderRoutes routes={routes}/>
		</Provider>
		
	)
}

export default App;
