/**
 * Sets the resource counts.
 * @param {string[]} resources list of resource types.
 */
Player.prototype.SetResourceCounts = function (resources) {
    for (let res in resources)
        this.resourceCount[res] = Resources.GetZeroResourceStartCodes().some((x) => x === res) ? 0 : resources[res];
};
