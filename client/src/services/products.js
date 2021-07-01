import api from './apiConfig';

export const getProducts = async () => {
  try {
    const res = await api.get('/products');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getOneProduct = async id => {
  try {
    const res = await api.get(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async form => {
  try {
    const res = await api.post('/products', form);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (id, form) => {
  try {
    const res = await api.put(`/products/${id}/edit`, form);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async id => {
  try {
    const res = await api.delete(`/products/${id}`);
    return res.data;
  } catch (error) {
    throw error;
  }
};
