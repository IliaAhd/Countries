export const AJAX = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) throw new Error('Failed to fetch');
    return data;
  } catch (error) {
    throw error;
  }
};
