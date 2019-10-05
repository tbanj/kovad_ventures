function getPath(){
    return localStorage.getItem('path');
}

function storePath(data) {
    localStorage.setItem("path", data)
}

export default {
getPath,
storePath
}