// Saturday fun
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
//work scheduled for the week
  const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}
//wrapped adjective
function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}

  