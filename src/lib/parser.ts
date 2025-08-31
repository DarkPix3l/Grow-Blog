import { remark } from "remark";
import html from "remark-html";


export default async function parser(markdown:string): Promise<string> {
    const result = await remark().use(html).process(markdown);
    return result.toString();
}