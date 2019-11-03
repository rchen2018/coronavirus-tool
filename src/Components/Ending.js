import React, {Component} from 'react'
import { Header } from 'semantic-ui-react'
import {List} from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'
import Logo from '../badges.png'
import logo from '../greenLogo.png'


class Ending extends Component {

	render() {
		return (
			<div class="end">
			  <div class="tips"> 
			  	<h1>Here are some tips on reducing usage</h1>
			    	<List bulleted>
			    	<List.Item>Stop using water </List.Item>
			    	<List.Item>Stop using electricity </List.Item>
			    	<List.Item>Plant some trees </List.Item>
			    	</List>
			    </div>

			    <div class="facts">
			    <h1>Everything Counts </h1>
			    	<List bulleted>
			    		<List.Item>1 cup of water is equal to 8 ounces </List.Item>
			    		<List.Item>Water is capable of putting out fires </List.Item>
			    		<List.Item>Electricity is created using generators that use oil</List.Item>
			    		</List>
			    </div>



			    <div class="badges">
			    <Image src={Logo} alt='Badge Collection' size='huge' centered />
			    <h2>Almost there! Earn 2 more badges to unlock more rewards!</h2>
			    </div>



			    <div class="logo">
			    <Image src={logo} alt='team logo' size='medium' centered />

				</div>
			 </div>


		);
	}
}



export default Ending;

