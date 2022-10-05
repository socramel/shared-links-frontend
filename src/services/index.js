export const getAllLinksService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/links`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getUserLinksService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/users/${id}/links`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const getSingleLinkService = async (id) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/links/${id}`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
  return json.data;
};

export const registerUserService = async ({ name, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const loginUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getMyUserDataService = async (token) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/users`, {
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getUserDataService = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/users/info/${id}`
  );
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendLinkService = async ({ data, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/links`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Authorization: token,
      "Content-type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deleteLinkService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/links/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const voteLinkService = async ({ id, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/votes/${id}`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
  });
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};
