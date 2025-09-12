<<<<<<< HEAD
import { registerRootComponent } from 'expo';

//import Home from './src/pages/Home';
//import Home2 from './src/pages/Home2';
import Login from './src/pages/Login';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Login);
=======
import { registerRootComponent } from 'expo';

//import App from './App';
import Home from './src/pages/Home';
//import ChamaTodos from './src/components/TestaPaiEFilho/ChamaTodos';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
//registerRootComponent(App);
registerRootComponent(Home);
//registerRootComponent(ChamaTodos);
>>>>>>> 6d85a3520b16b1dd01fe12634577915684e1b321
