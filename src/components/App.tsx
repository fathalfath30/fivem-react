/*
//
//  ______    _   _           _  __      _   _     ____   ___
// |  ____|  | | | |         | |/ _|    | | | |   |___ \ / _ \
// | |__ __ _| |_| |__   __ _| | |_ __ _| |_| |__   __) | | | |
// |  __/ _` | __| '_ \ / _` | |  _/ _` | __| '_ \ |__ <| | | |
// | | | (_| | |_| | | | (_| | | || (_| | |_| | | |___) | |_| |
// |_|  \__,_|\__|_| |_|\__,_|_|_| \__,_|\__|_| |_|____/ \___/
//
// Written by Fathalfath30.
// Email : fathalfath30@gmail.com
// Follow me on:
//  Github : https://github.com/fathalfath30
//  Gitlab : https://gitlab.com/Fathalfath30
//
*/
import React from 'react';
import {Utils} from '../utils'
import $ from 'jquery';

import '../style/components/App.scss';

const App: React.FC = () => {
	// create close container
	const toggleContainer = async ()=> {
		let res = await Utils.RequestNUI('toggle-nui-callback');
		if (!res.ok){
			console.log(`error while fetching data with status: ${res.status}`);
			return;
		}

		console.log(await res.json())
	}

	// add new event listener to show or hide this container
	window.addEventListener('message', (evt) => {
		let data = evt.data;
		console.log(`new "message" events:`, JSON.stringify(data));
		let container = $("#app-container");
		if (data.action === 'hide-display-nui'){
			if (data.data.displayNui){
				container.show();
				container.css('display', 'flex');
			} else {
				container.hide();
				container.css('display', 'none');
			}
		}
	});

  	return (
		<div className='app-container' id="app-container">
			<div className='background'></div>
			<div className='content'>
				<div className='content-header'>
					<h3>FiveM React Sample</h3>
				</div>
				<div className='content-body'>
					<p>
						Hello [playerName] welcome to [serverName]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare, 
						metus lobortis dapibus convallis, lectus ante pulvinar ligula, in congue ex ipsum accumsan magna. Proin ullamcorper, 
						ligula ac facilisis mollis, nibh ipsum auctor velit, nec mattis ante justo non odio. Aenean ultrices nisl id ex iaculis maximus. 
						Maecenas iaculis velit ut nisi dapibus, ut pharetra risus ornare. Sed odio justo, luctus et purus in, lobortis consequat velit. 
						Cras auctor, mi sed egestas semper, metus risus sollicitudin dolor, sed scelerisque odio metus id nunc. Vivamus malesuada orci 
						a quam scelerisque imperdiet. Praesent efficitur, risus vitae feugiat ultricies, nibh diam auctor lectus, at mattis massa urna 
						eget ex. Nunc mattis porttitor sem, quis scelerisque felis sagittis id. Nullam hendrerit nisi a quam convallis lobortis. Etiam 
						dictum ligula ut sagittis tempus.
					</p>
					<p>
						Hello [playerName] welcome to [serverName]. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare, 
						metus lobortis dapibus convallis, lectus ante pulvinar ligula, in congue ex ipsum accumsan magna. Proin ullamcorper, 
						ligula ac facilisis mollis, nibh ipsum auctor velit, nec mattis ante justo non odio. Aenean ultrices nisl id ex iaculis maximus. 
						Maecenas iaculis velit ut nisi dapibus, ut pharetra risus ornare. Sed odio justo, luctus et purus in, lobortis consequat velit. 
						Cras auctor, mi sed egestas semper, metus risus sollicitudin dolor, sed scelerisque odio metus id nunc. Vivamus malesuada orci 
						a quam scelerisque imperdiet. Praesent efficitur, risus vitae feugiat ultricies, nibh diam auctor lectus, at mattis massa urna 
						eget ex. Nunc mattis porttitor sem, quis scelerisque felis sagittis id. Nullam hendrerit nisi a quam convallis lobortis. Etiam 
						dictum ligula ut sagittis tempus.
					</p>
				</div>
				<div className='content-footer'>
					<button className='btn btn-primary' onClick={toggleContainer}>Close</button>
				</div>
			</div>
		</div>
  	);
}

export default App;
