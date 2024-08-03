// src/services/api.js

import axios from 'axios';

const API_URL = 'http://localhost:3001/items';

export const fetchItems = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.sort((a, b) => a.order - b.order);
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
};

export const updateItemOrder = async (items) => {
    try {
        const promises = items.map((item, index) =>
            axios.patch(`${API_URL}/${item.id}`, { order: index })
        );
        await Promise.all(promises);
    } catch (error) {
        console.error('Error updating item order:', error);
    }
};
