import { tagsToText } from '../../../helpers/helpers.ts';

interface Props {
  site: string;
  zone: string;
  priority: string;
  request: string;
  quantity: string;
  tags: string[];
}

const signageTemplate = (p: Props) => (`
_Location/client_: ${p.site}
_Signage/labels needed_: ${p.request}
_Quantity_: ${p.quantity}
_Priority_: ${p.priority}
----------
@ba-fieldops ${tagsToText(p.tags)}
`);

export default signageTemplate;
