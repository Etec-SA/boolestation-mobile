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