interface IApi {
  url: string;
}

export const callAPI = async ({ url }: IApi) => {
  return await (await fetch(url)).json();
};
