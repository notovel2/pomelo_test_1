import { transformToTree } from "../services/nodeService"

export const transformTree  = (req, h) => {
    const { data } = req.payload;
    const result = transformToTree(data);
    return result;
}