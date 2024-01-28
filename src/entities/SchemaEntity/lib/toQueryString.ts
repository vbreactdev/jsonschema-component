export type FormData = Record<string, string | string[]>;

export const toQueryString = (data: FormData) => {
  const params = new URLSearchParams();

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (Array.isArray(value)) {
      value.forEach((item) => params.append(key, item));
    } else {
      params.append(key, value);
    }
  });

  return params.toString();
};
