import ids from '../../constants/block-ids.ts';
import { RemarksBlock } from '../../types/types.ts';
import { header, plain } from '../../helpers/helpers.ts';

//## REMARKS

const remarksBlock: RemarksBlock = ({ id, label }) => ({
  type: 'input',
  block_id: id,
  label: plain(label),
  element: {
    type: 'plain_text_input',
    action_id: 'action',
    placeholder: plain('No Comments'),
  },
});

const infoRemarks = remarksBlock({
  id: ids.qcRemarks.infoRemarks,
  label: 'Info Remarks',
});

const landscapeRemarks = ({
  id: ids.qcRemarks.landscapeRemarks,
  label: 'Landscape Remarks',
});

const shiftRemarks = ({
  id: ids.qcRemarks.landscapeRemarks,
  label: 'Shift Remarks',
});

const inventoryRemarks = ({
  id: ids.qcRemarks.shiftRemarks,
  label: 'Inventory Remarks',
});

//## CHECKS

export const qcRemarksBlocks = [
  header(':pencil: Info Check'),
  infoRemarks,
  header(':office: Site Landscape'),
  landscapeRemarks,
  header(':clock10: Shift Flow'),
  shiftRemarks,
  header(':scales: Inventory State'),
  inventoryRemarks,
];
