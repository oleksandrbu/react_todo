class Connection {
    constructor(endpoint){
        this.endpoint = endpoint
    }

    get = () => {
        return fetch(this.endpoint)
                .then(response => response.json())
                .catch(err => console.log(err))
    }
    
    add = (taskName) => {
        return fetch(this.endpoint, {method: 'POST', 
                headers:  {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: taskName})})
                .catch(err => console.log(err))
    }

    delete = (body) => {
        return fetch(this.endpoint + `/${body}`, {method: 'DELETE'})
                .catch(err => console.log(err))
                
    }

    patch = (id, complited) => {
        return fetch(this.endpoint + `/${id}`, {method: 'PATCH',
                headers:  {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({complited: complited})})
                .catch(err => console.log(err))
    }
}

export default Connection