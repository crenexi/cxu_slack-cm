import { tagsToText } from '../../../helpers/helpers.ts';

interface Props {
  site: string;
  zone: string;
  request: string;
  quantity: string;
  tags: string[];
}

const signageTemplate = (p: Props) => (`
Location/client: ${p.site}
Signage/labels needed: ${p.request}
Quantity: ${p.quantity}
----------
@ba-fieldops ${tagsToText(p.tags)}
`);

export default signageTemplate;
