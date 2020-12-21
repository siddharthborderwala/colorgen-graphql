import namer from 'color-namer';

/**
 * Takes hex code of color (without #) and returns its name
 * @param {string} color hex code of the color
 */
const generateLabel = (color) => {
  return namer('#' + color, { pick: ['ntc'] }).ntc[0].name;
};

export default generateLabel;
