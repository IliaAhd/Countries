export const AJAX = async url => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error('Faild to fetch');

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};
