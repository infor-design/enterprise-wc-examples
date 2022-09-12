/**
 * Converts a string containing a phrase with capital letters and spaces to dash case
 * @param {string} val incoming string to modify
 * @returns {string} the modified string
 */
export const dashCase = (val = ''): string => {
  return val.toLowerCase().split(' ').join('-');
};

/**
 * Allows pretty-looking data formatting in the template
 * @param {string} str incoming string to modify
 * @returns {string} a pretty-looking JSON representation of the string
 */
export const prettyFormat = (str: string): string => JSON.stringify(str, null, 2);