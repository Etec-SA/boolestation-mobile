import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Ranking from './pages/Ranking/Ranking'
import LoginForm from './pages/Forms/LoginForm'

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
                backgroundColor: '#28282B',
                paddingTop: 10,
                paddingBottom: 10,
                height: 60
            }
        }}>
            <Tab.Screen name='Home' component={Home} options={{
                headerTitle: 'Boolestation',
                headerTitleStyle:{
                    fontWeight: 'bold',
                    color: '#f0f0f0',
                    fontSize: 24
                },
                headerStyle:{
                    backgroundColor: '#141415',
                    height: 100,
                    borderBottomWidth: 0,
                },
                tabBarIcon: ({ size, color }) => (
                    <View>
                        <Ionicons name='home' size={size} color={color}></Ionicons> 
                    </View>
                    )
                }}
            />

            <Tab.Screen name='Ranking' component={Ranking} options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                    <View>
                        <Ionicons name='trophy' size={size} color={color}></Ionicons> 
                    </View>
                )
            }}
            
            />

            <Tab.Screen name='Profile' component={Profile} options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                    <View>
                        <Ionicons name='person' size={size} color={color}></Ionicons> 
                    </View>
                    )
                }}
            />

            <Tab.Screen name='Notifications' component={LoginForm} options={{
                headerShown: false,
                tabBarIcon: ({ focused, size, color }) => (
                    <View>
                        <Ionicons name='notifications' size={size} color={color}></Ionicons> 
                    </View>
                )
            }}
            />            
        </Tab.Navigator>
    );
}


