import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Modules from './pages/Home/Modules'
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile'
import Ranking from './pages/Ranking/Ranking'
import SignForm from './pages/Forms/SignForm'

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
                        <Ionicons name='home' size={size} color={color}></Ionicons> 
                    </View>
                    )
                }}
            />

            <Tab.Screen name='Ranking' component={Ranking} options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <View>
                        <Ionicons name='trophy' size={size} color={color}></Ionicons> 
                    </View>
                )
            }}
            
            />

            <Tab.Screen name='SignForm' component={SignForm} options={{
                headerShown: false,
                tabBarIcon: ({ size, color }) => (
                    <View>
                        <Ionicons name='person' size={size} color={color}></Ionicons> 
                    </View>
                    )
                }}
            />          
        </Tab.Navigator>
    );
}


