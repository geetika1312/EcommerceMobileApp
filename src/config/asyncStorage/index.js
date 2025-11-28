import AsyncStorage from "@react-native-async-storage/async-storage";

export const _storeIntoAsyncStorage = async(KeyboardEvent, value) => {
    try{
        await AsyncStorage.setItem(KeyboardEvent, value);
    }catch{
        console.log('=> error:','storing data in async storage');
    }
};

export const _getFromAsyncStorage = async key => {
    try {
        const value = await AsyncStorage.getItem(key);
        if(value){
            return value;
        } else{
            return null;
        }
    } catch (e) {
        console.log('=> error:','getting data in async storage');
    }
}