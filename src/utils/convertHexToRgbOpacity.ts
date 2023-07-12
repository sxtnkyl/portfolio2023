/**
 * add an opacity value to a hex or rgb value
 *
 * @param0 hex: rgb or hex value
 * @param1 opacity: opacity to add to param0
 *
 * @returns rgba string
 */
export const convertHexToRgbOpacity = ({
  hex,
  opacity,
}: {
  hex: string;
  opacity: string;
}) => {
  //color as rgb
  if (hex.charAt(0) !== '#') {
    const values = hex.split('');
    const insert = ', ' + opacity + ')';
    values.splice(values.length - 1, 1, insert);
    return values.join('');
  }

  //color as hex value
  if (hex.charAt(0) === '#') {
    hex = hex.substring(1);

    let values = hex.split('');

    let r = parseInt(values[0].toString() + values[1].toString(), 16);
    let g = parseInt(values[2].toString() + values[3].toString(), 16);
    let b = parseInt(values[4].toString() + values[5].toString(), 16);

    return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity + ')';
  } else 'rgba(0, 0, 0, 0)';
};
