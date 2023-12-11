import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Modules from './pages/Home/Modules'
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile'
import Ranking from './pages/Ranking/Ranking'
import SignForm from './pages/Forms/SignForm'
import LoginForm from './pages/Forms/LoginForm'
import Theory from './pages/Home/Theory';
import Forms from './pages/Forms/Forms';
import Config from './pages/Config/Config'

const Tab = createBottomTabNavigator();

export const Routes = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#1ED616',
            tabBarInactiveTintColor: 'gray',
            tabBarLabelPosition: 'below-icon',
            tabBarStyle:{
                borderTopWidth: 0,
                elevation: 0,
                backgroundColor: '#fff',
                paddingTop: 10,
                paddingBottom: 10,
                height: 60
            }
        }}>
            <Tab.Screen name='Home' component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <View>
                        <MaterialCommunityIcons name="home" color={color} size={size} />  
                    </View>
                    )
                }}
            />

            <Tab.Screen name='Ranking' component={Ranking} options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <View>
                        <MaterialCommunityIcons name="trophy-variant" color={color} size={size} /> 
                    </View>
                )
            }}
            
            />     

            <Tab.Screen name='Profile' component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <View>
                        <MaterialCommunityIcons name="account" color={color} size={size} />  
                    </View>
                )
            }}
            
            />  

            <Tab.Screen name='Config' component={Config} options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <View>
                        <MaterialCommunityIcons name="cog" color={color} size={size} />  
                    </View>
                )
            }}
            
            /> 
        </Tab.Navigator>
    );
}


