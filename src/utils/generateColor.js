import { rgb } from 'color-convert';

/**
 * Generates a radom number from 0-255
 */
const randomPoint = () => {
  return Math.floor(256 * Math.random());
};

/**
 * generates a random hex color code
 */
const generateColor = () => {
  return rgb.hex(randomPoint(), randomPoint(), randomPoint());
};

export default generateColor;
