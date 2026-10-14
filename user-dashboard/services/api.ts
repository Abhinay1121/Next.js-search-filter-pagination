// Keep API endpoint in one place
const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function fetchUsers(){
    const response = await fetch(API_URL)

    return response.json()
}