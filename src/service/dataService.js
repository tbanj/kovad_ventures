import http from './httpService';
import env from '../env.js';

export function sendMessage(message) {
    return http.post(`${env.api}/mail/inquiry`, message).then(response => {
        return response;
    });
}

export function sendQuote(data) {
    return http.post(`${env.api}/mail/request`, data).then(response => {
        return response;
    });
}

export function addVisitor(visitor) {
    return http.post(`${env.api}/visitor`, visitor).then(response => {
        return response;
    });
}

export function addVisitorData(visitor) {
    return http.post(`${env.api}/visitor/nophone`, visitor).then(response => {
        return response;
    });
}




