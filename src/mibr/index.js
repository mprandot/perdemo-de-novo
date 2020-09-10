const HLTV = require('hltv-api').default;
const filteringUtils = require('../utils/filtering');
const transformingUtils = require('../utils/transforming');
const didWeLose = require('../utils/did-we-lose');
const Services = require('../services');

const __getResults = async function () {
  const matches = await HLTV.getResults();
  return matches
    .map(transformingUtils.normalizeMatchResults)
    .filter(filteringUtils.isMIBRPlaying)
    .reduce(function (carry, item) {
      return item;
    }, null);
}

const inspect = async function () {
  const mibrResults = await __getResults();

  if(mibrResults) {
    const weLose = didWeLose(mibrResults);
    if(weLose) {
      const services = await Services.buildServices();
      services.forEach((s) => s.send());
    }
  }
}

module.exports = {
  inspect
};