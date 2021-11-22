import sample from "lodash/sample";

// Array of available nodes to connect to
export const nodes = [process.env.NEXT_PUBLIC_NODE_1, process.env.NEXT_PUBLIC_NODE_2, process.env.NEXT_PUBLIC_NODE_3];

const getNodeUrl = () => {
  return sample(nodes);
};

export default getNodeUrl;
