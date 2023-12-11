import URL from "../constants/url"

export interface CreateUserDTO{
  username: string;
  name: string;
  email: string;
  password: string;
  birthdate: string;
}

export interface AuthenticateDTO{
  email: string;
  password: string;
}

export async function signUp(user: CreateUserDTO){
  try{
    const response = await fetch(`${URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if(response.status !== 201){
      return false;
    }

    const data = await response.json();
    return data;
  }catch(e){
    console.log(e);
  }
}

export async function authenticate(user: AuthenticateDTO){
  try{
    const response = await fetch(`${URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if(response.status != 200) return false;

    const data = await response.json();
    return data;
  }catch(e){
    console.log(e);
  }
}