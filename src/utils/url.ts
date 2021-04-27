export const setUrlWithParams = (url: string, params?: unknown) =>
  `${url}?${new URLSearchParams(params as Record<string, string>)}`;
