import { MaterialCommunityIcons } from '@expo/vector-icons';

export interface IStatement{
    title: string;
    description: string;
}

export interface IAlternative{
    title: string;
    isCorrect?: boolean;
    onPress: ()=> any; 
    isDisabled: boolean;
    background?: string;
}

export type IconName = typeof MaterialCommunityIcons['name'];