function addUTMParamsToForm() {
  function getUTM(param) {
  try {
    if (
      typeof trackingNemu !== 'undefined' &&
      trackingNemu.nemuUtms &&
      typeof trackingNemu.nemuUtms.get === 'function'
    ) {
      var nemuValue = trackingNemu.nemuUtms.get(param);
      if (nemuValue) return nemuValue;
    }
  } catch (e) {
  }

  var urlParams = new URLSearchParams(window.location.search);
  var urlValue = urlParams.get(param);
  if (urlValue) return urlValue;

  return '';
}
  // UTMs padrão
  document.getElementById('u_source').value   = getUTM('nemu_source');
  document.getElementById('u_medium').value   = getUTM('nemu_adset');
  document.getElementById('u_campaign').value = getUTM('nemu_campaign');
  document.getElementById('u_content').value  = getUTM('utm_content');
  document.getElementById('u_term').value     = getUTM('nemu_term');

  // UTMs / parâmetros Nemu
  document.getElementById('nemu_source').value   = getUTM('nemu_source');
  document.getElementById('nemu_adset').value    = getUTM('nemu_adset');
  document.getElementById('nemu_campaign').value = getUTM('nemu_campaign');
  document.getElementById('nemu_content').value  = getUTM('utm_content');
}
