import React from 'react';

interface UseFetch {
    getData: (endPoint: string) => Promise<any>;
    postData: (endPoint: string, payload: string) => Promise<any>;
    putData: (endPoint: string, payload: string) => Promise<any>;
    deleteData: (endPoint: string) => Promise<any>;
}

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

const useFetch:UseFetch  = {
    getData: async (endPoint:string): Promise<any> => {
        try {
            const resURL = `${API_URL}${/^\//gi.test(endPoint) ? '' : '/'}${endPoint}?populate=*`;
            const response = await fetch(resURL, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) { 
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return { "data": data.data, "meta": data.meta }
        } catch(errorMessage) {
            console.error("API call failed:", errorMessage);
            throw new Error("Failed to fetch data from the API");
        }
    },
    postData: async (endPoint: string, payload: string): Promise<any> => {
        try {
            const resURL = `${API_URL}${/^\//gi.test(endPoint) ? '' : '/'}${endPoint}?populate=*`;
            const response = await fetch(resURL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            return { "data": data.data, "meta": data.meta }
        } catch (errorMessage) {
            console.error("Post to API failed:", errorMessage);
            throw new Error("Failed to post data to API");
        }
    },
    putData: async (endPoint:string, payload:string): Promise<any> => {
        try {
            const resURL = `${API_URL}${/^\//gi.test(endPoint) ? '' : '/'}${endPoint}?populate=*`;
            const response = await fetch(resURL, {
                method: "PUT",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            });
            const data = await response.json();
            return { "data": data.data, "meta": data.meta }
        } catch(errorMessage) {
            console.error("Put to API failed:", errorMessage);
            throw new Error("Failed to put data to API");
        }
    },
    deleteData: async (endPoint:string): Promise<any> => {
        try {
            const resURL = `${API_URL}${/^\//gi.test(endPoint) ? '' : '/'}${endPoint}?populate=*`;
            const response = await fetch(resURL, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            return { "data": data.data, "meta": data.meta }
        } catch(errorMessage) {
            console.error("API deletion failed:", errorMessage);
            throw new Error("Could not delete data from API");
        }
    }
}

export default useFetch;