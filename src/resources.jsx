export const API = "https://63cc3d415c6f2e1d84c41619.mockapi.io/puresoft/api/"

export async function getData(endpoint) {
    return await fetch(API + endpoint, { mode: 'cors' })
        .then(response => response.json())
        .then(data => { return data })
}

export async function sendData(endpoint) {

    return await fetch(API + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then((response) => {
            return response;
        })
        .catch(error => console.error('Error:', error))
};

export async function deleteData(endpoint) {

    return await fetch(API + endpoint, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
        .then(response => {
            console.log('Deleted:', response);
        })
        .catch(error => console.error('Error:', error))
};

export async function updateData(endpoint, values) {

    return await fetch(API + endpoint, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    }).then(res => res.json())
        .then(response => {
            console.log('Success:', response);
        })
        .catch(error => console.error('Error:', error))
};
export async function sendDataBody(endpoint, values) {

    return await fetch(API + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values)
    }).then(res => res.json())
        .then(response => {
            return response
        })
        .catch(error => console.error('Error:', error))
};

export const Footer = () =>
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 88,
        backgroundColor: '#3c75ef',
    }}>

        <p style={{ color: 'white' }}>
            Desarrollado por <strong> <a href="https://www.realidadcreativa.com" style={{ marginLeft: 6, color: 'white' }}>realidadcreativa.com</a></strong> | © Realidad Creativa - 2023
        </p>

    </div>

export const estados = ["Michoacan", "Morelos", "Guerrero"];


