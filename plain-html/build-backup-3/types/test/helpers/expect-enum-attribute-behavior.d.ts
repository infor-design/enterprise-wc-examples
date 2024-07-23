/**
 * Runs assertions on a test that a standard element attribute
 * can be one of a specific set of values while getting
 * coverage % for setters/getters.
 * @param {object} param0 params
 * @param {HTMLElement} param0.elem Element to test
 * @param {string} param0.attribute the attribute namespace to check e.g. "parent-containment"
 * @param {Array<string>} param0.values possible values the enum can be set to
 * @param {string|null} param0.defaultValue a default value the attribute
 * should be set to when no valid attribute is set. If set to "null", will
 * assume that the attribute should be removed when it has invalid value.
 */
export default function expectEnumAttributeBehavior({ elem, attribute, values, defaultValue, }: any): void;
