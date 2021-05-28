import SparkMD5 from 'spark-md5'

const base = 'https://api.akazwz.com/v1'

export function post(endpoint, data) {
    return fetch(`${base}${endpoint}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(data || {}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((result) => result.json())
}

export function uploadFile(formData) {
    return fetch(base + '/file', {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiZDU3ZDMxYzgtNmRmYy00M2Y4LTg0NjEtOTdhNDhlYmE3ZDBlIiwiSUQiOjEsIlVzZXJuYW1lIjoiend6IiwiTmlja05hbWUiOiJ6d3oiLCJBdXRob3JpdHlJZCI6IiIsIkJ1ZmZlclRpbWUiOjg2NDAwLCJleHAiOjE2MjI3OTMxNDksImlzcyI6Inp3eiIsIm5iZiI6MTYyMjE4NzM0OX0.RfpKAPhKA786q773-Ce2ScnpPexKu2HsL5sC4GeKwuw'
        }
    }).then(r => r.json())
}
