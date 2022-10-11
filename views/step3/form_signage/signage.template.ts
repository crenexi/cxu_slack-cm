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
----------
@ba-fieldops ${p.tags.map((t) => `<@${t}>`)}
`);

export default signageTemplate;
