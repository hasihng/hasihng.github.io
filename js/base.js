function serialize(object) {
  var type = typeof object;
  if (object === null) {
    return '"nullValue"';
  }
  if (type == 'string' || type === 'number' || type === 'boolean') {
    return '"' + object + '"';
  } else if (type === 'function') {
    return '"functionValue"';
  } else if (type === 'object') {
    var output = '{';
    for (var item in object) {
      if (item !== 'enabledPlugin') {
        output += '"' + item + '":' + serialize(object[item]) + ',';
      }
    }
    return output.replace(/\,$/, '') + '}';
  } else if (type === 'undefined') {
    return '"undefinedError"';
  } else {
    return '"unknownTypeError"';
  }
};

$( document ).ready(function() {
    $(".user-agent").html(navigator.userAgent);
    $(".details p").html(serialize(navigator));
    console.debug(navigator);
});
