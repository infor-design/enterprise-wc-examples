/**
 * Count the objects looking for memory leaks.
 * @param {any} page any the puppeteer page
 */
const countObjects = async (page) => {
    const prototypeHandle = await page.evaluateHandle(() => Object.prototype);
    const objectsHandle = await page.queryObjects(prototypeHandle);
    const numberOfObjects = await page.evaluate((instances) => instances.length, objectsHandle);
    await Promise.all([
        prototypeHandle.dispose(),
        objectsHandle.dispose()
    ]);
    return numberOfObjects;
};
export default countObjects;
//# sourceMappingURL=count-objects.js.map