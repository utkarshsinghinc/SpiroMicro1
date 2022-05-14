import * as SecureStore from 'expo-secure-store';

const storeToken = async (authToken,id,key) =>{
    const jsonData={
        id:id,
        token:authToken
    } 
    try{
        await SecureStore.setItemAsync(key,JSON.stringify(jsonData));
    } catch(error){
        console.log('Error secure store',error)
    }
}

const getToken = async (key)=>{
    try{
        return await SecureStore.getItemAsync(key);
    }
    catch(error){
        console.log('Error getting the auth token',error)
    }
}

const removeToken = (key) =>{
    try{
    SecureStore.deleteItemAsync(key);
    }
    catch(error){
        console.log('error in deleting auth token',error)
    }
}

export default {getToken,storeToken,removeToken}