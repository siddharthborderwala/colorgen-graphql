import namer from 'color-namer';

const generateLabel = (color) => {
  return namer('#' + color, { pick: ['ntc'] }).ntc[0].name;
};

export default generateLabel;
