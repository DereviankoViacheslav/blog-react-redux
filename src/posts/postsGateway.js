const baseUrl = 'https://simpleblogapi.herokuapp.com';

export const fetchPosts = async () => {
  const url = `${baseUrl}/posts`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not fetch, received ${res.status}`);
  return await res.json();
};

export const fetchSinglePost = async (id) => {
  const url = `${baseUrl}/posts/${id}?_embed=comments`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Could not fetch, received ${res.status}`);
  return await res.json();
};

export const addComment = async (comment) => {
  const configObject = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8', },
    body: JSON.stringify(comment),
  };
  const url = `${baseUrl}/comments`;
  const res = await fetch(url, configObject);
  if (!res.ok) throw new Error(`Could not fetch, received ${res.status}`);
  return await res.json();
};

export const addPost = async (post) => {
  const configObject = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=utf-8', },
    body: JSON.stringify(post),
  };
  const url = `${baseUrl}/posts`;
  const res = await fetch(url, configObject);
  if (!res.ok) throw new Error(`Could not fetch, received ${res.status}`);
  return await res.json();
};

export const deletePost = async (id) => {
  const configObject = { method: 'DELETE' };
  const url = `${baseUrl}/posts/${id}`;
  const res = await fetch(url, configObject);
  if (!res.ok) throw new Error(`Could not fetch, received ${res.status}`);
  return await res.json();
};

export const updatePost = async ({ id, ...post }) => {
  const configObject = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json;charset=utf-8', },
    body: JSON.stringify(post),
  };
  const url = `${baseUrl}/posts/${id}`;
  const res = await fetch(url, configObject);
  if (!res.ok) throw new Error(`Could not fetch, received ${res.status}`);
  return await res.json();
};