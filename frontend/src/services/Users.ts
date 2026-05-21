
export async function getUsers() {

    const response = await fetch(
        "http://localhost:3555/users"
    );

    return response.json();
}