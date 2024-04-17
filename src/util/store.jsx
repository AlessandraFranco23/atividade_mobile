import AsyncStorage from '@react-native-async-storage/async-storage';


export class Store {
    static async saveUser(userData) {
        try {
            await AsyncStorage.setItem("user", JSON.stringify(userData));
         
        } catch (error) {
            console.log("error while storing data", error);
        }
    };
    static async getUser() {
        try {
            return await AsyncStorage.getItem("user");
        } catch (error) {
            console.log("error while storing data", error);
        }
    }

}